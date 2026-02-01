const express = require("express");
const multer = require("multer");
const { extractText } = require("../Services/document.service");
const { createVapiCall } = require("../Services/vapi.services");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const analyzeCV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CV file is required" });
    }

    const text = await extractText(req.file);

    if (!text || text.length < 50) {
      return res.status(400).json({ message: "Unable to extract CV text" });
    }

    const analysis = {
      strengths: [
        "Clear professional summary",
        "Relevant technical experience",
      ],
      weaknesses: [
        "Lacks measurable achievements",
        "Formatting could be improved",
      ],
      atsTips: [
        "Use role-specific keywords",
        "Avoid tables and graphics",
      ],
      missingSkills: ["Problem Solving", "System Design"],
      score: 75,
    };

    const voicePrompt = `
Here is feedback for the uploaded CV.

Overall score: ${analysis.score} percent.

Strengths:
${analysis.strengths.join(". ")}

Weaknesses:
${analysis.weaknesses.join(". ")}

ATS Tips:
${analysis.atsTips.join(". ")}

Missing skills to improve:
${analysis.missingSkills.join(". ")}
`;

    let vapiResponse = null;

    try {
      vapiResponse = await createVapiCall(voicePrompt, {
        type: "CV_FEEDBACK",
      });
    } catch (vapiError) {
      console.error("VAPI Error:", vapiError.message);
    }

    return res.status(200).json({
      success: true,
      analysis,
      text,
      voice: vapiResponse,
    });
  } catch (error) {
    console.error("CV Analyze Error:", error.message);
    return res.status(500).json({ message: "CV processing failed" });
  }
};

router.post("/analyze", upload.single("cv"), analyzeCV);
router.post("/upload", upload.single("cv"), analyzeCV);

module.exports = router;

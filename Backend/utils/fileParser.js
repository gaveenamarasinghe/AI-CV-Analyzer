const pdf = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs");

const extractText = async (filePath, mimetype) => {
  if (mimetype === "application/pdf") {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  }

  if (mimetype.includes("word")) {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }

  throw new Error("Unsupported file type");
};

module.exports = { extractText };

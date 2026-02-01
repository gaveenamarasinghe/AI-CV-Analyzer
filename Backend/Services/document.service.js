const pdf = require("pdf-parse");
const mammoth = require("mammoth");

exports.extractText = async (file) => {
  const buffer = file.buffer;
  let text = "";

  if (file.mimetype === "application/pdf") {
    const data = await pdf(buffer);
    text = data.text;
  }

  if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const result = await mammoth.extractRawText({ buffer });
    text = result.value;
  }

  return text.slice(0, 6000); // limit for voice AI
};

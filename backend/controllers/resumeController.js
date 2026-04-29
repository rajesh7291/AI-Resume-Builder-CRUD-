const Resume = require("../models/Resume");
exports.createResume = async (req, res) => {
  try {
    const { name, email, phone, education, skills, experience } = req.body;

    const summary = `${name} is a motivated professional with skills in ${skills}. Experienced in ${experience}.`;

    const data = await Resume.create({
      name,
      email,
      phone,
      education,
      skills,
      experience,
      summary,
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllResume = async (req, res) => {
  const data = await Resume.findAll();
  res.json(data);
};

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/resume", resumeRoutes);
const PORT = process.env.PORT;

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server run on port no ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

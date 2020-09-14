const express = require("express");
const { getAllProjects, addProject } = require("../controllers");
const router = express.Router();

router.get("/projects", getAllProjects);
router.post("/addProject", addProject);

module.exports = router;

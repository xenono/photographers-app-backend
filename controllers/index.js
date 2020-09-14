const mongoose = require("mongoose");
require("../models/Project");

const Project = mongoose.model("project");

const getAllProjects = (req, res) => {
    Project.find({})
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
};

const addProject = (req, res) => {
    const newProject = new Project(req.body);
    newProject.save((err, project) => {
        if (err) {
            console.log(err);
            res.status("400").json({
                error: "Project can't be added",
            });
        } else {
            res.send(project);
        }
    });
};

const deleteProject = (req, res) => {
    const projectId = req.body._id;
};

module.exports = {
    getAllProjects,
    addProject,
};

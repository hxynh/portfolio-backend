const asyncHandler = require('express-async-handler')
const Project = require('../models/projectModel')

// @desc    Get Projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler (async (req, res) => {
    const projects = await Project.find()
    res.status(200).json(projects)
})

module.exports = {
    getProjects
}
const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    description: {
        type: String,
        required: [true, 'Please enter description']
    },
    codeURL: {
        type: String,
        required: [true, 'Please enter a GIT URL']
    },
    vercelURL: {
        type: String,
        required: [true, 'Please enter a Vercel URL']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)
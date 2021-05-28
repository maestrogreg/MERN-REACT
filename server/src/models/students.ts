import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    registrationNumber: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    },
    subject: [String]
})

const student = mongoose.model('student', studentSchema);

export default student;
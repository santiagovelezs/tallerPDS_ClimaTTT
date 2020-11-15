import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/taller2pds',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'DB connection error!'))
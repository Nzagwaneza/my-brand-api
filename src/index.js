const express = require('express');
const connectDB = require('./config/Db');
const userRoutes = require('./routes/UsersRoutes')
const blogsRoutes = require('./routes/blogsRoutes')
const commentRoutes = require('./routes/CommentsRoutes')
const subscribeRoutes = require('./routes/SubscribesRoutes')
const dotenv = require('dotenv')


dotenv.config()

const app = express()
connectDB;

app.use(express.json())
app.use('/uploads', express.static('uploads'));

app.use('/users', userRoutes);
app.use('/blogs', blogsRoutes)
app.use('/comment', commentRoutes)
app.use('/subscribe', subscribeRoutes)


app.listen(3001, () => {
    console.log("Server is running ....");
})

module.exports = app;
import express from 'express'
import userRouters from './src/routes/users.routes.js'
import booksRouters from './src/routes/books.routes.js'
import "dotenv/config"

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(userRouters)
app.use(booksRouters)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

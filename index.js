import express from 'express'
import userRouters from './src/routes/users.routes.js'
const app = express();
const port = 3000;
app.use(express.json());

app.use(userRouters)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

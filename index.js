import express from 'express'
import { routers } from './src/routes/index.js';
import "dotenv/config"
import "./src/service/cron.service.js"

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(routers)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

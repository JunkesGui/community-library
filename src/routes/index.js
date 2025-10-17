import {Router} from "express";
import userRouters from './users.routes.js';
import booksRouters from './books.routes.js';
import loanRouters from './loans.routes.js';

const routers = Router()

routers.use("/users",userRouters)
routers.use("/books",booksRouters)
routers.use("/loans",loanRouters)

export  {routers}

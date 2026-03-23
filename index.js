import express from "express"; 
const app = express();
import path from 'path'; 
import { fileURLToPath } from 'url'; 
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename); 

app.set("view engine", "ejs"); 
app.use(express.static(dirname + "/public")); 
app.use(express.urlencoded({ extended: true }));
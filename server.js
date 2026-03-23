import express from "express"; 
import path from 'path'; 
import { fileURLToPath } from 'url'; 
import homeRoutes from "./routes/homeRoutes.js";

const app = express();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename); 

// Configurações
app.set("view engine", "ejs"); 
app.use(express.static(path.join(dirname, "public"))); 
app.use(express.urlencoded({ extended: true })); 

// Rotas
app.use("/", homeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[OK] Servidor Express a correr em http://localhost:${PORT}/`);
});
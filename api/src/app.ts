
import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo"

const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

db()
.then(() => console.log("Conectado a la base de datos"))
.catch(() => console.log("Error al conectar base de datos"));

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))
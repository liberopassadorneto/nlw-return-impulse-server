import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

// Quais endereços (de front-end) podem acessar/consumir a API
// Controle de segurança
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running");
});

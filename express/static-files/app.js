import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "main.html"));
});

app.get("/test", (req, res) => {
  res.send("test");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Rock & Roll on port ${PORT}`));

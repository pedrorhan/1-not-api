const express = require("express");
const path = require("path");
const fs = require("fs/promises");
const app = express();
const PORT = 3434;

app.use(express.json());
const filePath = path.join(__dirname, "notes.json");

app.listen(PORT, () => {
  console.log(`express sunucusu ${PORT} portunda çalışıyor`);
});

app.get("/api/notes", async (req, res) => {
  const icerik = await fs.readFile(filePath, "utf-8");
  console.log("okunan içerik: ", icerik);
  res.json(JSON.parse(icerik));
});

app.post("/api/notes", async (req, res) => {
  const icerik = await fs.readFile(filePath, "utf-8");
  const { title, content } = req.body;
  const notlar = JSON.parse(icerik);
  const yeniNot = {
    id: Date.now(),
    title: title,
    content: content,
  };
  notlar.push(yeniNot);
  await fs.writeFile(filePath, JSON.stringify(notlar, null, 2));
  res.status(201).json(yeniNot);
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const icerik = await fs.readFile(filePath, "utf-8");
  const notlar = JSON.parse(icerik);
  const yeniNotlar = notlar.filter((not) => not.id !== Number(id));
  await fs.writeFile(filePath, JSON.stringify(yeniNotlar, null, 2));
  res.status(201).json({ message: "not silindi" });
});

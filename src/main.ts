import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Hello", (req, res) => {
  res.send("World!");
});

/*
PORT could be set via environment variable (e.g. by Google Cloud
or some other could service). Fallback to your desired PORT.
*/
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  // only log this information in development.
  if (process.env?.NODE_ENV !== "production")
    console.log(`server listening at http://localhost:${PORT}`);
});

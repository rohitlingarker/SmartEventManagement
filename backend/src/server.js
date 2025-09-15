import app from "./app.js";

const PORT = process.env.PORT || 3000;
app.set('trust proxy', 1);

app.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

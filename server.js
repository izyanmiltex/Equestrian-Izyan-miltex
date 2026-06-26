import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Hostinger assigns a dynamic port automatically via process.env.PORT
const port = process.env.PORT || 3000;

// Serve the compiled frontend assets that Hostinger just built
app.use(express.static(path.join(__dirname, 'dist')));

// Route all incoming domain traffic directly to your React app front page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Equestrian platform successfully running on port ${port}`);
});

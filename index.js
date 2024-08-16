
import express from 'express';
import path from 'path';
import url from 'url';
//import cors from 'cors';
const app = express();


app.use(express.static('public'));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,  'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
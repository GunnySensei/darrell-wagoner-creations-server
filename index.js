// Import express package
import express  from 'express';
import  getData from './utils.js';
import { readFile } from 'fs/promises';

const photoData = JSON.parse(
    await readFile(
        new URL('./photoData.json', import.meta.url)
    )
);

const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(photoData));
app.get('/updateData', (req, res) => {
    res.send("Updated Data");
    getData()
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
import express from 'express';
import cors from "cors";

const app = express();
const PORT = 8085;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get("/api/pokemon", (req, res) => {
    res.json([
        { id: 6, name: "Charizard", type: "Fire", favoriteMove: "Fire Blast", evolvedFrom: "Charmeleon" },
        { id: 9, name: "Blastoise", type: "Water", favoriteMove: "Hydro Pump", evolvedFrom: "Wartortle" }
    ]);
});

app.listen(PORT, () =>
    console.log(`App listening on port ${PORT}...`),
);

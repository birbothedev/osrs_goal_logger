// backend/index.js
const express = require('express');
const cors = require('cors');
const { WOMClient } = require('@wise-old-man/utils');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const client = new WOMClient({
    userAgent: 'birbothealpha' 
});

// Endpoint to update and fetch player info
app.post('/api/player', async (req, res) => {
    const { username } = req.body;

    try {
        const player = await client.players.updatePlayer(username);
        res.json(player);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch player' });
    }
});

app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
});

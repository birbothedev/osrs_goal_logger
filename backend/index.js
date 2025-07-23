// wom backend imports
const express = require('express');
const cors = require('cors');
const { WOMClient } = require('@wise-old-man/utils');

// wiki backend imports
const fetch = require('node-fetch');

// wom backend
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const client = new WOMClient({
    userAgent: 'birbothealpha' 
});

// wom endpoint to update and fetch player info
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


// wiki backend
const fetch = require('node-fetch'); // Make sure node-fetch@2 is installed

app.get('/api/quests', async (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).json({ error: 'Username parameter is required' });
    }

    const url = `https://apps.runescape.com/runemetrics/quests?user=${encodeURIComponent(username)}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'birbothealpha/1.0' 
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch quest data from RuneMetrics' });
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error('RuneMetrics quests API error:', error);
        res.status(500).json({ error: 'Internal server error fetching quests' });
    }
});

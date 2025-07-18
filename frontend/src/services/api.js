//define api functions here

// src/services/api.js
export const getPlayerFromUsername = async (username) => {
    const response = await fetch('http://localhost:3001/api/player', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
    });

    if (!response.ok) {
        throw new Error(`Failed to get player from backend`);
    }

    return await response.json();
};

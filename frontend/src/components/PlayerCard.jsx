

export function PlayerCard({ player }){
    return <div className="player-card">
        <div className="player-info">
            <h3>{player.displayName}</h3>
            <p>Build: {player.build}</p>
            <p>Status: {player.status}</p>
            <p>Combat Level: {player.combatLevel}</p>
            <p>Overall Exp: {player.latestSnapshot.data.skills.overall.experience}</p>
        </div>
    </div>
}
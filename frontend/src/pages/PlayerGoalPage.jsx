import { useLocation } from "react-router-dom"
import { PlayerCard } from "../components/PlayerCard"

export function PlayerGoalPage() {
    const { state } = useLocation();
    const player = state?.player;

    if (!player) {
        return <div className="playerGoalPage">
            <h2>No player data found.</h2>
        </div>;
    }

    return (
        <div className="playerGoalPage">
            <h2>Player Goal Page</h2>
            <PlayerCard player={player} />
        </div>
    );
}
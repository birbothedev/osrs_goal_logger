import { useLocation } from "react-router-dom"
import { PlayerCard } from "../components/PlayerCard"
import { SkillCard } from "../components/SkillCard"
import { useState } from "react"

export function PlayerGoalPage() {
    const { state } = useLocation();
    const player = state?.player;
    const [selectedSkill, setSelectedSkill] = useState(null);

    if (!player) {
        return <div className="playerGoalPage">
            <h2 className="page-title">No player data found.</h2>
        </div>;
    }

    return (
        <div className="playerGoalPage">
            <PlayerCard player={player} onSkillClick={setSelectedSkill}/>
            <SkillCard player={player} skill={selectedSkill}/>
        </div>
    );
}
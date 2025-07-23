import { useLocation } from "react-router-dom"
import { PlayerCard } from "../components/PlayerCard"
import { SkillCard } from "../components/SkillCard"
import { RecComponent } from "../components/RecComponent"
import { useState } from "react"
import { QuestCard } from "../components/QuestCard"
import "../css/PlayerGoalPage.css"

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
        <div className="player-goal-wrapper">
            <div className="playerGoalPage">
                <div className="player-card">
                    <PlayerCard player={player} onSkillClick={setSelectedSkill}/>
                </div>
                <div className="right-cards">
                    <QuestCard />
                    <SkillCard player={player} skill={selectedSkill} />
                </div>
                <div className="rec-component-wrapper">
                    <RecComponent />
                </div>
            </div>
        </div>
    );
}
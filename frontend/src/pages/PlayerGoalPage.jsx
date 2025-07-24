import { useLocation } from "react-router-dom"
import { PlayerCard } from "../components/PlayerCard"
import { SkillCard } from "../components/SkillCard"
import { RecComponent } from "../components/RecComponent"
import { useState } from "react"
import { QuestCard } from "../components/QuestCard"
import "../css/pages-css/PlayerGoalPage.css"

export function PlayerGoalPage() {
    const { state } = useLocation();
    const player = state?.player;
    const quests = state?.quests;
    console.log("quests in PlayerGoalPage:", quests);
    const [selectedSkill, setSelectedSkill] = useState(null);

    if (!player) {
        return <div className="playerGoalPage">
            <h2 className="page-title">No player data found.</h2>
        </div>;
    }
    return (
        <div className="playerGoalPage">
            <div className="left-cards">
                <div className="player-card">
                    <PlayerCard player={player} onSkillClick={setSelectedSkill} />
                </div>
                <div className="skill-card">
                    <SkillCard player={player} skill={selectedSkill} />
                </div>
            </div>
            <div className="right-cards">
                <QuestCard quests={quests}/>
                <RecComponent />
            </div>
        </div>
    );
}
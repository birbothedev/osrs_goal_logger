import "../css/component-css/PlayerCard.css"
import { SkillCard } from "./SkillCard"
import { SkillGrid } from "./SkillGrid"
import { useState } from "react"



export function PlayerCard({ player, onSkillClick }){

    return <div className="player-card">
        <div className="player-info">
            <h3>{player.displayName}</h3>
            <p>
                Build: {player.build}<br></br>
                Status: {player.status}<br></br>
                Combat Level: {player.combatLevel}<br></br>
                Overall Exp: {player.latestSnapshot.data.skills.overall.experience.toLocaleString()}<br></br>
            </p>

            <SkillGrid onSkillClick={onSkillClick}/>
        </div>
    </div>
}
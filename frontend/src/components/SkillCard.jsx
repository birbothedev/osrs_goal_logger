import "../css/component-css/GoalPageCards.css"

export function SkillCard({player, skill}) {
    // leave empty if no skill selected
    const skillKey = skill ? skill.toLowerCase() : "";

    if (!skill) return null;

    return (
        <div className="skill-card">
            <h3>{skill}</h3>
            <p className="skill-text">
                <strong>{player.latestSnapshot.data.skills[skillKey].experience.toLocaleString()} XP</strong> <br></br>  
                Level <strong>{player.latestSnapshot.data.skills[skillKey].level}</strong>
            </p>
        </div>
    );
}
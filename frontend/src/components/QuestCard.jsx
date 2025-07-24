import "../css/component-css/GoalPageCards.css"

export function QuestCard({quests}) {
    if (!quests || !Array.isArray(quests)){
        return <div className="quest-text">No quest data available.</div>
    }
    return (
        <div className="quest-card">
            <h3>Quest Card</h3>
            <ul className="quest-list">
                {quests
                .map((quest, id) => (
                    <li key={id} className="quest-text">{quest.title}</li>
                ))};
            </ul>
        </div>
    );
}
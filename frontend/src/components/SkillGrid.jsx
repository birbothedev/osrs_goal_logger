import "../css/component-css/SkillGrid.css"

const skillIcons = [
    {name: "Attack", src: "/skill-icons/Attack_icon.png"},
    {name: "Hitpoints", src: "/skill-icons/Hitpoints_icon.png"},
    {name: "Mining", src: "/skill-icons/Mining_icon.png"},
    {name: "Strength", src: "/skill-icons/Strength_icon.png"},
    {name: "Agility", src: "/skill-icons/Agility_icon.png"},
    {name: "Smithing", src: "/skill-icons/Smithing_icon.png"},
    {name: "Defence", src: "/skill-icons/Defence_icon.png"},
    {name: "Herblore", src: "/skill-icons/Herblore_icon.png"},
    {name: "Fishing", src: "/skill-icons/Fishing_icon.png"},
    {name: "Ranged", src: "/skill-icons/Ranged_icon.png"},
    {name: "Thieving", src: "/skill-icons/Thieving_icon.png"},
    {name: "Cooking", src: "/skill-icons/Cooking_icon.png"},
    {name: "Prayer", src: "/skill-icons/Prayer_icon.png"},
    {name: "Crafting", src: "/skill-icons/Crafting_icon.png"},
    {name: "Firemaking", src: "/skill-icons/Firemaking_icon.png"},
    {name: "Magic", src: "/skill-icons/Magic_icon.png"},
    {name: "Fletching", src: "/skill-icons/Fletching_icon.png"},
    {name: "Woodcutting", src: "/skill-icons/Woodcutting_icon.png"},
    {name: "Runecrafting", src: "/skill-icons/Runecraft_icon.png"},
    {name: "Slayer", src: "/skill-icons/Slayer_icon.png"},
    {name: "Farming", src: "/skill-icons/Farming_icon.png"},
    {name: "Construction", src: "/skill-icons/Construction_icon.png"},
    {name: "Hunter", src: "/skill-icons/Hunter_icon.png"}
]

export function SkillGrid({onSkillClick}){
    return (
        <div className="skill-grid">
            {
                skillIcons.map((skill, i) => (
                    <button
                        key={i}
                        className="tiles"
                        onClick={() => onSkillClick(skill.name)}
                        title={skill.name}
                    >
                        <img src={skill.src} alt={skill.name} />
                    </button>
                ))
            }
        </div>
    );
}
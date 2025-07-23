import "../css/component-css/RecComponent.css"
import { CollapsibleSection } from "./util/Collapsible"
import { useState } from "react"

export function RecComponent(){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="rec-component">
            <div className="rec-component-card">
                <h3>Recommended Actions</h3>
                <CollapsibleSection label="Button 1">
                    <p>Button 1 text.</p>
                </CollapsibleSection>

                <CollapsibleSection label="Button 2">
                    <p>Button 2 text.</p>
                </CollapsibleSection>
            </div>
        </div>
    );
}

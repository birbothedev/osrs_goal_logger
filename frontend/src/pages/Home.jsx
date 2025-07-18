import { useState } from "react";
import { getPlayerFromUsername } from "../services/api";
import { useNavigate } from "react-router-dom";

export function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false) // useState accepts the default state as the parameter (loading is set to false by default)
    const navigate = useNavigate()
    // state will store what the user types in the input field to use later
    // form elements are usually connected to state 
    // when a state change occurs the entire component is re rendered, anything not added to the state will be
    // lost on re render

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const player = await getPlayerFromUsername(searchQuery)
            navigate("/playergoalpage", { state: { player } })
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to find player...")
        } finally {
            setLoading(false)
        }
        
    };

    return (
        <div className="username-container">
            <div className="username-input">
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                        type="text" 
                        placeholder="Enter an OSRS RSN to start" 
                        className="search-input" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">Find</button>
                </form>

                {error && <div className="error-message">{error}</div>}

                {loading ? (
                    <div className="loading">Loading...</div> 
                ) : (
                    <p>this is the home page</p>
                )}
            </div>
        </div>
    );
}
export function HomePage() {

    const handleSearch = () => {

    }

    return (
        <div className="username-container">
            <div className="username-input">
                <form onSubmit={handleSearch} className="search-form">
                    <input type="text" placeholder="Enter an OSRS RSN to start" className="search-input" />
                    <button type="submit" className="search-button">Find</button>
                </form>
                <p>this is the home page</p>
            </div>
        </div>
    );
}
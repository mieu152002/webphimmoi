function Search({placeholder, className}) {
    return (
        <div className={className}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="headerInput" placeholder={placeholder}/>
        </div>
    )
}

export default Search
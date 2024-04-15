const SearchBar = ({handleChange, handleSubmit})=>{
    return(
        <div>
            <form>
                <input type="text" onChange={e=>handleChange(e)} />
                <button onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
}

export default SearchBar
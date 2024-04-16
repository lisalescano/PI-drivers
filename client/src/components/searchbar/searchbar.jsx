const SearchBar = ({handleChange, handleSubmit, handleClear})=>{
    return(
        <div>
            <form>
                <input type="text" onChange={e=>handleChange(e)} />
                <button onClick={handleSubmit}>Buscar</button><span><button type="reset" onClick={handleClear}>X</button></span>
            </form>
        </div>
    )
}

export default SearchBar
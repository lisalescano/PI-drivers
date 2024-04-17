import "./paginated.css"

const Paginated = ({driversPerPage, allDrivers, pagination})=>{
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(allDrivers/driversPerPage); i++) {
        pageNumber.push(i);
    };

    return(
            <nav>
                <ul className="paginado">
                    { pageNumber && 
                    pageNumber.map(number => (
                        <li className="li" key={number}>
                            <button className='paginas' onClick={() => pagination(number)}>{number}</button>
                        </li>
                    ))}
                </ul>
            </nav>
    )
}

export default Paginated
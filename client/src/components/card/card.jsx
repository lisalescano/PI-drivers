import './card.css'
import { Link } from 'react-router-dom'

const Card = ({ driver }) => {

    const { image, forename, surname, teams, id } = driver

    return (
        <div className='card-container'>
            <Link to={`/drivers/${id}`}>
                <img src={image} alt='no hay imagen' width='120px' />
                <h1>{forename} {surname}</h1>
                <p>{teams.join(', ')}</p>
            </Link>
        </div>
    )
}

export default Card
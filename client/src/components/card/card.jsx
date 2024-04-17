import style from './card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ driver }) => {

    const { image, forename, surname, teams, id } = driver

    return (
        <div className={style.cardcontainer}>
            <Link to={`/drivers/${id}`}>
                <img src={image} alt='no hay imagen' width='120px' />
            </Link>
            <h1>{forename} {surname}</h1>
            <p>{teams.join(', ')}</p>
        </div>
    )
}

export default Card
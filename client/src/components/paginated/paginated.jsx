import Card from "../card/card"
import "../cards/cards.css"

const Paginated = ({ currentPage, handleNext, handlePrev }) => {
    return (
        <div>
            <p>
                <button onClick={handlePrev}>Prev</button>
                {currentPage}
                <button onClick={handleNext}>Next</button>
            </p>

            
        </div>
    )
}

export default Paginated
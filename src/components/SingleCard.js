import SingleCard from './SingleCard';

export default function SingleCard({ card }) {
    return (

        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front " />
                <img className="back" src="/pics/cover.png" alt="card back " />
            </div>
        </div>

    )
}
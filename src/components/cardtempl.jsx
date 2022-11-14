import { Link } from "react-router-dom";

const Card = ({ info }) => {
    return (
        <Link to={`${info.name.common}`}>
            <div className="card">
                <div className="cardimg">
                    <img src={(info.name.common == "Western Sahara") ? '' : info.flags.png} alt={`flag_of_${(info.name.common == "Western Sahara") ? 'Sahara of Morroco' : info.name.common}`} />
                </div>
                <div className="cardinfo">
                    <h2>{(info.name.common == "Western Sahara") ? 'Sahara of Morroco' : info.name.common}</h2>
                    <ul>
                        <li><h3>Population : </h3><span>{(info.name.common == "Western Sahara") ? '' : info.population}</span></li>
                        <li><h3>Region : </h3><span>{info.continents[0]}</span></li>
                        <li><h3>Capital : </h3><span>{(info.capital !== undefined) ? info.capital[0] : ''}</span></li>
                    </ul>
                </div>
            </div>

        </Link>

    )
}
export default Card;
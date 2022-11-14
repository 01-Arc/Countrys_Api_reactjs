import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai'
const Det = ({ mode }) => {
    const { namecountry } = useParams();
    const [details, setDetails] = useState();
    var back = useNavigate();
    const getcountrydet = async (name) => {
        var api = `https://restcountries.com/v3.1/name/${name}`;
        var response = await fetch(api);
        if (response.ok) {
            let data = await response.json();
            setDetails(data[0])
        }
    }
    useEffect(() => {
        getcountrydet(namecountry);
    }, [])
    useEffect(() => {
        darkmode()
    }, [mode])
    const darkmode = () => {
        var body = document.body;
        var header = document.querySelector("header");
        var button = document.querySelector("#mode");
        var det = document.querySelector("#det");
        var back = document.querySelector("#back");
        var brcountr = document.querySelectorAll(".brcountr");
        // -------------------------------------------
        if (mode == "dark") {
            body.classList.add("darkmode")
            header.classList.add("darkmode2")
            button.classList.add("darkmode2")
            det.classList.add("darkmode")
            back.classList.add("darkmode2")
            brcountr.forEach(elem => {
                elem.classList.add("darkmode2")
            })
        }
        else {
            body.classList.remove("darkmode")
            header.classList.remove("darkmode2")
            button.classList.remove("darkmode2")
            det.classList.remove("darkmode")
            back.classList.remove("darkmode2")
            brcountr.forEach(elem => {
                elem.classList.remove("darkmode2")
            })
        }
    }
    return (
        <section id="det">
            <div id="backdiv">
                <button id="back" onClick={() => back("/")}><AiOutlineArrowLeft />Back</button>
            </div>
            {
                (details !== undefined) ?
                    (details.name.common !== "Western Sahara") ?
                        <div id="carddet">
                            <div id="detimg">
                                <img src={details.flags.png} />
                            </div>
                            <div id="detinfo">
                                <div id="ttinfo">
                                    <h2>{details.name.common}</h2>
                                </div>
                                <div id="ppinfo">
                                    <ul>
                                        <li><h4>Native Name: </h4><span>{details.name.official}</span></li>
                                        <li><h4>Population: </h4><span>{details.population}</span></li>
                                        <li><h4>Region: </h4><span>{details.region}</span></li>
                                        <li><h4>Sub Region: </h4><span>{details.subregion}</span></li>
                                        <li><h4>Capital: </h4><span>{details.capital[0]}</span></li>
                                    </ul>
                                    <ul>
                                        <li><h4>Top Level Domain: </h4><span>{details.tld[0]}</span></li>
                                        <li><h4>Currencies: </h4><span>{Object.values(details.currencies)[0].name}</span></li>
                                        <li><h4>Languages: </h4><span>{Object.values(details.languages)[0]},{Object.values(details.languages)[1]},{Object.values(details.languages)[2]}</span></li>
                                    </ul>

                                </div>
                                <div id="secinfo">
                                    <h4>Border Countrys:</h4>
                                    <div id="brc">
                                        <div className="brcountr">{(details.borders == undefined) ? '' : details.borders[0]}</div>
                                        <div className="brcountr">{(details.borders == undefined) ? '' : details.borders[1]}</div>
                                        <div className="brcountr">{(details.borders == undefined) ? '' : details.borders[2]}</div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        :
                        <h2> Morrocan sahara</h2>
                    :
                    ''
            }
        </section >
    );
}

export default Det;
import Card from "./cardtempl";
import React, { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io"
import { GoSearch } from "react-icons/go"
const Main = ({ mode }) => {
    const [inputvalue, setInpval] = useState("");
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("africa");
    const [filcountry, setFilcountry] = useState("");

    const all = ['africa', 'america', 'asia', 'europe', 'oceania'];
    const handledisplayfilter = () => {
        var selectchose = document.getElementById("selectchose");
        if (selectchose.style.display === "none" || selectchose.style.display === "") {
            selectchose.style.display = "flex";
        }
        else {
            selectchose.style.display = "none";
        }

    }
    const getcountrys = async (region) => {
        var api = `https://restcountries.com/v3.1/region/${region}`;
        let response = await fetch(api);
        if (response.ok) {
            let json = await response.json();
            setData(json)
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }
    const getcountry = async (country) => {
        if (country !== "") {
            var api = `https://restcountries.com/v3.1/name/${country}`;
            let response = await fetch(api);
            if (response.ok) {
                let json = await response.json();
                setData(json)
            } else {
                console.log("HTTP-Error: " + response.status);
            }
        }

    }
    useEffect(() => {
        getcountrys(filter)

    }, [filter])
    useEffect(() => {
        getcountry(filcountry)
    }, [filcountry])
    const searchbyselect = (elem) => {
        setFilter(elem)
        document.getElementById("selectchose").style.display = "none";
    }
    const searchbyinput = (elem) => {
        if (elem !== "") {
            setFilcountry(elem);
        }
    }
    useEffect(() => {
        darkmode()
    }, [mode])
    const darkmode = () => {
        var body = document.body;
        var header = document.querySelector("header");
        var main = document.querySelector("main");
        var button = document.querySelector("#mode");
        var selectbtn = document.querySelector("#selectbtn");
        var inp = document.querySelector("#serinp");
        var selectchose = document.querySelector("#selectchose");
        var selectchosebtn = document.querySelectorAll("#selectchose button");
        var card = document.querySelectorAll(".card");
        if (mode == "dark") {
            body.classList.add("darkmode")
            header.classList.add("darkmode2")
            main.classList.add("darkmode")
            button.classList.add("darkmode2")
            selectbtn.classList.add("darkmode2")
            inp.classList.add("darkmode2")
            selectchose.classList.add("darkmode")
            selectchosebtn.forEach(elem => {
                elem.classList.add("darkmode")
            })
            // card.forEach(elem => {
            //     alert("hiii")
            //     elem.classList.add("darkmode2")
            // })
        }
        else {
            body.classList.remove("darkmode")
            header.classList.remove("darkmode2")
            main.classList.remove("darkmode")
            button.classList.remove("darkmode2")
            selectbtn.classList.remove("darkmode2")
            inp.classList.remove("darkmode2")
            selectchose.classList.remove("darkmode")
            selectchosebtn.forEach(elem => {
                elem.classList.remove("darkmode")
            })
            // card.forEach(elem => {
            //     elem.classList.remove("darkmode2")
            // })
        }
        console.log("mainchanged")
    }
    return (
        <main>
            <section id="filterpart">
                <div id="searchbar">
                    <div id="searchicon" onClick={() => searchbyinput(inputvalue)}>
                        <GoSearch />
                    </div>
                    <input id="serinp" type="text" value={inputvalue} onChange={(e) => setInpval(e.target.value)} placeholder="Search for a country ..." />

                </div>

                <div id="select">
                    <div onClick={handledisplayfilter} id="selectbtn">
                        <span>Filter by Region</span>
                        <IoIosArrowForward id="arrbtm" />
                    </div>
                    <div id="selectchose">
                        <button onClick={() => searchbyselect("africa")}>Africa</button>
                        <button onClick={() => searchbyselect("america")}>America</button>
                        <button onClick={() => searchbyselect("asia")}>Asia</button>
                        <button onClick={() => searchbyselect("europe")}>Europe</button>
                        <button onClick={() => searchbyselect("oceania")}>Oceania</button>
                    </div>
                </div>
            </section>
            <section id="row">
                {
                    data.map(elem => <Card key={elem.area} info={elem} />)
                }
            </section>
        </main >
    );
}
export default Main;
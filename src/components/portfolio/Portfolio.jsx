import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    javaScriptPortfolio,
    reactPortfolio,
    nextPortfolio,
    angularPortfolio,
    reduxPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "javaScript",
            title: "Java Script",
        },
        {
            id: "react",
            title: "React",
        },
        {
            id: "next",
            title: "Next.js",
        },
        {
            id: "angular",
            title: "Angular",
        },
        {
            id: "redux",
            title: "Redux",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "javaScript":
                setData(javaScriptPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            case "next":
                setData(nextPortfolio);
                break;
            case "angular":
                setData(angularPortfolio);
                break;
            case "redux":
                setData(reduxPortfolio);
                break;
            default:
                setData(javaScriptPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
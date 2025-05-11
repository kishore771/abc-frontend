import React, { useEffect, useState } from "react";
import './index.css';
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
    const defaultHeading = "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI";
    const [heading, setHeading] = useState('');  // Initially empty

    useEffect(() => {
        const apiurl = "http://localhost:8080/headings";
        const fetchData = async () => {
            try {
                const response = await fetch(apiurl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.heading) {
                    setHeading(data.heading);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderHighlightedHeading = () => {
        const fullHeading = heading || defaultHeading;
        const words = fullHeading.split(" ");

        const totalWords = words.length;
        const third = Math.floor(totalWords / 3);
        const start = words.slice(0, third).join(" ");
        const middle = words.slice(third, third * 2).join(" ");
        const end = words.slice(third * 2).join(" ");

        return (
            <h1 className="heading">
                {start} <span className="highlight-orange">{middle}</span> {end}
            </h1>
        );
    };

    return (
        <>
            <Header />
            <div className="home-container">
                    <img src="https://i.postimg.cc/Bv17b3GZ/Frame-26086340-1.png" alt="Logo1" className="logo1" />
                <div className="home-text">
                    {renderHighlightedHeading()}
                    <p className="description">
                        Powerful AI solutions that go beyond mere data sorting and <br />
                        exploration. Use our array of AI enabled solutions that understand <br />
                        your business and recommend the optimal way forward.
                    </p>
                    <button className="home-button">Get Started</button>
                </div>
                    <img src="https://i.postimg.cc/V6QGbhYq/Asset-5-1.png" alt="Logo2" className="logo2" />
            </div>
            <Footer />
        </>
    );
};

export default Home;


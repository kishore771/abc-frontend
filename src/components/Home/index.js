import React, { useEffect, useState } from "react";
import './index.css';
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
    const [heading, setHeading] = useState('');  // Initialize heading as empty string

    useEffect(() => {
        const apiurl = "http://localhost:8080/headings"; // API to fetch heading
        const fetchData = async () => {
            try {
                const response = await fetch(apiurl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);  // Log the response for debugging

                // Check if heading exists in the response and update state
                if (data.heading) {
                    setHeading(data.heading);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);  // Empty dependency array ensures this runs only once after initial render

    return (
        <>
            <Header />
            <div className="home-container">
                <div>
                    <img src="https://i.postimg.cc/Bv17b3GZ/Frame-26086340-1.png" alt="Logo1" className="logo1" />
                </div>
                <div className="home-text">
                    <h1 className="heading">{heading || "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"}</h1>  {/* Show a loading message until heading is fetched */}
                    <p className="description">
                        Powerful AI solutions that go beyond mere data sorting and <br />
                        exploration. Use our array of AI enabled solutions that understand <br />
                        your business and recommend the optimal way forward.
                    </p>
                    <button className="home-button">Get Started</button>
                </div>
                <div>
                    <img src="https://i.postimg.cc/V6QGbhYq/Asset-5-1.png" alt="Logo2" className="logo2" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;

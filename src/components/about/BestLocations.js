import React, { useState } from 'react';
import { tours } from '../../data/Data';
import { Link } from 'react-router-dom';

const BestLocations = () => {
    const [activeOption, setActiveOption] = useState(0);

    const handleOptionClick = (index) => {
        setActiveOption(index);
    };

    // const options = [
    //     { image: 'https://buttoncreatives.com/html/woox/assets/images/best-02.jpg', title: 'Havana', population: '2M' },
    //     { image: 'https://buttoncreatives.com/html/woox/assets/images/best-02.jpg', title: 'Kingston', population: '3.5M' },
    //     { image: 'https://buttoncreatives.com/html/woox/assets/images/best-03.jpg', title: 'London', population: '4.1M' },
    //     { image: 'https://buttoncreatives.com/html/woox/assets/images/best-04.jpg', title: 'Pristina', population: '520K' },
    //     { image: 'https://buttoncreatives.com/html/woox/assets/images/best-05.jpg', title: 'Paris', population: '3M' }
    // ];

    return (
        <>
            <div className="best-locations">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading text-center">
                                <h2>Our Best Destinations</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2">
                            <div className="options">
                                {tours.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`option ${activeOption === index ? 'active' : ''}`}
                                        style={{ backgroundImage: `url(${option.img})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}
                                        onClick={() => handleOptionClick(index)}
                                    >
                                        <div className="shadow"></div>
                                        <div className="label">
                                            <div className="icon">
                                                <i className="fas fa-expand"></i>
                                            </div>
                                            <div className="info">
                                                <div className="main">{option.name}</div>
                                                <div className="sub">Population: {option.population}</div>
                                            </div>
                                        </div>
                                    </div>
                                )).slice(0, 5)}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div style={{ marginBottom: '3rem' }} className="main-button text-center">
                                <Link to="/deals">Discover All Places</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestLocations;

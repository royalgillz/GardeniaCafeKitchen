import React from 'react';

const HighlightedPhoto = () => {
    return (
        <div className="highlighted-photo">
            <h2>Popular Dishes</h2>
            <div className="photos">
                <div>
                    <img src="big-breakfast.jpg" alt="The Big Breakfast" />
                    <p>The Big Breakfast</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Eggs Benedict</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Chicken Burger</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Beef Burger</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Roast Chicken Wrap</p>
                </div>
            </div>
        </div>
    );
};

export default HighlightedPhoto;

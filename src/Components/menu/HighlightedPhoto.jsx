import React from 'react';
import bigbreakfastimage from '../../assets/the-big-breakfast.jpg';
import eggbenedictimage from '../../assets/egg-benedict.jpg';
import bruschettaimage from '../../assets/bruschetta.jpg';

const HighlightedPhoto = () => {
    return (
        <div className="highlighted-photo">
            <h2>Popular Dishes</h2>
            <div className="photos">
                <div>
                    <img src={bigbreakfastimage} alt="The Big Breakfast" />
                    <p>The Big Breakfast</p>
                </div>
                <div>
                    <img src={eggbenedictimage} alt="Egg Benedict" />
                    <p>Eggs Benedict</p>
                </div>
                <div>
                    <img src={bruschettaimage} alt="Bruschetta with Poached Egg" />
                    <p>Bruschetta</p>
                </div>
                {/* <div>
                    <img src="" alt="" />
                    <p>Beef Burger</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Roast Chicken Wrap</p>
                </div> */}
            </div>
        </div>
    );
};

export default HighlightedPhoto;

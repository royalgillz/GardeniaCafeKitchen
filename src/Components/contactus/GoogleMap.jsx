import React from 'react';

const GoogleMap = ({ src }) => {
    return (
        <div className="google-map">
            <h2>Find Us Here</h2>
            <iframe
                src={src}
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
            ></iframe>
        </div>
    );
};

export default GoogleMap;

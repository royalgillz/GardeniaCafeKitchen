
const Map = ({ src }) => (
    <div className="google-map">
        <iframe
            src={src}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gardenia CafeKitchen on Google Maps"
        />
    </div>
);

export default Map;

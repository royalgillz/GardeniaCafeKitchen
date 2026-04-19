import Button from '../../Components/ui/Button';

const Hero = ({ tagline, image }) => (
    <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay">
            <p className="hero-eyebrow">Welcome to Gardenia CafeKitchen</p>
            <h1 className="hero-tagline">{tagline}</h1>
            <p className="hero-subtext">
                Fresh, locally-sourced food in the heart of Currambine, WA.
                Open Monday to Saturday, all-day breakfast available.
            </p>
            <div className="hero-actions">
                <Button to="/menu" variant="primary" size="lg">View Our Menu</Button>
                <Button to="/contact-us" variant="outline" size="lg">Find Us</Button>
            </div>
        </div>
    </div>
);

export default Hero;

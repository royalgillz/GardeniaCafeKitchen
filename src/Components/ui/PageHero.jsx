
const PageHero = ({ title, subtitle, image }) => {
    return (
        <div
            className="page-hero"
            style={image ? { backgroundImage: `url(${image})` } : {}}
        >
            <div className="page-hero__overlay">
                <h1 className="page-hero__title">{title}</h1>
                {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHero;

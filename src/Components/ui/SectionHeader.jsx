
const SectionHeader = ({ title, subtitle, align = 'center' }) => {
    return (
        <div className="section-header" style={{ textAlign: align }}>
            <h2 className="section-header__title">{title}</h2>
            {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
            <div className="section-header__divider" />
        </div>
    );
};

export default SectionHeader;

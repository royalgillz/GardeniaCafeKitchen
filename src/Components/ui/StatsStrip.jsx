import React from 'react';

const StatsStrip = ({ stats, variant = 'light' }) => {
    return (
        <div className={`stats-strip stats-strip--${variant}`}>
            {stats.map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="stats-strip__item">
                    {Icon && <span className="stats-strip__icon" aria-hidden="true"><Icon /></span>}
                    <div className="stats-strip__text">
                        {value && <span className="stats-strip__value">{value}</span>}
                        <span className="stats-strip__label">{label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsStrip;

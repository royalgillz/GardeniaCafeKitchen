const PETAL_OUTER = 'M0,0 C5,-4 6.5,-14 0,-23 C-6.5,-14 -5,-4 0,0';
const PETAL_INNER = 'M0,0 C3.5,-3 4.5,-10 0,-17 C-4.5,-10 -3.5,-3 0,0';

const Logo = ({ className, variant = 'default' }) => {
    const isDark = variant === 'light';
    const nameColor = isDark ? '#fef3d0' : '#813405';
    const subColor  = isDark ? '#f2b05a' : '#8a7060';

    return (
        <svg
            viewBox="0 0 216 54"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-label="Gardenia CafeKitchen"
        >
            {/* Gardenia flower mark */}
            <g transform="translate(27,27)">
                {/* Outer 5 petals */}
                {[0, 72, 144, 216, 288].map((a) => (
                    <path
                        key={a}
                        d={PETAL_OUTER}
                        fill="#7c8a70"
                        opacity="0.92"
                        transform={`rotate(${a})`}
                    />
                ))}
                {/* Inner 5 petals (offset 36°, smaller) */}
                {[36, 108, 180, 252, 324].map((a) => (
                    <path
                        key={a}
                        d={PETAL_INNER}
                        fill="#a3b89a"
                        opacity="0.8"
                        transform={`rotate(${a})`}
                    />
                ))}
                {/* Centre */}
                <circle r="5.5" fill="#f2b05a" />
                <circle r="2.8" fill="#d45113" />
            </g>

            {/* Wordmark */}
            <text
                x="60"
                y="29"
                fontFamily="'Playfair Display', Georgia, serif"
                fontSize="27"
                fontStyle="italic"
                fontWeight="600"
                fill={nameColor}
            >
                Gardenia
            </text>
            <text
                x="62"
                y="46"
                fontFamily="'Lato', Arial, sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="3.2"
                fill={subColor}
            >
                CAFEKITCHEN
            </text>
        </svg>
    );
};

export default Logo;

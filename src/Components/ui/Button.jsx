import { Link } from 'react-router-dom';

const Button = ({ children, to, href, variant = 'primary', size = 'md', onClick, disabled, type = 'button', className = '' }) => {
    const cls = `btn btn--${variant} btn--${size} ${className}`.trim();

    if (to) {
        return <Link to={to} className={cls}>{children}</Link>;
    }
    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
    }
    return (
        <button type={type} className={cls} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

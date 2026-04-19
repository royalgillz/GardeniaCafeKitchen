import { FaClock } from 'react-icons/fa';
import Button from '../../Components/ui/Button';

const Visit = ({ hours, specialDeal }) => (
    <section className="opening-hours-section">
        <div className="opening-hours-content">
            <div className="opening-hours-text">
                <FaClock className="opening-hours-clock" aria-hidden="true" />
                <h2>Opening Hours</h2>
                <ul className="opening-hours-list">
                    {hours.map((hour, i) => (
                        <li key={i}>
                            <span className="opening-day">{hour.day}</span>
                            <span className="opening-time">{hour.time}</span>
                        </li>
                    ))}
                </ul>
                {specialDeal && <p className="special-deal">{specialDeal}</p>}
            </div>
            <div className="opening-hours-cta">
                <h3>Ready to visit?</h3>
                <p>Conveniently located in Currambine, Western Australia. Walk-ins always welcome, no reservations needed.</p>
                <Button to="/contact-us" variant="primary">Get Directions</Button>
            </div>
        </div>
    </section>
);

export default Visit;

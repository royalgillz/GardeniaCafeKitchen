import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Button from '../../Components/ui/Button';

const Visit = ({ hours, specialDeal }) => (
    <section className="visit-section">
        <div className="visit-inner">
            <div className="visit-card visit-card--hours">
                <div className="visit-card-icon"><FaClock /></div>
                <h2>Opening Hours</h2>
                <ul className="visit-hours-list">
                    {hours.map((h, i) => (
                        <li key={i}>
                            <span className="visit-day">{h.day}</span>
                            <span className="visit-time">{h.time}</span>
                        </li>
                    ))}
                    <li>
                        <span className="visit-day">Sunday</span>
                        <span className="visit-closed">Closed</span>
                    </li>
                </ul>
                {specialDeal && <p className="visit-deal">{specialDeal}</p>}
            </div>

            <div className="visit-card visit-card--find">
                <div className="visit-card-icon"><FaMapMarkerAlt /></div>
                <h2>Find Us</h2>
                <p className="visit-address">
                    Shop 12/1244 Marmion Ave<br />
                    Currambine WA 6028, Australia
                </p>
                <div className="visit-contact">
                    <FaPhone aria-hidden="true" />
                    <a href="tel:+61894078749">+61 8 9407 8749</a>
                </div>
                <p className="visit-note">Walk-ins welcome. No reservations needed.</p>
                <Button to="/contact-us" variant="primary" size="md">Get Directions</Button>
            </div>
        </div>
    </section>
);

export default Visit;

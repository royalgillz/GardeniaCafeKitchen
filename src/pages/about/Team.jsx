import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import SectionHeader from '../../Components/ui/SectionHeader';

const Team = ({ team }) => (
    <section className="team-section">
        <SectionHeader title="Meet the Team" subtitle="The people behind every great meal and warm welcome." />
        <div className="team-grid">
            {team.map((member, i) => (
                <div key={i} className="team-card">
                    <FaUserCircle className="team-avatar" aria-hidden="true" />
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Team;

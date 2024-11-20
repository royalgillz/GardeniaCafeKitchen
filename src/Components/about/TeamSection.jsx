import React from 'react';

const TeamSection = ({ team }) => {
    return (
        <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-members">
                {team.map((member, index) => (
                    <div key={index} className="team-member">
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;

import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';

const OurTeam = ({members=[]}) => {
    return (
        <div className="row my-4">
            <div className="col-12">
                <h2 className="noo-sh-title">Meet Our Team</h2>
            </div>
            {
                members && members.map(member=><TeamMember key={member.id} member={member} />)
            }
        </div>
    );
};

export default OurTeam;
import React from 'react';
import { useSelector } from 'react-redux';
import OurTeam from './OurTeam';

const OurTeamMembers = () => {
    const teamMembers = useSelector(state=>state.teamMembers)
    return (
        <OurTeam members={teamMembers} />
    );
};

export default OurTeamMembers;
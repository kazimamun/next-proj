import React from 'react';

const TeamMember = ({member}) => {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="hover-team">
                <div className="our-team"> <img src={`assets/images/${member.imgPath}.jpg`} alt="" />
                    <div className="team-content">
                        <h3 className="title">{member.name}</h3> <span className="post">{member.profession}</span> </div>
                    <ul className="social">
                        <li>
                            <a href="#" className="fab fa-facebook"></a>
                        </li>
                        <li>
                            <a href="#" className="fab fa-twitter"></a>
                        </li>
                        <li>
                            <a href="#" className="fab fa-google-plus"></a>
                        </li>
                        <li>
                            <a href="#" className="fab fa-youtube"></a>
                        </li>
                    </ul>
                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                </div>
                <div className="team-description">
                    <p>{member.description} </p>
                </div>
                <hr className="my-0" /> </div>
        </div>
    );
};

export default TeamMember;
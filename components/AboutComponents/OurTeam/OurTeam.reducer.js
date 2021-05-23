import TeamMembers from "../../../FakeApi/TeamMember/TeamMemberApi";

const init = TeamMembers;

export const ourTeamReducer = (state=init, action) =>{
    switch (action.type){
        default :
            return state;
    }
}
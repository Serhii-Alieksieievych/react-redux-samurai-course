export const getProfileInfoSelector = state => {
    console.log(state)
    return state.profilePage.profileInfo;
}
export const getStatusSelector = state => state.profilePage.status;
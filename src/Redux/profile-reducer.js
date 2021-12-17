const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';

export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const changePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

const profileReducer = (action, state) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsArr.length + 1,
                message: state.currentPostArea,
                likesCount: 0,
            }
            state.postsArr.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.currentPostArea = action.newText;
            return state;
        default: return state;
    }
}

export default profileReducer;
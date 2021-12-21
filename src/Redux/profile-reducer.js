const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';

export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const changePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

const initialState = {
    currentPostArea: '',
    postsArr: [
        { id: 1, message: `post-opost`, likesCount: 0 },
        { id: 2, message: `post-pos`, likesCount: 0 },
        { id: 3, message: `post-opos`, likesCount: 0 },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsArr.length + 1,
                message: state.currentPostArea,
                likesCount: 0,
            }
            return {...state, postsArr: [...state.postsArr, newPost], currentPostArea: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, currentPostArea: action.newText};
        default:
            return state;
    }
}

export default profileReducer;
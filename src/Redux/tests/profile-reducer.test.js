import profileReducer, {addPostActionCreator} from "../profile-reducer";

it('new post should be added', ()=> {
    let action = addPostActionCreator('oppos')
    let state = {
        postsArr: [
            { id: 1, message: `post-opost`, likesCount: 0 },
            { id: 2, message: `post-pos`, likesCount: 0 },
            { id: 3, message: `post-opos`, likesCount: 0 },
        ],
    }

    let newState = profileReducer(state, action);

    expect(newState.postsArr.length).toBe(4);
})
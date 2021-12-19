import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _state: {
    dialogsState: {
      dialogsArr: [
        {id:1, name:'Oppos'},
        {id:2, name:'Kotossum'},
        {id:3, name:'Huhol'},
      ],
      
      currentMessage: '',
      messagesArr: [
        {id:1, userId:0, message:'Hi'},
        {id:2, userId:1, message:'Sam hi'},
        {id:3, userId:0, message:'Net ti hi'},
        {id:4, userId:1, message:'Nihuja, ti hi'},
        {id:5, userId:0, message:'Ta ne, tochno ti hi'},
      ],
    },
    profileState: {
      currentPostArea: '',
      postsArr: [
        {id:1, message:`post-opost` , likesCount:0},
        {id:2, message:`post-pos`, likesCount:0},
        {id:3, message:`post-opos`, likesCount:0},
      ],
    },      
  },
  _rerenderEntrieTree(){},
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._rerenderEntrieTree = observer;
  },
  dispatch(action){
    this._state.profileState = profileReducer(action, this._state.profileState);
    this._state.dialogsState = dialogsReducer(action, this._state.dialogsState);
    this._rerenderEntrieTree(store)
  },
}


export default store;
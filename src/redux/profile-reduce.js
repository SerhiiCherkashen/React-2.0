

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const PUSH_POST = "PUSH-POST"


const profileReduce = (state, action) => {

    switch (action.type) {
        case PUSH_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state

        default:
            return state
    }

    // ________________________________________________________


    //     if (action.type === PUSH_POST) {
    //         let newPost = {
    //             id: 5,
    //             message: state.newPostText,
    //             like: 0,
    //         };
    //         state.posts.push(newPost);
    //         state.newPostText = "";

    //     } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         state.newPostText = action.newText;
    //     }
    //     return state

}


export const pushPostActionCreator = () => {
    return {
        type: PUSH_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReduce



// const prReduce = (state, action) => {
//     if (action.type === PUSH_POST) {
//         a + b
//     } else if (action.type === SIFT) {
//         a - b + state
//     }
//     return state
// }
// export const fnPush = (text) => {
//     return {
//         type: PUSH_POST,
//         message: text,
//     }
// }

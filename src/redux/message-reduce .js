



const UPDATE_ON_CHANGE_DIALOGS = "UPDATE-ON-CHANGE-DIALOGS"
const PUSH_DIALOGS_MESSAGE = "PUSH-DIALOGS-MESSAGE"

const messageReduce = (state, action) => {
    switch (action.type) {
        case PUSH_DIALOGS_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.date,
            };
            state.messageDate.push(newMessage);
            state.date = "";
            return state
        case UPDATE_ON_CHANGE_DIALOGS:
            state.date = action.literMessage;
            return state
        default:
            return state


    }

    // if (action.type === PUSH_DIALOGS_MESSAGE) {
    //     let newMessage = {
    //         id: 5,
    //         message: state.date,
    //     };
    //     state.messageDate.push(newMessage);
    //     state.date = "";
    // } else if (action.type === UPDATE_ON_CHANGE_DIALOGS) {
    //     state.date = action.literMessage;
    // }
    // return state
}

export const pushDialogsMessageActionCreator = () => {
    return {
        type: PUSH_DIALOGS_MESSAGE
    }
}
export const updateOnChangeDialogsActionCreator = (text) => {
    return {
        type: UPDATE_ON_CHANGE_DIALOGS,
        literMessage: text
    }

}

export default messageReduce
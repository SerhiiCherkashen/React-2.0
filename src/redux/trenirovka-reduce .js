

const PUSH_TRENIROVKA = "PUSH-TRENIROVKA"

const trevirovkaReduce = (state, action) => {

    if (action.type === PUSH_TRENIROVKA) {
        // pushTrenirovka()

        let newPost = {
            id: 5,
            message: action.pin
        }
        state.messages.push(newPost)
    }
    return state
}


export const pushTrenirovka = (text) => {
    return {
        type: PUSH_TRENIROVKA,
        pin: text
    }
}

export default trevirovkaReduce
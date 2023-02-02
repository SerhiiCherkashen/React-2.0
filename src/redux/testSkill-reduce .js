
const PUSH_TEXT_SKILL = "PUSH-TEXT-SKILL"
const CHANGE_TEST_SKILL = "CHANGE-TEST-SKILL"

const testSkillReduce = (state, action) => {


    if (action.type === PUSH_TEXT_SKILL) {
        let newPost = {
            id: 5,
            message: state.newPost
        }
        state.messages.push(newPost)
        state.newPost = ""
        console.log("newPost = " + state.newPost)
    } else if (action.type === CHANGE_TEST_SKILL) {
        state.newPost = action.mes
        console.log("newPost = " + state.newPost)
    }
    return state
}


export const pushTestSkill = () => {
    return {
        type: PUSH_TEXT_SKILL,
    }
}
export const changeTestSkill = (text) => {
    return {
        type: CHANGE_TEST_SKILL,
        mes: text

    }
}

export default testSkillReduce
import { v4 as uuidv4 } from "uuid";

export const itemReducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            return [...state, {
                content: action.item.content,
                id: uuidv4()
            }]
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
}
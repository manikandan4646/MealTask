const initialState: any = {
    mealsData: [],
    mealData: null,
    checkoutInfo: {}
}


const ReducerState = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_MEALS_LIST": {
            return {
                ...state,
                mealsData: action.payload
            };
        }
        case "ADD_MEAL_DATA": {
            return {
                ...state,
                mealData: action.payload
            };
        }
        case "SAVE_CHECKOUT_DATA": {
            return {
                ...state,
                checkoutInfo : {
                    ...state.checkoutInfo,
                    [action.key]: action.value
                }
            }
        }
        default:
            return state;
    }
}

export default ReducerState;
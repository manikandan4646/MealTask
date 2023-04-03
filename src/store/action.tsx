const getMealsList = (payload: any) => {
    const action = {
        type: "ADD_MEALS_LIST",
        payload,
    };
    return action;
}

const getMealDetails = (payload: any) => {
    const action = {
        type: "ADD_MEAL_DATA",
        payload,
    };
    return action;
}

const saveCheckoutDetailsAction = (value: any, key: any) => {
    const action = {
        type: "SAVE_CHECKOUT_DATA",
        value,
        key
    };
    return action;
}

export {
    getMealsList,
    getMealDetails,
    saveCheckoutDetailsAction
}
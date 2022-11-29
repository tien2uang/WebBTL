export const AuthReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                error: false,
                role: null
            };
        case "LOGIN_SUCCESS":
            console.log(action.payload + " success");
            return {
                user: action.payload[0],
                role: action.payload[1],
                error: false
            };
        case "UPDATE_SUCCESS":
            console.log(action.payload);
            console.log("update success");
            return {
                user: action.payload[0],
                role: action.payload[1],
                error: false
            };
        case "LOGIN_FAILURE":
            console.log("fail " + action.payload);
            return {
                user: null,
                role: null,
                error: true
            };
        case "SIGNUP_START":
            return {
                user: null,
                role: null,
                error: false
            };
        case "SIGNUP_SUCCESS":
            return {
                user: null,
                role: null,
                error: false
            };
        case "SIGNUP_FAILURE":
            return {
                user: null,
                role: null,
                error: true
            };
        default:
            return state;

    }
}
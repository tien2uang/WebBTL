export const AuthReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                user: "",
                error: false,
                token:"",
                role: ""
            };
        case "LOGOUT_START":
                return {
                    user: "",
                    error: false,
                    token:"",
                    role: ""
                };
        case "LOGIN_SUCCESS":
            console.log(action.payload + " success");
            return {
                user: action.payload.user,
                role: action.payload.role,
                error: false,
                token:action.payload.token
            };
        case "UPDATE_SUCCESS":
            console.log(action.payload);
            console.log("update success");
            return {
                user: action.payload.user,
                role: action.payload.role,
                token:action.payload.token,
                error: false
            };
        case "LOGIN_FAILURE":
            console.log("fail " + action.payload);
            return {
                user: "",
                role: "",
                token:"",
                error: true
            };
        case "SIGNUP_START":
            return {
                user: "",
                role: "",
                token:"",
                error: false
            };
        case "SIGNUP_SUCCESS":
            return {
                user: "",
                role: "",
                token:"",
                error: false
            };
        case "SIGNUP_FAILURE":
            return {
                user: "",
                role: "",
                token:"",
                error: true
            };
        default:
            return state;

    }
}
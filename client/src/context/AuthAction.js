export const LoginStart = (user) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});

export const LoginFailure = (err) => ({
    type: "LOGIN_FAILURE",
    payload: err,
});

export const SignUpStart = () => ({
    type: "SIGNUP_START",
})
export const SignUpSuccess = () => ({
    type: "SIGNUP_SUCCESS",
})

export const SignUpFailure = (err) => ({
    type: "SIGNUP_FAILURE",
    payload: err,

})
export const LogoutStart =() => ({
    type:"LOGOUT_START"
})
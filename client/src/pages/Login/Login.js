import React from 'react';
// Import Logo
import Logo from '../../components/assets/img/logo-white.png';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext, useRef,useEffect,useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { LoginFailure,LoginStart,LoginSuccess } from '../../context/AuthAction';
import axios from "axios";
export function Login() {

    const username= useRef();
    const password =useRef();
    const navigate = useNavigate();
    const {error,dispatch} =useContext(AuthContext);

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("click")
        dispatch(LoginStart());
        const user ={
            username:username.current.value,
            password:password.current.value
        }
        try{
            const res= await axios.post("http://localhost:8080/api/auth/signin",user);
            console.log(res.data)
            const data={
                user:res.data.username,
                token:res.data.accessToken,
                role:res.data.username.substring(0,3)
            }

            console.log(data)
            dispatch(LoginSuccess(data))
            navigate("/home")
            
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <img className="img-fluid" src={Logo} alt="Logo" />
                        </div>

                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Login</h1>
                                <p className="account-subtitle">Access to our dashboard</p>

                                <form>
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Username" ref={username} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Password"  ref={password}/>
                                    </div>
                                    <div className="form-group">
                                        <a className="btn btn-primary btn-block" onClick={handleSubmit}>Login</a>
                                    </div>
                                </form>

                                <div className="text-center forgotpass"><a href="/react/forgot-password">Forgot Password?</a></div>
                                <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                </div>

                                <div className="social-login">
                                    <span>Login with</span>
                                    <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebookF} /></a><a href="#" className="google"><FontAwesomeIcon icon={faGoogle} /></a>
                                </div>

                                <div className="text-center dont-have">Don’t have an account? <a href="/register">Request</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

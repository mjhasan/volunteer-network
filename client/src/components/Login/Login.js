import React, { useContext } from 'react';
import './Login.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import google from '../../img/logos/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebaseConfig';
import { userContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const provider = new firebase.auth.GoogleAuthProvider();
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useContext(userContext);
    const googleLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const googleUser = result.user;
                const updateUser = {...user, ...googleUser}
                setUser(updateUser)
                history.replace(from);
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    console.log('Before Login', user);
     return (
        <div className="login-main">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="login-box">
                        <h4>Login with</h4>
                        <div onClick={googleLogin} className="login">
                            <img src={google} alt="google" /><span>Login with Google</span>
                        </div>
                        <br />
                        <span>Don't have an account?</span> <span><a href="#">Create an account</a></span>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Login;
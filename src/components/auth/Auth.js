import React from "react";
import styles from './Auth.css';

// className: styles.input,
// https://github.com/firebase/firebaseui-web#demo
// https://fir-ui-demo-84a6c.firebaseapp.com/

class  AuthDialog extends React.Component {
    // constructor(props) {
    //     super(props);
    // };

    render () {
      return (
        <div>
            <div className="firebaseui-card-content">
                AUTH Starts


                    <div>
                        <button className={styles.firebaseuiIdpButton}>
                            <span className="firebaseui-idp-icon-wrapper">
                                <img className="firebaseui-idp-icon" alt=""
                                     src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
                                </img>
                            </span>
                            <span className="firebaseui-idp-text firebaseui-idp-text-long">Sign in with Google</span>
                            <span className="firebaseui-idp-text firebaseui-idp-text-short">Google</span>
                        </button>
                    </div>
                    <li >
                        <button className="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-facebook firebaseui-id-idp-button">

                            <span className="firebaseui-idp-icon-wrapper">
                                <img className="firebaseui-idp-icon" alt=""
                                     src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg">
                                </img>
                            </span>
                            <span className="firebaseui-idp-text firebaseui-idp-text-long">Sign in with Facebook</span>
                            <span className="firebaseui-idp-text firebaseui-idp-text-short">Facebook</span>
                        </button>
                    </li>


                    <li >
                        <button
                            className="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-password firebaseui-id-idp-button">

                            <span className="firebaseui-idp-icon-wrapper">
                                <img className="firebaseui-idp-icon" alt=""
                                     src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg">
                                </img>
                            </span>
                            <span
                                className="firebaseui-idp-text firebaseui-idp-text-long">Sign in with email</span><span
                            className="firebaseui-idp-text firebaseui-idp-text-short">Email</span></button>
                    </li>





            </div>


        </div>
    );}
}

export default AuthDialog;
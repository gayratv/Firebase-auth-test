import React from "react";
import styles from './Auth.module.css';

// className: styles.input,
// https://github.com/firebase/firebaseui-web#demo
// https://fir-ui-demo-84a6c.firebaseapp.com/

class AuthDialog extends React.Component {
    // constructor(props) {
    //     super(props);
    // };

    render() {
        let spanStyle = {
            color: 'blue',
            display : 'inline',
            paddingLeft : '15px'
        };

        return (
            <div>
                <div className="firebaseui-card-content">
                    AUTH Starts


                    <div>
                        <button>

                            <img className={styles.ImgIcon} alt=""
                                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
                            </img>

                            <span style={spanStyle}>Sign in with Google</span>

                        </button>
                    </div>

                    <div>
                        <button>


                            <img className={styles.ImgIcon + ' ' + styles.bgr1} alt=""
                                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg">
                            </img>

                            <span style={spanStyle}>Sign in with Facebook</span>

                        </button>
                    </div>


                    <div>
                        <button>
                            <img className={styles.ImgIcon + ' ' + styles.bgr2} alt=""
                                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg">
                            </img>
                            <span style={spanStyle}>Sign in with email</span>

                        </button>
                    </div>


                </div>


            </div>
        );
    }
}

export default AuthDialog;
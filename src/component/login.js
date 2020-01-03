import React from "react";
import './login.css'


class Login extends React.Component {
    state = {
        userName: "",
        password: ''
    }
    onUserSubmit = (e) => {
        e.preventDefault()

    }

    render() {
        return (

            <div className="App">
                <div className="loginbox">
                    <img
                        className="avatar"
                        alt="profile"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3Nw8Rc-b0VL9GkaoIuIYMKNI6b6qBQ-PwTHn2gZN2lld822Gp"
                    />
                    <h1>Login Here </h1>
                    <form ref={this.form}>
                        <lable>Username</lable>
                        <input
                            type="email"
                            required

                            placeholder="Enter username"

                        />
                        <label for="psw">Password</label>
                        <input
                            type="password"
                            required
                            placeholder="Enter password"

                        />
                        <input type="submit" onClick={this.onUserSubmit} />
                        <a href="#">Lost your Password ? </a> <br />
                        <a href="#">Don't have an account?</a>
                    </form>
                </div>
            </div>
        );

    }
}


export default Login;

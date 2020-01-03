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
                            name=""
                            placeholder="Enter username"
                            value={userName}
                            onChange={e =>
                                this.setState({ userName: e.target.value });

                        }
                    />
                    <label for="psw">Password</label>
                        <input
                            type="password"
                            required
                            placeholder="Enter password"
                            id="psw"
                            name="psw"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            value={password}
                            onChange={event =>
                                this.setState({ password: event.target.value });

                        }
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

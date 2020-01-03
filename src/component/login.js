import React from "react";
import './login.css'

const soldier = {
    email: "soldier@thetarzanway.com",
    password: "soldier"

}
const Terrorist = {
    email: "terrorist@thetarzanway.com",
    password: 'terrorist'

}


class Login extends React.Component {
    state = {
        userName: "",
        password: ''
    }
    onCheckUserValid = (e) => {
        e.preventDefault();
        const { userName, password } = this.state

        if (userName == soldier.email && password == soldier.password) { console.log("you are aurthroized person "); console.log(userName, password); }


        else if (userName == Terrorist.email && password == Terrorist.password) { console.log("you are aurthroized person "); console.log(userName, password) }
        else console.log("your cant login  ")



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
                    <form >
                        <lable>Email</lable>
                        <input
                            type="email"
                            required
                            value={this.state.userName}
                            placeholder="Enter username"
                            onChange={(e) => { this.setState({ userName: e.target.value }) }}

                        />
                        <label for="psw">Password</label>
                        <input
                            type="password"
                            required
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={(e) => { this.setState({ password: e.target.value }) }}

                        />
                        <input type="submit" onClick={this.onCheckUserValid} />
                        <a href="#">Lost your Password ? </a> <br />
                        <a href="#">Don't have an account?</a>
                    </form>
                </div>
            </div>
        );

    }
}


export default Login;

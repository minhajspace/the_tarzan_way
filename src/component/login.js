import React from "react";
import './login.css'
import { withRouter } from "react-router";
import Soldier from './Soldier'
import Terrorist from './Terrorist'



const soldier = {
    email: "soldier@thetarzanway.com",
    password: "soldier"
}
const Terroristdata = {
    email: "terrorist@thetarzanway.com",
    password: 'terrorist'

}
window.localStorage.setItem("email_soldier", "soldier@thetarzanway.com");
window.localStorage.setItem("password_soldier", "soldier");
window.localStorage.setItem("email", "terrorist@thetarzanway.com");
window.localStorage.setItem("password", "terrorist")
// console.log(localStorage.getItem("email"))


class Login extends React.Component {
    state = {
        userName: "",
        password: '',
        soldier: true
    }
    onCheckUserValid = (e) => {
        e.preventDefault();
        const { userName, password } = this.state

        if (userName == localStorage.getItem("email_soldier") && password == localStorage.getItem('password_soldier')) { console.log("you are aurthroized person "); console.log(localStorage.getItem("email_soldier", "password_soldier")); }


        else if (userName == Terroristdata.email && password == Terroristdata.password) { console.log("you are aurthroized person "); console.log(userName, password) }
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


export default withRouter(Login);

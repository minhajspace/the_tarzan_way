import React from 'react';
import { withRouter } from "react-router";



let blast = ""
window.localStorage.setItem("boom", "boom is planted now")
let boom = ""
let interval;
let userInput;
window.localStorage.setItem("userInput", userInput)
console.log(window.localStorage.getItem("userInput"))


class Terrorist extends React.Component {
    state = {
        userInput: "",
        boom: '',
        timer: 60
    }
    userInput = this.state.userInput

    onButtoClick = () => {
        if (this.state.userInput >= 0 && this.state.userInput <= 100000) {
            this.setState({ boom: "Boom is planted" })



            interval = setInterval(() => {
                this.setState({ timer: this.state.timer -= 1 })
                if (this.state.timer === 0)
                    clearInterval(interval)

            }, 100)



        }
        else {
            alert("please enter a volid keyword")
        }

    }

    onTestChange = () => {

    }



    render() {
        return (

            <div className="ui segment">
                <center>
                    <h4>Terrorist Dashboad</h4>
                    <h4>{boom}</h4>
                    <h4> {this.state.timer}</h4>
                    <h4>{blast}</h4>
                    <h1>{this.state.boom}</h1>
                    <div className="ui massive icon input">
                        <input type="text"
                            placeholder="Type between 1 to 100000 before planting a bomb"
                            value={this.state.userInpur}
                            onChange={(e) => { this.setState({ userInput: e.target.value }) }}

                        />
                        <button onClick={this.onButtoClick} className="massive ui button">
                            Click to plant a bomb
                       </button>

                    </div>
                </center>

            </div>

        )
    }
}
export default withRouter(Terrorist);
import React from 'react';
import { withRouter } from "react-router";



class Terrorist extends React.Component {
    state = {
        userInput: "",
        boom: ''
    }

    onButtoClick = () => {
        this.setState({ boom: 'Boom is Planted' })
        console.log(this.state.boom)
    }


    render() {
        return (

            <div className="ui segment">
                <center>
                    <h4>Terrorist Dashboad</h4>
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
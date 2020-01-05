import React from 'react';
import boom from './Terrorist'

import { withRouter } from "react-router";

const Soldier = () => {
    return (

        <div className="ui segment">
            <center>
                <h4>Soldier Dashboad</h4>
                <h4>{boom}</h4>


                <div className="ui massive icon input" >
                    <button className="massive ui button">
                        Click to defuse the bomb
</button>
                </div>

            </center>

        </div>




    )


}
export default withRouter(Soldier);
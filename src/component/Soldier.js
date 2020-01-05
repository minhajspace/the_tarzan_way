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
                    <input type="text" placeholder="" />
                    <button className="massive ui button">
                        Massive
</button>
                </div>

            </center>

        </div>




    )


}
export default withRouter(Soldier);
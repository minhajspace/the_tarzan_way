import React from 'react';

import { withRouter } from "react-router";

const Soldier = () => {
    return (

        <div className="ui segment">
            <center>
                <h1>Soldier Dashboad</h1>

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
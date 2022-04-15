import React from "react";
import {useLocation} from "react-router-dom";

export default function TokenView() {
    const location = useLocation();

        return (
            <div>
                <p>Token Value</p>
                {/** the token value from PageContent*/}
                <h1>{location.state.tokenValue}</h1>
            </div>
        )
      }


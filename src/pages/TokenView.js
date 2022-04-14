import React from "react";
import {useLocation} from "react-router-dom";

export default function TokenView() {
    const location = useLocation();

        return (
            <div>
                <p>Token Value</p>
                <h1>{location.state.tokenValue}</h1>
            </div>
        )
      }


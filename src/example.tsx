import React from "react";
import ReactDOM from "react-dom";
import * as Greenscreen from ".";

const dash = new Greenscreen.Dashboard({
    name: "GreenScreen",
    protocol: new Greenscreen.MockProtocol({
        ballCount: 5
    }),
    layout: {
        elements: [{
            component: "core.ProgressBar",
            title: "Ball Count",
            prototype: {
                min: 0,
                max: 1,
                state: {
                    hook: "ballCount",
                    target: "data.value"
                }
            }
        }]
    }
});

ReactDOM.render(<Greenscreen.DashboardView dashboard={dash} />, document.getElementById("root"));
import React from "react";
import {render} from "react-dom";
import Template from "./template";
import reducer from "./reducers";
import {LoggerFactory,Redux} from "darch/lib/utils";

/****************************************************************
* App Bootstrap
****************************************************************/
(()=>{

    // Create redux store with app reducers
    new Redux({
        votes: reducer,
    }, {shared: true});

    render(<Template />, document.getElementById("root"));
})();

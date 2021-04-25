import React from "react";
import { Dimmer, Loader,Segment } from "semantic-ui-react";

const Fallback = () => (
    <Segment style={{ height: "100vh" }}>
        <Dimmer active>
            <Loader />
        </Dimmer>
    </Segment>
);

export default Fallback;
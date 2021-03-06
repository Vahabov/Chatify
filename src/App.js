import React from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "./components/SidePanel";
// import ChatPanel from "./components/ChatPanel/ChatPanel";

const App = () => {


  return (
    <Grid columns="2" style={{ background: "#eee", height: "110vh" }}>
      <Grid.Row>
        <Grid.Column width={3}>
          <SidePanel />
        </Grid.Column>

        <Grid.Column style={{ background: "#fff" }} width={13}>
          {/* {currentChannel && <ChatPanel currentChannel={currentChannel} />} */}
          panel
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
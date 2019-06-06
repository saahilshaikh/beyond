import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";
class SidePanel extends React.Component {
  render() {
    const { currentUser, primaryColor } = this.props;

    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{
          background: primaryColor,
          fontSize: "1.2rem",
          overflowY: "scroll"
        }}
      >
        <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
        <Starred currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
        <div style={{ marginLeft: "20px" }}>
          <Icon name="connectdevelop" color="olive" />
          <Link to="/beyond/about">Developers</Link>
        </div>
      </Menu>
    );
  }
}

export default SidePanel;

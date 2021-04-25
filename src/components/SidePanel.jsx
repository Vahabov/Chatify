import React, { useState } from "react";
import { Icon, Popup, Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import ChannelList from "./channels/ChannelList";
import CreateChannelForm from "./channels/CreateChannelForm";
import { TwitterPicker } from "react-color";

const SidePanel = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("#0693E3");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Menu
                vertical
                inverted
                secondary
                fixed="left"
                style={{
                    width: "346px",
                    fontSize: "1.2rem",
                    background: color,
                    height: "100vh",
                }}
            >
                <Menu.Item>
                    <TwitterPicker
                        color={color}
                        onChangeComplete={(color) => setColor(color.hex)}
                    />
                </Menu.Item>
                <Menu.Item>
                    <UserPanel />
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>
                        Channels
                        <span style={{ float: "right" }}>
                            <Popup
                                content="Create new channel"
                                trigger={<Icon name="add" onClick={(event) => handleOpen()} />}
                            />
                        </span>
                    </Menu.Header>
                    {/* Channels */}
                    <ChannelList />
                </Menu.Item>
            </Menu>

            <CreateChannelForm
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
            />
        </>
    );
};

export default SidePanel;
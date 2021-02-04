import React from "react";

const Sidebar = ({ emails, setSidebarSection }) => {
    const unreadCount = emails.reduce(
        function(previous, msg) {
            if (msg.read !== "true" ) {
                return previous + 1;
            }
            else {
                return previous;
            }
        }.bind(this), 0);

    const deletedCount = emails.reduce(
        function(previous, msg) {
            if (msg.tag === "deleted") {
                return previous + 1;
            }
            else {
                return previous;
            }
        }.bind(this), 0);

    return (
        <div id="sidebar">
            <div className="sidebar__compose">
                <a href="#" className="btn compose">
                    Compose <span className="fa fa-pencil">

                </span>
                </a>
            </div>
            <ul className="sidebar__inboxes">
                <li onClick={() => { setSidebarSection('inbox'); }}><a>
                    <span className="fa fa-inbox"/> Inbox
                    <span className="item-count">{unreadCount}</span></a></li>
                <li onClick={() => { setSidebarSection('sent'); }}><a>
                    <span className="fa fa-paper-plane"/> Sent
                    <span className="item-count">0</span></a></li>
                <li onClick={() => { setSidebarSection('drafts'); }}><a>
                    <span className="fa fa-pencil-square-o"/> Drafts
                    <span className="item-count">0</span>
                </a></li>
                <li onClick={() => { setSidebarSection('deleted'); }}><a>
                    <span className="fa fa-trash-o"/> Trash
                    <span className="item-count">{deletedCount}</span>
                </a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
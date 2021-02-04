import React from "react";
import {getPrettyTime} from "./EmailDetails";


const EmailListItem = ({ email, onEmailClicked, selected }) => {
    let classes = "email-item";
    if (selected) {
        classes += " selected"
    }

    return (
        <div onClick={() => { onEmailClicked(email.id); }} className={classes}>
            <img src={"image.png"}/>
            <div className="email-item__unread-dot" data-read={email.read}>

            </div>
            <div className="email-item__subject truncate">{email.subject}</div>
            <div className="email-item__details">
                <span className="email-item__from truncate">{email.from}</span>
                <span className="email-item__time truncate">{getPrettyTime(email.time)}</span>
            </div>
        </div>
    );
}

export default EmailListItem;
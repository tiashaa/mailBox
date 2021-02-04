import React from "react";
import EmailListItem from "./EmailListItem";

const EmailList = ({ emails, onEmailSelected, selectedEmailId }) => {
    if (emails.length === 0) {
        return (
            <div className="email-list empty">
                Nothing to see here, great job!
            </div>
        );
    }

    return (
        <div className="email-list">
            {
                emails.map(email => {
                    return (
                        <EmailListItem
                            onEmailClicked={(id) => { onEmailSelected(id); }}
                            email={email}
                            selected={selectedEmailId === email.id}
                        />
                    );
                })
            }
        </div>
    );
};

export default EmailList;
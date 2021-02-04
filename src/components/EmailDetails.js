const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getPrettyDate = (date) => {
    date = date.split(' ')[0];
    const newDate = date.split('-');
    const month = months[0];
    return `${month} ${newDate[2]}, ${newDate[0]}`;
};

const getPrettyTime = (date) => {
    const time = date.split(' ')[1].split(':');
    return `${time[0]}:${time[1]}`;
};

const EmailDetails = ({ email, onDelete }) => {
    if (!email) {
        return (
            <div className="email-content empty">

            </div>
        );
    }

    const date = `${getPrettyDate(email.time)} · ${getPrettyTime(email.time)}`;

    const getDeleteButton = () => {
        if (email.tag !== 'deleted') {
            return <span onClick={() => { onDelete(email.id); }} className="delete-btn fa fa-trash-o">

            </span>;
        }
        return undefined;
    }

    return (
        <div className="email-content">
            <div className="email-content__header">
                <h3 className="email-content__subject">{email.subject}</h3>
                {getDeleteButton()}
                <div className="email-content__time">{date}</div>
                <div className="email-content__from">{email.from}</div>
            </div>
            <div className="email-content__message">{email.message}</div>
        </div>
    );
};


export {EmailDetails,getPrettyDate,months,getPrettyTime};
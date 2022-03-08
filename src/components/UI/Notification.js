import classes from './Notification.module.css';

const Notification = ({ item }) => {
    const { status, title, message } = item;

    let cssClasses = `${classes.notification} `;

    if (status === 'error') {
        cssClasses += classes.error;
    }
    if (status === 'success') {
        cssClasses += classes.success;
    }

    return (
        <section className={cssClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </section>
    );
};

export default Notification;
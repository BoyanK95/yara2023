import classes from './Modal.module.css'

function Modal({children, onClose}) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
                <div open className={classes.modal}>
                    {children}
                </div>
        </>
    );
}

export default Modal;
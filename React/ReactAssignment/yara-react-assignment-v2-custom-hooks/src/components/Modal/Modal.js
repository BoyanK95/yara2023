import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const backdropRootEl = document.getElementById('backdrop-root');
const ModalRootEl = document.getElementById('modal-root');

const Backdrop = ({onClose}) => {
    return <div className={classes.backdrop} onClick={onClose}/>;
};

const ModalOverlay = (props) => {
    return (
        <div open className={classes.modal}>
            {props.children}
        </div>
    );
};

function Modal({ children, onClose }) {
    return <Fragment>{ReactDOM.createPortal(<Backdrop onClick={onClose}/>, backdropRootEl)}</Fragment>;
}

export default Modal;

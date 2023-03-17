import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Form from '../FormComponent/Form';
import classes from './Modal.module.css';

const backdropRootEl = document.getElementById('backdrop-root');
const modalRootEl = document.getElementById('modal-root');

const Backdrop = ({ onClose }) => {
    return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
    return (
        <div open className={classes.modal}>
            {props.children}
        </div>
    );
};

function Modal({ onClose, onSubmit }) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, backdropRootEl)}
            {ReactDOM.createPortal(
                <ModalOverlay>
                    <Form firstLabel='Region' secondLabel='Season' thirdLabel='Crops' numberLabel='Yeild' onSubmit={onSubmit} />
                </ModalOverlay>,
                modalRootEl
            )}
        </Fragment>
    );
}

export default Modal;

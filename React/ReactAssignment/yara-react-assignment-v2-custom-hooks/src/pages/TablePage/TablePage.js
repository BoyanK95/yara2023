import { useState } from 'react';
import Form from '../../components/FormComponent/Form';
import Table from '../../components/TableComponent/Table';
import classes from './TablePage.module.css';
import { tableData } from '../../data/tableData';
import Modal from '../../components/Modal/Modal';

const TablePage = () => {
    const [showModal, setShowModal] = useState(false);

    function modalToggleHandler() {
        if (showModal) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    return (
        <div className={classes.container}>
            <h3>Table Details</h3>
            <details>
                <summary>Show Table Details</summary>
                <Table firstColumn='Region' secondColumn='Season' thirdColumn='Crops' numberColumn='Yeild in tons' />
                <button className='btn' onClick={modalToggleHandler}>
                    Add a new item
                </button>
            </details>
            {showModal && (
                <Modal onClose={modalToggleHandler}/>
            )}
        </div>
    );
};

export default TablePage;

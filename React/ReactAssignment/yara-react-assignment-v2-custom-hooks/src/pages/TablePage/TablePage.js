import { useState } from 'react';
import Table from '../../components/TableComponent/Table';
import classes from './TablePage.module.css';
import { tableData } from '../../data/tableData';
import Modal from '../../components/Modal/Modal';

const TablePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(tableData)

    function modalToggleHandler() {
        if (showModal) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    function handleSubmit(dataArr) {
        setData((prevData) => [...prevData, dataArr])
        setShowModal(false)
    }
    
    return (
        <div className={classes.container}>
            <h3>Table Details</h3>
            <details>
                <summary>Show Table Details</summary>
                <Table firstColumn='Region' secondColumn='Season' thirdColumn='Crops' numberColumn='Yeild in tons' data={data}/>
                <button className='btn' onClick={modalToggleHandler}>
                    Add a new item
                </button>
            </details>
            {showModal && (
                <Modal onClose={modalToggleHandler} onSubmit={handleSubmit}/>
            )}
        </div>
    );
};

export default TablePage;

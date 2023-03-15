import { useState } from 'react';
import Form from '../../components/FormComponent/Form';
import Table from '../../components/TableComponent/Table';
import classes from './TablePage.module.css';
import { tableData } from '../../data/tableData';

const TablePage = () => {
    const [showForm, setShowForm] = useState(false);

    function addItemHandler() {
        setShowForm(true);
    }

    return (
        <div className={classes.container}>
            <h3>Table Details</h3>
            <details>
                <summary>Show Table Details</summary>
                <Table firstColumn='Region' secondColumn='Season' thirdColumn='Crops' numberColumn='Yeild in tons' />
                <button className='btn' onClick={addItemHandler}>
                    Add a new item
                </button>
            </details>
            {showForm && (
                <Form firstLabel='Region' secondLabel='Season' thirdLabel='Crops' numberLabel='Yeild' onSubmit  />
            )}
        </div>
    );
};

export default TablePage;

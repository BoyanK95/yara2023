import { useState } from 'react';
import Form from '../../components/FormComponent/Form';
import Table from '../../components/TableComponent/Table';
import classes from './TablePage.module.css';

const TablePage = () => {
    const [showForm, setShowForm] = useState(false)

    function addItemHandler() {
        setShowForm(true)
    }
    
    return (
        <div className={classes.container}>
            <h3>Table Details</h3>
            <Table />
            <button className='btn' onClick={addItemHandler}>Add a new item</button>
            {showForm && <Form firstLabel='Region' secondLabel='Season' thirdLabel='Crops'/>}
        </div>
    );
};

export default TablePage;

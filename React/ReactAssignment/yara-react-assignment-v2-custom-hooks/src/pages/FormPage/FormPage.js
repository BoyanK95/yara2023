import { useState } from 'react';
import Form from '../../components/FormComponent/Form';
import SummaryComponent from '../../components/Summary/Summary';
import classes from './FormPage.module.css';

const FormPage = () => {
    const [submitedData, setSubmitedData] = useState([]);
    const [showSummary, setShowSummary] = useState(false);

    function formSubmitHandler(formData) {
        setShowSummary(true);
        // const data = []
        // data.push(formData)
        // console.log(formData);
        setSubmitedData(formData)
        // console.log(submitedData);
        // setSubmitedData(data);
    }

    return (
        <div className={classes.container}>
            <h2>Create a Crop Calendar: Specify crop and varieties</h2>

            <Form
                firstLabel='Region'
                secondLabel='Calendar name'
                thirdLabel='Crop variety'
                numberLabel='Farmland sq. m'
                onSubmit={formSubmitHandler}
            />
            {submitedData && showSummary && <SummaryComponent inputs={submitedData} />}
        </div>
    );
};

export default FormPage;

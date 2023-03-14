import Form from '../../components/FormComponent/Form';
import classes from './FormPage.module.css'

const FormPage = () => {

    return (
        <div className={classes.container}>
            <h2>Create a Crop Calendar: Specify crop and varieties</h2>
            <Form firstLabel='Region' secondLabel='Calendar name' thirdLabel='Crop variety' numberLabel='Farmland sq. m'/>
        </div>
    );
};

export default FormPage;

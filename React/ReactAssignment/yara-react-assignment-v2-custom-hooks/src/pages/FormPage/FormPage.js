import Form from '../../components/FormComponent/Form';

const FormPage = () => {

    return (
        <div>
            <h2>Create a Crop Calendar: Specify crop and varieties</h2>
            <Form firstLabel='Region:' secondLabel='Calendar name:' thirdLabel='Please specify the crop variety:'/>
        </div>
    );
};

export default FormPage;

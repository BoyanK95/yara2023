import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../store/slice/carsSlice';
import { changeCost, changeName } from '../store/slice/formSlice';

function CarForm() {
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addCar({ name, cost }));
        console.log({name, cost});
    };

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    };

    const handleCostChange = (e) => {
        const carCost = parseInt(e.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    return (
        <div className='car-form panel'>
            <h4>Add Car</h4>
            <form onSubmit={submitHandler}>
                <div className='field-group'>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <input className='input is-expanded' value={name} onChange={handleNameChange} />
                    </div>
                    <div className='field'>
                        <label className='label'>Cost</label>
                        <input
                            className='input is-expanded'
                            value={cost || ''}
                            onChange={handleCostChange}
                            type='number'
                        />
                    </div>
                </div>
                <div className='field'>
                    <button className='button is-link'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CarForm;

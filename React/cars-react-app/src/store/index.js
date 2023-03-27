import { configureStore } from '@reduxjs/toolkit';
import { carReducer, addCar, removeCar, changeSearchTerm } from './slice/carsSlice';
import { formReducer, changeName, changeCost } from './slice/formSlice';

const store = configureStore({
    reducer: {
        cars: carReducer,
        form: formReducer
    }
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };

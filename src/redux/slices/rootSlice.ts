import { createSlice } from '@reduxjs/toolkit';

export interface CarState {
    make: string,
    model: string
    price: number,
    mpg: string,
    max_speed: number,
}

const initialState: CarState = {
    make: '',
    model: '',
    price: 0,
    mpg: '',
    max_speed: 0,
}
const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseMPG: (state, action) => { state.mpg = action.payload },
        chooseMaxSpeed: (state, action) => { state.max_speed = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const {
    chooseMake,
    chooseModel,
    choosePrice,
    chooseMPG,
    chooseMaxSpeed,
} = rootSlice.actions;
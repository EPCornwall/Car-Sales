import {ADD_FEATURE, REMOVE_FEATURE} from '../actions'

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FEATURE:
            // console.log("remove is running")
            const removedItem = action.payload
            const unRemoved = state.car.features.filter( item => item.id !== action.payload.id )
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car:{
                    ...state.car,
                    features:[unRemoved]},
                additionalFeatures:[...state.additionalFeatures, removedItem]
            }
        case ADD_FEATURE:
            // console.log("add is running", action.payload);
            let newItem = action.payload
            const unAddedItems = state.additionalFeatures.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                additionalPrice: state.additionalPrice += action.payload.price,
                car: {...state.car,
                features:[...state.car.features, newItem],},
                additionalFeatures: unAddedItems
            }
        default:
            return state;
    }
}
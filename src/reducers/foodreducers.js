import { ADD_FOOD, DELETE_FOOD} from '../config/Config';

const intialstate={
    foodlist:[]
}
const foodreducer =(state=intialstate, action)=>
{
    switch (action.type){
        case ADD_FOOD:
            return{...state,
            foodlist: state.foodlist.concat({
                key: Math.random(),
                name: action.data
            })
            };
        case DELETE_FOOD:
            return{
                ...state,
                foodlist: state.foodlist.filter((item)=>
            item.key != action.key )
            };
        default:
            return state;
    }
}

export default foodreducer;
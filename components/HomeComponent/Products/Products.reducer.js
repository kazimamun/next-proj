import productInitialState from "./Products.initialState";

const productsReducer = (state=productInitialState, action) =>{
    switch (action.type){
        default :
            return state;
    }
};

export default productsReducer;
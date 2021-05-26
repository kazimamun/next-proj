import { combineReducers } from "redux";
import { ourTeamReducer } from "../../components/AboutComponents/OurTeam/ourTeam.reducer";
import productsReducer from "../../components/HomeComponent/Products/Products.reducer";
import ShopCategoryReducer from "../../components/HomeComponent/ShopCategory/ShopCategory.reducer";
import blogReducer from "../../components/HomeComponent/ShowBlog/showBlog.reducer";
import cartReducer from "../../reducers/cart";

export const rootReducer = combineReducers({
    teamMembers : ourTeamReducer,
    shopCategories : ShopCategoryReducer,
    products : productsReducer,
    blogs : blogReducer,
    cart : cartReducer
});
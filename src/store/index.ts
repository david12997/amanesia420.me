import { configureStore, combineReducers } from "@reduxjs/toolkit";

import ProductsCategorySliceReducer from './products-category';

const rootReducer = combineReducers({
    productsPerCategory: ProductsCategorySliceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
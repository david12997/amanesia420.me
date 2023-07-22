import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'; 
import { ProductsAmnesia } from '../types/products-amnesia';
import { CategoriesAmnesia } from '../types/categories-amnesia';

export interface initialStateTypeProductsPerCategory{
    currentPage: number;
    currentCategory: number;
    categories: CategoriesAmnesia;
    products: ProductsAmnesia[];
    state: string;
}

const initialState:initialStateTypeProductsPerCategory ={
    currentPage: 1,
    currentCategory: 4,
    categories:{data: [], meta: {
        pagination:{
            page: 0,
            pageSize: 0,
            total: 0,
            pageCount: 0,
        }
    }},
    products: [],
    state: 'success'
}


const ProductsCategorySlice = createSlice({

    name: 'productsPerCategory',
    initialState: initialState,
    reducers: {

        setProductsPerCategory: (state, action:PayloadAction<{products:ProductsAmnesia,category:number}>) => {
            state.products[action.payload.category] = action.payload.products;
            state.currentCategory = action.payload.category;
            
            
        },

        setState : (state, action:PayloadAction<string>) => {
            state.state = action.payload;
        },

        setPage : (state, action:PayloadAction<number>) => {
            state.currentPage = action.payload;
        }

    }

});

export const { setProductsPerCategory, setState, setPage} = ProductsCategorySlice.actions;
export default ProductsCategorySlice.reducer;
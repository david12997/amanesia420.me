'use client'

import { useState } from "react"
import config from "../../config/config"
import { GetData } from "../../services/get-data"
import { useAppDispatch, useAppSelector } from "../../services/redux-client"
import { setPage, setProductsPerCategory, setState } from "../../store/products-category"
import { ProductsAmnesia } from "../../types/products-amnesia"

type PaginationProps = {
    products:ProductsAmnesia
}

const Pagination = (props:PaginationProps):JSX.Element =>{

  const dispatch = useAppDispatch();
  const stateProducts = useAppSelector((state) => state.productsPerCategory);

  const setProducts = (page:number) => {
    
    document.querySelector('body')?.scrollTo(0, 90);
    const idCategory = stateProducts.currentCategory

    dispatch(setState("loading"));
    dispatch(setPage(page));
  
    GetData([
      `https://cms.aipus.co/api/products?populate=media&pagination[page]=${page}&pagination[pageSize]=12&filters[subcategories][id][$eq]=${idCategory}`
    ],config.cms_token).then((data) => {

      data[0] !== undefined 
      &&
      dispatch(setProductsPerCategory({
        products: data[0] as ProductsAmnesia,
        category:idCategory
      }));
      dispatch(setState("success"));
      document.querySelector('body')?.scrollTo(0, 0);

    }).catch((error) => {})
  }

 

    return<nav className="join w-screen flex items-center justify-center border-primary">

      {
         [1,2,3,4].map((item:number,index:number) => {

          return<button
            key={index}
            onClick={()=>setProducts(item)}
            className={`join-item hover:bg-primary btn btn-md border-primary ${item === stateProducts.currentPage ? "bg-primary" : "bg-gray"}`}
          >
           {item} 
          </button>
         })
      }

  </nav>
}

export default Pagination;
'use client'

import Image from "next/image";
import config from "../../config/config";
import { useAppDispatch, useAppSelector } from "../../services/redux-client";
import ClickCategoryProducts from "../../services/products-category";
import { useEffect, useRef } from "react";

type CardCategoryProps ={
    name:string,
    image:string,
    key?:string | number,
    id:number
}

const CardCategory = (props:CardCategoryProps):JSX.Element =>{

    const dispatch = useAppDispatch();
    const stateProducts = useAppSelector((state) => state.productsPerCategory);
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(()=>{

        if(stateProducts.currentCategory === props.id && cardRef.current !== null){
            cardRef.current.classList.add("border-4");
            cardRef.current.classList.add("border-secondary");
        }

    },[stateProducts.currentCategory,props.id])
    

    return<div  className="w-[200px] cursor-pointer mr-3 ml-3" onClick={()=>ClickCategoryProducts(dispatch,props.id,stateProducts)}>
        <div ref={cardRef} className={`${stateProducts.currentCategory == props.id && 'border-4'} border-secondary relative card-category w-40 bg-white h-40 shadow-md m-2 rounded-lg flex flex-col items-center  justify-center`}>
            <Image
                src={`${config.cms_domain}${props.image}`} 
                alt={`Categoria ${props.name} amnesia tienda`}
                width={110} 
                height={110}
                className="p-1"
                loading="lazy"
            />
            <div className="text-primary text-base font-semibold name-category flex items-center justify-center w-full pt-1">
                {props.name.replace("amnesia"," ")}
            </div>
        </div>

    </div>
}

export default CardCategory
'use client'

import Image from "next/image";
import config from "../../config/config";
import { CategoriesAmnesia, CategoriesAmnesiaDatum, PurpleAttributes } from "../../types/categories-amnesia";
import ClickCategoryProducts from "../../services/products-category";
import { useAppDispatch, useAppSelector } from "../../services/redux-client";

type NavComponentProps = {

    categories:CategoriesAmnesia

}

const NavComponent = (props:NavComponentProps):JSX.Element => {

    const dispatch = useAppDispatch();
    const stateProducts = useAppSelector((state) => state.productsPerCategory);

    return<nav className="fixed z-30 w-screen h-[110px] grid grid-cols-2 md:grid-cols-4 grid-rows-7 cursor-pointer">

        <div className="navbar-top bg-primary row-span-2 col-span-4 relative">
            <div className="nav-logo w-screen flex justify-center items-center h-full">
                <Image
                    src={`${config.cms_domain}/uploads/logo_desktop_c772882251.webp`} 
                    alt="Logo amnesia tienda" 
                    width={24} 
                    height={24} 
                />
                <div className="name-anmesia text-white text-2xl p-1">
                    mnesia
                </div>
            </div>

        </div>
        <div className=" pt-2 navbar-bottom bg-[#f5f5f5] row-span-5 col-span-4  w-screen flex overflow-x-scroll lg:justify-around">
            {
                props.categories.data.map((category:CategoriesAmnesiaDatum,index:number) => {

                    return<div   key={index}
                        onClick={()=>{

                            const links = document.querySelectorAll(".name-category-nav");
                            links.forEach((link,position:number) => {
                                if(position === index){
                                    link.classList.remove("border-white");
                                    link.classList.add("border-secondary");
                                }else{
                                    link.classList.remove("border-secondary");
                                    link.classList.add("border-white");
                                }
                            })

                            ClickCategoryProducts(dispatch,category.id,stateProducts)
                        }}
                       
                        className={`pl-1 pr-1 bg-white h-[46px] border-2 shadow-sm shadow-gray1 "mt-6 rounded-[20px] ${stateProducts.currentCategory === category.id ? "border-secondary" : "border-white"} cursor-pointer min-w-[120px] w-[160px] name-category-nav text-primary font-semibold  truncate flex items-center justify-center ml-3 mr-3"`}
                    >
                        {category.attributes.name.replace("amnesia"," ").replace("Amnesia"," ")}   
                    </div>
                })
            }

        </div>
    
    </nav>

};

export default NavComponent;


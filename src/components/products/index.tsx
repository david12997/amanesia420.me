'use client'

import {useAppDispatch, useAppSelector } from "../../services/redux-client";
import { ProductsAmnesia, ProductsAmnesiaDatum } from "../../types/products-amnesia";
import CardProduct from "../card-product";
import Progress from "../progress";
import Pagination from "../pagination";

type ProductsProps = {
    products:ProductsAmnesia
}

const Products = (props:ProductsProps):JSX.Element => {

    const productsState = useAppSelector((state) => state.productsPerCategory);

    return<section >
        <Pagination products={props.products} />
        <br/>
        <div className=" w-screen flex flex-wrap justify-around">

        {
            
            productsState.state === "loading" 
            ?
            <Progress/>
            :
            (productsState.products[productsState.currentCategory] === undefined)
            ?
            props.products.data.map((product:ProductsAmnesiaDatum,index:number) => {

                return<CardProduct
                    key={index}
                    name={product.attributes.name}
                    price={product.attributes.discount_price === "" ? product.attributes.sale_price : product.attributes.discount_price}
                    image={product.attributes.media.data[0].attributes.url}
                    link_ml={product.attributes.links_marketplace.mercadoshops}
                    link_whatsapp={product.attributes.links_marketplace.whatsapp}
                />
            })
            :
            productsState.products[productsState.currentCategory].data.length === 0
            ?
            <section className="h-32 flex items-center justify-center">
                <h2 className="font-thin text-[20px] w-[80%]"><strong className="font-extrabold">Lo sentimos</strong> no hay productos en esta categoria</h2>
            </section>
            :
            productsState.products[productsState.currentCategory].data.map((product:ProductsAmnesiaDatum,index:number) => {

                return<CardProduct
                    key={index}
                    name={product.attributes.name}
                    price={product.attributes.discount_price === "" ? product.attributes.sale_price : product.attributes.discount_price}
                    image={product.attributes.media.data[0].attributes.url}
                    link_ml={product.attributes.links_marketplace.mercadoshops}
                    link_whatsapp={product.attributes.links_marketplace.whatsapp}
                />
            })
            

        }
          
        </div>
        <br/>
        <br/>
        <Pagination products={props.products} />
    </section>
};

export default Products;

/**
 *     

 * 
 * 
 */
'use client'

import { CategoriesAmnesia } from "../../types/categories-amnesia";
import CardCategory from "../card-category";

type PropsCategories ={

    categories:CategoriesAmnesia
}

const Categories = (props:PropsCategories):JSX.Element => {



    return<section >
        
        <div className=" h-52 w-screen mb-8 inline-flex overflow-x-scroll p-1 mt-6">

            {
                props.categories.data.map((category,index) => {
                    
                    return<CardCategory
                        key={index} 
                        name={category.attributes.name}
                        image={category.attributes.media.data[0].attributes.url}
                        id={category.id}
                    />
                   
                })
            }
            
        </div>

    </section>
};

export default Categories;
import config from "../config/config";
import { initialStateTypeProductsPerCategory, setPage, setProductsPerCategory, setState } from "../store/products-category";
import { ProductsAmnesia } from "../types/products-amnesia";
import { GetData } from "./get-data";
import { useAppSelector } from "./redux-client";



const ClickCategoryProducts = async(dispatch:any,id:number,stateProducts:initialStateTypeProductsPerCategory) =>{

    dispatch(setPage(1));
    dispatch(setState("loading"));
    GetData([
        'https://cms.aipus.co/api/products?populate=media&pagination[page]=1&pagination[pageSize]=12&filters[subcategories][id][$eq]='+id
    
    ],config.cms_token).then((res:any) => {

        dispatch(setProductsPerCategory({
            products: res[0] as ProductsAmnesia,
            category:id
        }));

        dispatch(setState("success"));
      
    

    }).catch((err:any) => console.info(err))


    document.querySelector('body')?.scrollTo(0, 0);

}

export default ClickCategoryProducts;

//sudo certbot certonly --manual --preferred-challenges=dns --email admin@amnesia420.me --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d amnesia420.me -d *.amnesia420.me
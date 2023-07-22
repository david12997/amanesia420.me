import config from "../config/config"
import { GetData } from "../services/get-data"
import Categories from "../components/categories";
import Products from "../components/products";
import Carousel from "../components/carousel";
import { CategoriesAmnesia } from "../types/categories-amnesia";
import { ProductsAmnesia } from "../types/products-amnesia";
import { store } from "../store";
import { setProductsPerCategory } from "../store/products-category";
import Providers from "./provider";
import NavComponent from "../components/nav";
import Footer from "../components/footer";
import FloatWhatsapp from "../components/float-whatsapp";


const IndexPage = async ():Promise<JSX.Element> => {

  const data: [CategoriesAmnesia,ProductsAmnesia] = await GetData([

    "https://cms.aipus.co/api/subcategories?populate=media&filters[category][id][$eq]=6",
    "https://cms.aipus.co/api/products?populate=media&pagination[page]=1&pagination[pageSize]=9&filters[subcategories][id][$eq]=4"

  ],config.cms_token).then((res:any) => res);



  store.dispatch(setProductsPerCategory({
    products: data[1],
    category:4

  }));

  
  return<>
    
    <Providers>
      <NavComponent categories={data[0]}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Products products={data[1]} />
      <Footer/>
      <FloatWhatsapp/>
    </Providers>

    
  
  </>

  

}
export default IndexPage
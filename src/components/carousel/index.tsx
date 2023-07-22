'use client'
import { useEffect } from "react"
import config from "../../config/config"

const Carousel = ():JSX.Element=>{

    useEffect(()=>{

        const aLinks = document.querySelectorAll('a[href^="#slide"]');
        aLinks.forEach((aLink)=>{
            aLink.addEventListener('mouseup', ()=>{
                window.scrollTo(0,0);
                setTimeout(()=> window.scrollTo(0,0),0);

            })

        })



    },[])

    return<section  id="#carousel" className="pt-28 w-screen " >
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt="Envio gratis en Amnesia tienda" loading="lazy" src={config.cms_domain+'/uploads/post2_descktop_da95591c81.webp'} className="w-full hidden md:block" />
                <img alt="Envio gratis en Amanesia tienda"  loading="lazy" src={config.cms_domain+'/uploads/post2_mobile_53345a750d.webp'} className="w-full block md:hidden" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="Promociones y descuents amnesia tienda" loading="lazy" src={config.cms_domain+'/uploads/post1_descktop_27af53f0a2.webp'} className="w-full hidden md:block" />
                <img alt="Promociones y descuentos amnesia tienda" loading="lazy" src={config.cms_domain+'/uploads/post1_mobile_14bd9a94d7.webp'} className="w-full block md:hidden" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img alt="Pagas con tu cuenta de mercado libre, en efectivo o desde tu banco de preferencia" loading="lazy" src={config.cms_domain+'/uploads/post3_descktop_d50247a709.webp'} className="w-full hidden md:block" />
                <img alt="Pagas con tu cuenta de mercado libre, en efectivo o desde tu banco de preferencia" loading="lazy" src={config.cms_domain+'/uploads/post3_mobile_1f998c8429.webp'} className="w-full block md:hidden" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </section>
}

export default Carousel
import config from "../../config/config"

type CardProductProps = {
    image:string,
    name:string,
    price:string | number,
    link_ml:string,
    link_whatsapp:string


}

const CardProduct = (props:CardProductProps):JSX.Element =>{

    return<>
        <div className="card w-[290px] h-[400px] bg-white shadow-md shadow-gray m-6 mb-4 cursor-pointer">
            <figure onClick={()=>window.open(props.link_ml)} className="w-[276px] h-[220px]">
                <img
                    className="h-[100%] w-[100%] object-contain" 
                    src={config.cms_domain+props.image}
                    alt={`Producto ${props.name}  amnesia tienda`}
                    loading="lazy"
                />
            </figure>
            <div className="card-body bg-white rounded-3xl p-4 h-[160px]">
                <h2 className="card-title text-black">
                    $ {new Intl.NumberFormat("es-CO").format(Math.ceil(parseInt(props.price as string)))} COP
                </h2>
                <p className="text-gray2 text-md w-[264px]">{props.name}</p>
                <div className=" flex justify-center w-[250px] ml-[-0px]">
                    <button onClick={()=>window.open(props.link_ml)} className="btn m-2 btn-secondary hover:bg-warning w-[53%] text-xs">VER PRODUCTO</button>
                    <button onClick={()=>window.open(props.link_whatsapp+"%20del%20producto%20"+props.name)} className="text-xs w-[43%] btn m-2 btn-success hover:text-white bg-gray text-gray2 border-gray">Whatsapp</button>
                </div>
            </div>
        </div>
       
    </>
}

export default CardProduct
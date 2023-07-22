import Image from "next/image"
import config from "../../config/config"

const SectionImg = ():JSX.Element => {

    return<section className="pt-20">
        <div className="w-screen pt-2 lg:pt-6">

            <Image
                src={`${config.cms_domain}/uploads/img_store_desktop_7d94661e32.webp`}
                width={1300}
                height={400}
                alt="logo"
                className='w-screen h-100 hidden md:block'
            />
            <Image
                src={`${config.cms_domain}/uploads/img_store_mobile_b43da42dd9.webp`}
                width={400}
                height={600}
                alt="logo"
                className='w-screen h-100 sm:block md:hidden'
            />
        </div>
    </section>
}

export default SectionImg;
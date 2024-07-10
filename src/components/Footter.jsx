import facebook from '../assets/img/png/facebook_logo.png'
import twitter from '../assets/img/png/twitter_logo.png'
import mail from '../assets/img/png/mail_logo.png'
import instgram from '../assets/img/png/instagram_logo.png'

const Footter = () => {
    return (
        <section className='bg-no-repeat bg-cover bg-center bg-footer-img'>
            <div className=" container max-w-[1140px] mx-auto">

                <div className="relative right-0 flex flex-col items-end justify-end pt-[94px] translate-y-12">
                    <span className=' pt-3'> <img src={facebook} alt="facebook" width={"30px"} height={"30px"} /></span>
                    <span className=' pt-3'> <img src={twitter} alt="twitter" width={"30px"} height={"30px"} /></span>
                    <span className=' pt-3'> <img src={mail} alt="mial" width={"30px"} height={"30px"} /></span>
                    <span className=' pt-3'> <img src={instgram} alt="instagram" width={"30px"} height={"30px"} /></span>
                </div>
                <p className='text-center font-poopins   text-sm font-normal text-white '>(c)2022 MARC JOACHIM HUBRICH
                </p>
                <p className='text-center font-poopins   text-sm font-normal pb-[95px]  text-white'>All Rights Reserved</p>
            </div>
        </section>
    )
}

export default Footter
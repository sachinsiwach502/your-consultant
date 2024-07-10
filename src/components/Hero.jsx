import Btn from '../components/Btn';
import Nav from '../components/Nav';
import phnCall from '../assets/img/png/phn_call.png';
import SmallBtn from '../components/SmallBtn';
import ellips from '../assets/img/png/hero_ellips.png'


const Hero = () => {
    return (
        <section className=" bg-no-repeat bg-cover bg-center lg:min-h-screen max-xxl:min-h-screen bg-hero-img flex flex-col max-4xl:relative">
            <Nav />
            <div className=' container max-w-[1140px] mx-auto flex-grow items-center justify-center flex flex-col 4xl:relative'>
                <span className=' absolute start-0 top-0'>
                    <img src={ellips} alt="ellips line" />
                </span>
                <div className='-mx-3 flex flex-wrap flex-row w-full'>
                    <div className=' px-3 md:w-1/2'>
                        <h3 className=' font-HelveticaNeue font-normal text-md text-orange-200 mb-0'>Marc joachim hubrich</h3>
                        <h1 className=' font-HelveticaNeue font-normal text-xxl text-black max-w-[657px] mb-0'>Now I let you go!</h1>
                        <p className=' mb-0 font-poopins font-normal text-sm opacity-70 text-black'>For women who do not want to be completely dragged down by <br /> a SEPARATION. <br />
                            How to let go of your EX so you can leave him behind
                            without <br /> having to run to a therapist right away.
                        </p>
                        <div className=' flex items-center gap-4 pt-8 '>
                            <div className=' max-md:hidden'><Btn /></div>
                            <div className=' max-md:block hidden'> <SmallBtn /></div>
                            <img src={phnCall} alt="phn call" width={'42px'} height={'42px'} />
                        </div>
                    </div>

                    <div className=' px-3 md:w-1/2 md:min-h-[524px] justify-end flex flex-col items-start max-md:items-end max-md:w-full max-md:mt-5'>
                        <div className=' flex items-start gap-8'>
                            <div className=' border-l-2 border-purpal ps-3'>
                                <p className=' uppercase font-HelveticaNeue  text-sm font-normal text-white'>Die wichtigsten</p>
                                <p className=' uppercase font-HelveticaNeue  text-sm font-normal text-white'>Aspekte einer </p>
                                <p className=' uppercase font-HelveticaNeue  text-sm font-normal text-white'>Trennung:</p>
                            </div>
                            <div className=''>
                                <div className=' flex gap-2 items-center'>
                                    <span className=' w-1 h-1 rounded-full  bg-white'></span>
                                    <p className='capitalize  font-poopins font-medium text-sm text-white'>physische Trennung</p>
                                </div>
                                <div className=' flex gap-2 items-center'>
                                    <span className=' w-1 h-1 rounded-full  bg-white'></span>
                                    <p className='capitalize  font-poopins font-medium text-sm text-white'>mentale Trennung
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Hero
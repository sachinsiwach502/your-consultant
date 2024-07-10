import flower from '../assets/img/webp/flower.webp';
import btnShdow from '../assets/img/png/btn_shdow_img.png';
import willGetLine from '../assets/img/png/willGet_line.png';
import right_ellpis from '../assets/img/png/willget_right_ellips.png';
import left_ellpis from '../assets/img/png/willget_left_ellips.png';


const WillGet = () => {
    return (
        <>
            <section className='max-4xl:relative'>
                <div className=' max-w-[2000px] mx-auto 4xl:relative'>
                    <span className=' absolute end-0 top-8'>
                        <img src={right_ellpis} alt="flower ellips" />
                    </span>
                    <span className=' absolute start-0 bottom-0'>
                        <img src={left_ellpis} alt=" flower ellips" />
                    </span>

                    <div className=" container max-w-[1000px] mx-auto pt-[122px] ">



                        <div className=' flex items-center'>
                            <div className=" flex items-center">
                                <div className=' flex flex-col'>
                                    <h1 className=" uppercase font-HelveticaNeue font-normal text-xl">what you </h1>
                                    <h1 className=" uppercase font-HelveticaNeue font-normal text-xl"><span className=" text-orange-200">will&nbsp;</span> get </h1>
                                </div>
                                <span className=' ps-2'> <img src={flower} alt=" flower" width={'224px'} height={'216px'} /></span>
                            </div>
                            <p className=' font-poopins font-normal text-sm border-l-2 ps-3  border-purpal max-w-[430px] ml-3'>I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>

                        </div>
                    </div>
                    <div className=' container max-w-[1140px] mx-auto relative'>
                        <div className=' absolute left-0'>
                            <img src={willGetLine} alt="line" width={'130px'} height={"588px"} />
                        </div>
                        <p className='text-black font-HelveticaNeue  text-lg text-center pt-12 pb-7'>In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
                    </div>
                    <div className=' container max-w-[1140px] mx-auto '>

                        <div className=' flex flex-row flex-wrap -mx-3 w-full'>
                            <div className=' lg:w-1/3 md:w-1/2 flex items-center justify-center bg-white hover:bg-skyblue min-h-[230px] h-full group/items ease-in-out duration-300'>
                                <p className=' px-[45px] font-poopins  text-sm font-normal text-black opacity-70 ease-in-out duration-300 group-hover/items:text-blue-200'>Why does your EX have to disappear from your life forever?
                                </p>
                            </div>
                            <div className=' lg:w-1/3 md:w-1/2 flex items-center justify-center bg-white hover:bg-skyblue min-h-[230px] h-full group/items ease-in-out duration-300'>
                                <p className=' px-[45px] font-poopins  text-sm font-normal text-black opacity-70 ease-in-out duration-300 group-hover/items:text-blue-200'>What should your everyday life as a single person look like now and how can you cope with the new challenges?
                                </p>
                            </div>
                            <div className=' lg:w-1/3 md:w-1/2 flex items-center justify-center bg-white hover:bg-skyblue min-h-[230px] h-full group/items ease-in-out duration-300'>
                                <p className=' px-[45px] font-poopins  text-sm font-normal text-black opacity-70 ease-in-out duration-300 group-hover/items:text-blue-200'>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?

                                </p>
                            </div>
                            <div className=' lg:w-1/3 md:w-1/2 flex items-center justify-center bg-white hover:bg-skyblue min-h-[230px] h-full group/items ease-in-out duration-300'>
                                <p className=' px-[45px] font-poopins  text-sm font-normal text-black opacity-70 ease-in-out duration-300 group-hover/items:text-blue-200'>Who are you without your EX?

                                </p>
                            </div>
                            <div className=' lg:w-1/3 md:w-1/2 flex items-center justify-center bg-white hover:bg-skyblue min-h-[230px] h-full group/items ease-in-out duration-300'>
                                <p className=' px-[45px] font-poopins  text-sm font-normal text-black opacity-70 ease-in-out duration-300 group-hover/items:text-blue-200'>What new dreams and hopes do you want to live?
                                </p>
                            </div>
                            <div className=' lg:w-1/3 md:w-1/2 flex items-center justify-center min-h-[230px] h-full'>
                                <button className=' flex gap-[6px] welgetBtn'>
                                    <img src={btnShdow} alt="btn shdow" />
                                    <p className=' font-inter font-medium text-sm  capitalize text-start bg-gradientBg fill-transparent bg-clip-text'>Book a non-binding initial consultation now</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WillGet
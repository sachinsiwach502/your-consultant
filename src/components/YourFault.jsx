import Btn from '../components/Btn';
import line_img from '../assets/img/png/fault_line_img.png';
import ellips from '../assets/img/png/your_fault_ellips.png';

const YourFault = () => {
    return (
        <>
            <section className=' pt-[161px] max-4xl:relative'>
                <div className='max-w-[2000px] mx-auto  4xl:relative'>
                    <span className='absolute end-0 top-0 -translate-y-[30%]'>
                        <img src={ellips} alt="ellips" />
                    </span>

                    <div className=' container max-w-[1140px] mx-auto relative'>
                        <span className=' absolute top-0 start-0 -translate-y-[90%]'>
                            <img src={line_img} alt="fault img" />
                        </span>
                        <div className='max-w-[900px] ml-auto'>
                            <div className=' -mx-3 flex flex-wrap flex-row justify-between'>
                                <div className=' md:w-1/2 px-3 max-md:flex items-center justify-center gap-3 '>
                                    <h1 className=' font-HelveticaNeue font-normal text-xxl flex items-start'>IT'S NOT</h1>
                                    <h1 className=' font-HelveticaNeue font-normal text-xxl flex justify-end'><span className=' text-orange-200'>YOUR</span>&nbsp;FAULT!</h1>
                                </div>
                                <div className=' md:w-5/12 px-3 '>
                                    <p className=' border-l-2 border-purpal ps-3 font-poopins text-sm  text-black md:max-w-[288px]'>It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                                </div>
                            </div>
                            <p className=' font-HelveticaNeue font-normal text-center text-black text-lg pt-[58px] pb-8'>How would you know when you are busy with completely different things at the moment:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-no-repeat bg-cover bg-center bg-your-fault'>
                <div className=" container max-w-[1000px] mx-auto">
                    <div className=" flex flex-wrap flex-row -mx-3 md:justify-end justify-center w-full">
                        <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 min-h-[162px] h-full bg-blue-50 flex backdrop-blur-[4px] hover:bg-blue-200 ease-in-out duration-300 w-full">
                            <p className=" px-[38px] font-poopins text-sm font-normal text-white flex items-center">Your self-esteem is in the basement.</p>
                        </div>
                        <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 min-h-[162px] h-full bg-blue-50 flex backdrop-blur-[4px] hover:bg-blue-200 ease-in-out duration-300 w-full">
                            <p className=" px-[38px] font-poopins text-sm font-normal text-white items-center flex ">You keep asking yourself what you did wrong.
                            </p>
                        </div>
                        <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 min-h-[162px] h-full bg-blue-50 flex backdrop-blur-[4px] hover:bg-blue-200 ease-in-out duration-300 w-full">
                            <p className=" px-[38px] font-poopins text-sm font-normal text-white flex items-center">The feeling of helplessness is your constant companion.</p>
                        </div>
                    </div>
                    <div className=" flex flex-wrap flex-row -mx-3 md:justify-start justify-center mt-8 w-full">
                        <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 min-h-[162px] h-full bg-blue-50 flex backdrop-blur-[4px] hover:bg-blue-200 ease-in-out duration-300 w-full">
                            <p className=" px-[38px] font-poopins text-sm font-normal text-white flex items-center">You spend the nights alone and lonely.
                            </p>
                        </div>
                        <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 min-h-[162px] h-full bg-blue-50 flex backdrop-blur-[4px] hover:bg-blue-200 ease-in-out duration-300 w-full">
                            <p className=" px-[38px] font-poopins text-sm font-normal text-white items-center flex">You have stopped going out and spend the time crying in your room.
                            </p>
                        </div>
                        <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 min-h-[162px] h-full bg-blue-50 flex backdrop-blur-[4px] hover:bg-blue-200 ease-in-out duration-300 w-full">
                            <p className=" px-[38px] font-poopins text-sm font-normal text-white flex items-center">An emotional chaos is raging inside you.</p>
                        </div>
                    </div>
                </div>

            </section>
            <div className=" container max-w-[1140px] mx-auto">
                <p className=" font-poopins font-normal text-sm  text-black pt-12 pb-5 text-center">You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
                <div className=" flex items-center justify-center">
                    <Btn />
                </div>
            </div>
        </>
    )
}

export default YourFault
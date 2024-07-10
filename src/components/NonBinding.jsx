import Btn from "./Btn";
import SmallBtn from "./SmallBtn";

const NonBinding = () => {
    return (
        <>
            <section className="bg-blue-30">
                <div className=" container max-w-[1140px] mx-auto pt-[71px] pb-[59px]">
                    <div className=" flex flex-wrap flex-row -mx-3 items-center justify-between">
                        <div className=" md:w-1/2 px-3">
                            <h1 className=" font-HelveticaNeue font-normal text-xl text-black uppercase">Request your </h1>
                            <h1 className=" font-HelveticaNeue font-normal text-xl text-black uppercase"><span className=" text-orange-200">non-binding </span> strategy</h1>
                            <h1 className=" font-HelveticaNeue font-normal text-xl text-black uppercase">meeting now! </h1>
                        </div>
                        <div className=" px-3 md:w-5/12">
                            <p className=" font-poopins text-sm text-black font-normal border-l-2 border-purpal ps-3">Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics:</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-no-repeat bg-cover bg-center bg-binding-img">
                <div className=" container max-w-[1140px] mx-auto">
                    <div className="flex items-center justify-center pt-[111px] max-md:flex-wrap">
                        <p className="min-h-[200px] py-[61px] px-[38px] bg-white-100 font-poopins font-normal text-sm text-white max-w-[250px] hover:bg-blue-200 ease-in-out duration-300" >
                            How do I let go of my EX so I can finally leave him behind?
                        </p>
                        <p className=" min-h-[200px] py-[61px] px-[38px] bg-white-100 font-poopins font-normal text-sm text-white max-w-[250px] hover:bg-blue-200 ease-in-out duration-300" >
                            How does the divorce process work?
                        </p>
                        <p className="min-h-[200px] py-[61px] px-[38px] bg-white-100 font-poopins font-normal text-sm text-white max-w-[250px] hover:bg-blue-200 ease-in-out duration-300" >
                            Do I need a lawyer?
                        </p>
                    </div>
                    <div className="flex items-center justify-center mt-9 max-md:flex-wrap">
                        <p className="min-h-[200px] py-[61px] px-[38px] bg-white-100 font-poopins font-normal text-sm text-white max-w-[250px] hover:bg-blue-200 ease-in-out duration-300 h-full" >
                            How much will the divorce cost?
                        </p>
                        <p className=" min-h-[200px] py-[61px] px-[38px] bg-white-100 font-poopins font-normal text-sm text-white max-w-[250px] hover:bg-blue-200 ease-in-out duration-300 h-full" >
                            What will happen to my children?
                        </p>
                        <p className="min-h-[200px] py-[61px] px-[38px] bg-white-100 font-poopins font-normal text-sm text-white max-w-[250px] hover:bg-blue-200 ease-in-out duration-300 h-full" >
                            What does my future as a single person look like now?
                        </p>
                        <p className="min-h-[200px] py-[61px] px-[38px] bg-white-100 font-poopins font-normal text-sm text-white max-w-[250px] hover:bg-blue-200 ease-in-out duration-300 h-full" >
                            How do I rebuild my self-esteem?
                        </p>
                    </div>
                    <div className=' pt-[58px] pb-[186px] items-center justify-center hidden md:flex'>
                        <Btn />
                    </div>
                    <div className=' pt-[58px] pb-[186px] items-center justify-center flex md:hidden'>
                        <SmallBtn />
                    </div>
                </div>
            </section>
        </>
    )
}

export default NonBinding
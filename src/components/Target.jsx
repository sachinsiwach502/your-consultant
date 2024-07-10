
const Target = () => {
    return (
        <>
            <section className=" bg-blue-50">
                <div className=" container max-w-[1140px] mx-auto pt-12 pb-14">
                    <div className=" -mx-3 flex flex-wrap flex-row justify-between">
                        <div className="px-3 w-1/2 flex justify-end">
                            <h1 className="uppercase text-xl font-HelveticaNeue font-normal"><span className=" text-orange-200">TARGET</span> group</h1>
                        </div>
                        <div className=" px-3 w-5/12">
                            <p className=" max-w-[350px] font-poopins text-sm border-l-2 border-purpal ps-3">The coaching is aimed at married women who have already separated or are thinking of separating.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-target-img bg-no-repeat bg-center bg-cover relative z-20">
                <div className=" container max-w-[1140px] mx-auto">
                    <div className=" pt-[108px]">
                        <div className=" border border-white border-opacity-15 max-w-[382px] bg-white-100">
                            <p className=" font-poopins  text-sm font-normal pt-10 pb-11 pe-9 ps-8 text-white">You have separated and have the feeling that you can never be happy again and that you will be alone forever.</p>
                        </div>
                    </div>
                    <div className=" border border-white border-opacity-15 max-w-[382px] bg-white-100 mt-[32px] ">
                        <p className=" font-poopins  text-sm font-normal pt-10 pb-11 pe-9 ps-8 text-white">How are you supposed to be able to let go of someone who is so entangled with your life? It's impossible, isn't it?</p>
                    </div>
                    <div className="flex justify-end relative translate-y-6">
                        <div className=" border border-white border-opacity-15 max-w-[338px] bg-blue-100">
                            <p className=" font-poopins  text-sm font-normal pt-[65px] pb-[77px] pe-7 ps-10 text-white">How are you supposed to be able to let go of someone who is so entangled with your life? It's impossible, isn't it?</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Target
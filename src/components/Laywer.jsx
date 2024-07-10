import lawyer from '../assets/img/webp/Lawyer_img.webp';
import aboutLine from '../assets/img/png/about_line_img.png';
import arrow_btn from '../assets/img/png/btn_arrow.png';
import ellips from '../assets/img/png/Lawyer_ellips.png'

const Laywer = () => {
    return (
        <section className=' pb-[202px]'>
            <div className=' container max-w-[1100px] mx-auto'>
                <div className=' pt-3 pb-[52px]'> <img src={aboutLine} alt="aboutline" /></div>
                <div className=' flex flex-row flex-wrap -mx-3'>
                    <div className=' md:w-1/2 px-3'>
                        <img src={lawyer} alt="lawyer img" />
                    </div>
                    <div className=' md:w-1/2 px-3 relative'>
                        <h1 className=' font-HelveticaNeue font-normal text-xl'>LAWYER <span className=' text-orange-200'> & </span> DIVORCE <br /> COACH</h1>
                        <p className=' font-normal font-HelveticaNeue text-xlg uppercase'> <span className='text-orange-200'>M</span>arc <span className=' text-orange-200'>J</span>oachim <span className=' text-orange-200'>H</span>ubrich</p>
                        <p className=' font-HelveticaNeue  font-normal text-lg text-black pt-7'>About the mindset agency coach</p>
                        <p className=' font-poopins text-sm opacity-70 text-black pt-3'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                        <button className='flex items-center arrow_btn gap-3 mt-8'>
                            <p className='bg-gradientBg fill-transparent bg-clip-text font-inter font-medium'>Learn more about the agency</p>
                            <img src={arrow_btn} alt="arrow" width={"39px"} />
                        </button>
                        <span className='absolute end-0 bottom-0'>
                            <img src={ellips} alt="line ellips" />
                        </span>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Laywer
import analysis from '../assets/img/png/Analysis_img.png'
import ellips from '../assets/img/png/mindset_line_ellips.png'
import Btn from '../components/Btn';
import Mindsetslider from './Mindsetslider';

const Mindset = () => {
    return (
        <section className=' relative'>
            <span className=' absolute top-0 left-0 -translate-y-[60%] z-10'>
                <img src={ellips} alt="line ellips" />
            </span>
            <div className=" container max-w-[1140px] mx-auto pb-[186px]">
                <div className=' flex justify-end pb-7 pt-2'>
                    <img src={analysis} alt="analysisi img " width={'204px'} height={'265px'} />
                </div>
                <div className="flex flex-wrap flex-row items-center w-full">
                    <div className=" w-1/2 px-3">
                        <h3 className=" font-HelveticaNeue font-normal text-black text-xxlg">THE FOUR PHASES OF</h3>
                        <h1 className=" text-xl font-normal font-HelveticaNeue">
                            SEPARATION <br />
                            <span className="text-orange-200"> MINDSET </span>
                        </h1>
                        <p className="font-poopins text-sm font-normal text-black opacity-70 pt-5 max-w-[500px]">There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                        <div className=' pt-9'>
                            <Btn />
                        </div>
                    </div>
                    <div className=' w-1/2 px-3'>
                        <div className='bg-slick-slider bg-no-repeat bg-center bg-cover h-[448px]'>
                            <Mindsetslider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mindset
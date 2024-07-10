
import steps_line from '../assets/img/png/take_steps_line.png';
import client_line from '../assets/img/png/client_line_2.png'
import ClientSlider from './ClientSlider';

const OurClients = () => {
    return (
        <section>
            <div className=" container max-w-[1140px] mx-auto">
                <span className=' relative flex justify-end translate-y-10'>
                    <img src={client_line} alt="line img" />
                </span>

                <h1 className=" font-HelveticaNeue font-normal text-xl uppercase text-center">What our <span className="text-orange-200"> clients </span> say</h1>
                {/* <ClientSlider /> */}
                <span><img src={steps_line} alt="steps" /></span>
            </div>
        </section>
    )
}

export default OurClients
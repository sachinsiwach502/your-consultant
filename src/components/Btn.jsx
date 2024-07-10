import btn_shdow from '../assets/img/png/btn_shdow_img.png'

const Btn = () => {
    return (

        <button className='consultNow flex items-center gap-1 bg-white'>
            <img src={btn_shdow} alt="btn shdow" />
            <p className='bg-gradientBg fill-transparent bg-clip-text font-inter font-medium'>Book a non-binding initial consultation now</p>
        </button>

    )
}

export default Btn
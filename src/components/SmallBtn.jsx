import btn_shdow from '../assets/img/png/btn_shdow_img.png'

const SmallBtn = () => {
    return (
        <div> <button className='consultNow flex items-center gap-1 bg-white'>
            <img src={btn_shdow} alt="btn shdow" />
            <p className='bg-gradientBg fill-transparent bg-clip-text font-inter font-medium'>Book a non-binding....</p>
        </button></div>
    )
}

export default SmallBtn
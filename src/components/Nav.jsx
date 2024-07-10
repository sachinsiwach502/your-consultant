
const Nav = () => {
    return (
        <div className=" container max-w-[1140px] mx-auto">
            <nav className="flex justify-end items-center pt-6">
                <ul className="gap-10 flex items-center">
                    <li>
                        <a href="#" className="font-halvitica text-[] opacity-70 font-normal text-white">Benifits</a>
                    </li>
                    <li>
                        <a href="#" className=" font-halvitica opacity-70 font-normal text-white">Testimonials</a>
                    </li>
                    <li>
                        <button className=" bg-gradient-to-r from-gradient-blue-200 to-gradient-blue-100 px-7 py-4  flex items-center justify-center size-full text-white font-medium font-inter">Book consultation now</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
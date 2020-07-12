import Link from 'next/link'

const NavBar = () => {
    return(
        <div className="relative bg-white mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="lg:w-0 lg:flex-1">
                        <Link href='/'>
                            <a className="flex">
                                <img className="h-8 w-auto sm:h-10" src={'./logo.png'} alt="Space" />
                            </a>
                        </Link>
                    </div>
                <nav className="md:flex space-x-10">
                    <Link href='/'>
                        <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Home
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            About
                        </a>
                    </Link>
                </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
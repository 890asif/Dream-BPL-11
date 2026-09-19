import Logo from '../assets/logo.png';
import { FaCoins } from "react-icons/fa";


const Nav = () => {
    return (
         <nav className='sticky top-0 z-50 bg-gray-400'>
           <div className='max-w-7xl mx-auto px-4 sm:px-6 py-2'>
            
            <div className='flex items-center justify-between'>
             <img src={Logo} alt="photo" className='w-20 sm:w-24 md:w-28'/>

            <div className='hidden md:flex gap-5 lg:gap-8 items-center font-bold text-white'>
                <a className='hover:text-[#FF6900] transition' href="">Home</a>
                <a className='hover:text-[#FF6900] transition' href="">Fixture</a>
                <a className='hover:text-[#FF6900] transition' href="">Players</a>
                <a className='hover:text-[#FF6900] transition' href="">Schedule</a>
            </div>

            <div className='flex gap-2 items-center  bg-white px-4 py-2 sm:px-4 rounded-2xl border border-gray-300 font-semibold text-sm sm:text-base'>
                <h3>500 Coin</h3>
                <FaCoins className='text-yellow-600 text-lg sm:text-xl' />
        
            </div>
           </div>
           </div>
        </nav>
           
    );
};

export default Nav;
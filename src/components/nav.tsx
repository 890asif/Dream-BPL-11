import Logo from '../assets/logo.png';
import { FaCoins } from "react-icons/fa";


const Nav = () => {
    return (
         <nav className=' bg-gray-600'>
           <div className='flex items-center justify-between max-w-7xl mx-auto px-6'>
             <img src={Logo} alt="photo" className='w-25 ml-10'/>

            <ul className='flex gap-6 items-center font-bold text-gray-300 ml-100'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Players</li>
                <li>Schedule</li>
            </ul>

            <div className='flex gap-3 items-center ml-auto bg-white px-4 py-2 rounded-2xl border border-gray-300 font-semibold'>
                <h3>500  Coin</h3>
                <FaCoins className='flex text-yellow-600 text-xl' />
        
            </div>
           </div>
           
        </nav>
    );
};

export default Nav;
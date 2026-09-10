import Logo from '../assets/logo.png';

const Nav = () => {
    return (
         <nav className='bg-gray-300'>
           <div className='flex justify-between max-w-4xl mx-auto'>
             <img src={Logo} alt="photo" className='w-30'/>

            <ul className='flex gap-6 items-center font-bold text-gray-700'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Players</li>
                <li>Schedule</li>
            </ul>
           </div>
        </nav>
    );
};

export default Nav;
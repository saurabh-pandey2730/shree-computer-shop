import {useState} from 'react';
import promoil from './assets/Header/promoil.png';
import logo from '../../assets/logo-scs-.png' 
import Button from './Button';
import {IoMenuOutline, IoCloseOutline} from 'react-icons/io5';
import {navItems} from './data';

 const Header = ({colorDeep}) => {
  const [openMenu, setOpenMenu] = useState(false);
  
    return (
    <header className='flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 w-full md:px-16 flex-col gap-4 px-4 '>
      <div className='flex flex-row items-center justify-between lg:w-auto '>
        <div className = {`flex justify-center items-center  h-18 w-18 rounded-lg  `} style={{borderColor: `${colorDeep}`}}>
          <img src={logo} alt="Shree Computer Shop" className="w-full max-w-[120px]" width="50" height="50"/>
        </div>
        <button className="lg:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpenMenu(prev => !prev)}>
            {openMenu ? <IoCloseOutline className='w-7 h-7'/> : <IoMenuOutline className='w-7 h-7' />}
        </button>
      </div>
      <nav className={`flex lg:items-center lg:justify-end lg:flex-row pb-4 flex-col lg:pb-0 gap-4 origin-top duration-300 ${openMenu ? 'h-full scale-y-1' : 'h-0 transform lg:transform-none scale-y-0'}`} >
        <ul className='flex lg:flex-row lg:items-center lg:gap-0 flex-col justify-center gap-4 list-none'>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                onClick={() => setOpenMenu(false)}
                className={`lg:px-4 py-2 lg:mt-8 md:text-base bg-transparent lg:ml-4 mt-2 text-sm hover:text-gray-900 focus:outline-none focus:shadow-outline`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button 
          className={`px-10 py-3 md:text-base text-center text-sm`}
          type='button'
          text='Get Started'
          style={{backgroundColor: `${colorDeep}`}}
        />
      </nav>
    </header>
  )
}

export default Header
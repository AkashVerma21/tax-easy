import React,{useState} from 'react'
import Classes from './header.module.scss';
import { isMobile } from 'react-device-detect';
import HamburgerIcon from '../../../utils/images/hamburger.png'
import CrossHamburgerIcon from '../../../utils/images/cross-hamburger.png'
import { Link } from 'react-router-dom';
import  TaxEasyMainLogo  from '../../../utils/images/TaxEasyMainLogo.svg';
import Background from '../../../utils/images/OfferingBackground.svg'

const HeaderComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(true)
  const [active, setActive] = useState('home')


  return (
    // <div style={{backgroundImage: `url(${Background})`, backgroundSize: '100%', height: '700px'}}>

    // </div>
    <div className={Classes.headerMainContainer}>
          <div className={Classes.header}>    
              <div className={Classes.logo}>
                  <img src={TaxEasyMainLogo} alt={"tax-easy-logo"}/>
              </div>
              {isMobile ?
              <div>
                <img src={toggleMenu? HamburgerIcon : CrossHamburgerIcon} alt={'hamburger-icon'} className={toggleMenu ? Classes.hamburger : Classes.crossHamburger } onClick={()=>{setToggleMenu(!toggleMenu)}}/>
                <ul className={toggleMenu ? Classes.headerMobileListClose : Classes.headerMobileList}>
                      <Link to='/'><li onClick={()=>setActive('home')} className={active==='home'? Classes.active :''}>Home</li></Link>
                      {/* <Link><li >Digital Billing</li></Link> */}
                      {/* <Link><li>Digital Office</li></Link> */}
                      <Link to='/gst'><li onClick={()=>setActive('gst')} className={active==='gst'?Classes.active:''}>GST</li></Link>
                      <Link to='/itr'><li onClick={()=>setActive('itr')} className={active==='itr'?Classes.active:''}>ITR Filing</li></Link>
                      {/* <Link><li>Blogs</li></Link> */}
                      <Link to='/company-registration'><li onClick={()=>setActive('home')} className={active==='companyRegistration'? Classes.active:''}>Register your Company</li></Link>
                  </ul>
              </div>:
              <div className={Classes.headerListContainer}>
                  <ul className={Classes.headerList}>
                      <Link to='/'><li onClick={()=>setActive('home')} className={active==='home'? Classes.active :''}>Home</li></Link>
                      {/* <Link><li>Digital Billing</li></Link>
                      <Link><li>Digital Office</li></Link> */}
                      <Link to='/gst'><li onClick={()=>setActive('gst')} className={active==='gst'?Classes.active:''}>GST</li></Link>
                      <Link to='/itr'><li onClick={()=>setActive('itr')} className={active==='itr'?Classes.active:''}>ITR Filing</li></Link>
                      {/* <Link><li>Blogs</li></Link> */}
                      <Link to='/company-registration'><li onClick={()=>setActive('companyRegistration')} className={active==='companyRegistration'? Classes.active:''}>Register your Company</li></Link>
                  </ul>
              </div> }
          </div>
    </div>
  )
}

export default HeaderComponent
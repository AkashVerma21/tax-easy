import React,{useEffect, useState} from 'react'
import Classes from './headerNew.module.scss';
import { isMobile } from 'react-device-detect';
import HamburgerIcon from '../../../utils/images/hamburger.png'
import CrossHamburgerIcon from '../../../utils/images/cross-hamburger.png'
import { Link, useParams } from 'react-router-dom';
import  TaxEasyMainLogo  from '../../../utils/images/TaxEasyMainLogo.svg';
import TaxEasyMobileMainLogo from '../../../utils/images/taxEasyMobileMainLogo.png'
import {MdWifiCalling3} from 'react-icons/md'
import { HeaderData } from '../../../utils/constants/constantData';
import classNames from 'classnames';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import { itrFilingInCitiesUpdate } from '../../../utils/utilities/itrFilingInCitiesSlice';

const HeaderNewComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(true)
  const pathName = window?.location?.pathname ?? '/'
  const [active, setActive] = useState(pathName??'/')
  const topHeadingData = useSelector(store=>store.itrFilingInCities.data)
  const isHeaderData = HeaderData.find((info)=>info==active)
  const params = useParams()
  const dispatch = useDispatch()
  const [text, setText] = useState(topHeadingData)

  useEffect(()=>{
    setText(params?.id ?? topHeadingData)
  },[params?.id, topHeadingData])
  // console.log(params, isHeaderData)

  const handleMobileRoute = (path)=>{
    setActive(path)
    setToggleMenu(!toggleMenu)
  }

  return (
    
    <div className={Classes.headerMainContainer} style={{height: active==='/admin'? '80px': ''}}>
          <div className={Classes.header}>    
              <div className={Classes.logo}>
                  <Link to='/'><img src={isMobile? TaxEasyMobileMainLogo : TaxEasyMainLogo} alt={"tax-easy-logo"} onClick={()=>handleMobileRoute('/')}/></Link>
              </div>
              {isMobile ?
              <div>
                <img src={toggleMenu? HamburgerIcon : CrossHamburgerIcon} alt={'hamburger-icon'} className={toggleMenu ? Classes.hamburger : Classes.crossHamburger } onClick={()=>{setToggleMenu(!toggleMenu)}}/>
                <ul className={toggleMenu ? Classes.headerMobileListClose : Classes.headerMobileList}>
                      <div><img src={toggleMenu? HamburgerIcon : CrossHamburgerIcon} alt={'hamburger-icon'} className={toggleMenu ? Classes.hamburger : Classes.crossHamburger } onClick={()=>{setToggleMenu(!toggleMenu)}}/></div>
                      <Link to='/' key='/'><li onClick={()=>{handleMobileRoute('/'); dispatch(itrFilingInCitiesUpdate('7+ YEARS OF EXCELLANCE'))}} className={active==='/'? Classes.active :''}>Home</li></Link>
                      <Link to='/company-registration' key='/company'><li onClick={()=>handleMobileRoute('/company-registration')} className={active==='/company-registration'? Classes.active:''}>REGISTER COMPANY</li></Link>
                      <Link to='/gst' key='/gst'><li onClick={()=>handleMobileRoute('/gst')} className={active==='/gst'?Classes.active:''}>GST</li></Link>
                      <Link to='/itr' key='/itr'><li onClick={()=>handleMobileRoute('/itr')} className={active==='/itr'?Classes.active:''}>ITR Filing</li></Link>
                      <Link to='/contact-us' key='/contact'><li onClick={()=>handleMobileRoute('/contact-us')} className={active==='/contact-us'?Classes.active:''}>CONTACT US</li></Link>   
                      <a target='_blank' rel="noreferrer"  href='tel:+91-9936818000' key='mobile'><li  className={classNames(Classes.mobile)}><MdWifiCalling3/><span>9936818000</span></li></a>      
                  </ul>
              </div>:
              <div className={Classes.headerListContainer}>
                  <ul className={Classes.headerList}>
                      <Link to='/' key='/'><li onClick={()=>{setActive('/'); dispatch(itrFilingInCitiesUpdate('7+ YEARS OF EXCELLANCE'))}} className={active==='/'? Classes.active :''}>HOME</li></Link>
                      <Link to='/company-registration' key='/company'><li onClick={()=>setActive('/company-registration')} className={active==='/company-registration'? Classes.active:''}>REGISTER COMPANY</li></Link>
                      <Link to='/itr' key='/itr'><li onClick={()=>setActive('/itr')} className={active==='/itr'?Classes.active:''}>ITR FILING</li></Link>
                      <Link to='/gst' key='/gst'><li onClick={()=>setActive('/gst')} className={active==='/gst'?Classes.active:''}>GST</li></Link>
                      <Link to='/contact-us' key='/contact'><li onClick={()=>setActive('/contact-us')} className={active==='/contact-us'?Classes.active:''}>CONTACT US</li></Link>   
                      <a target='_blank' rel="noreferrer" href='tel:+91-9936818000' key='mobile'><li  className={classNames(Classes.mobile)}><MdWifiCalling3/><span>9936818000</span></li></a>      
                  </ul>
              </div> }
          </div>
          {isHeaderData && HeaderData?.map((info, index)=>(
            <>
            {info?.path===active && active !== '/admin' && <div key={`header-section-${index}`} className={Classes.headerTextSection}>
                    <div className={Classes.headerSection2}>
                          <p className={Classes.description}>{active!=='/company-registration'? <span className={topHeadingData!=='7+ YEARS OF EXCELLANCE'? Classes.headingData:''}>{topHeadingData}</span> : '7+ YEARS OF EXCELLANCE'}</p>
                          <h1 className={Classes.heading}><Typewriter
                              style={{fontSize: '40px'}}
                              options={{
                                strings: [info?.section1?.heading1],
                                autoStart: true,
                                loop: true,
                              }}
                            /></h1>
                          {info?.section1?.heading2 &&  <h1 className={Classes.heading}>{info?.section1?.heading2}</h1>}
                    </div>
                    <div className={Classes.headerSection3}>
                          <h2 className={Classes.heading}>{info?.section2?.heading}</h2>
                          <p className={Classes.description1}>{info?.section2?.description1}</p>
                          <p className={Classes.description2}>{info?.section2?.description2}</p>
                          <p className={Classes.description3}>{info?.section2?.description3}</p>
                          <a target='_blank' rel="noreferrer" href='tel:+91-9936818000' className={Classes.button}>CALL NOW</a>
                      </div>
              </div>}
            </>
          ))}   

          {!isHeaderData &&  
          <>
          <div key={`header-section`} className={Classes.headerTextSection}>
                  <div className={Classes.headerSection2}>
                        <p className={Classes.description}>{active!=='/company-registration'? <span className={text!=='7+ YEARS OF EXCELLANCE'? Classes.headingData:''}>{text?.split("-")?.join(" ")}</span> : '7+ YEARS OF EXCELLANCE'}</p>
                        <h1 className={Classes.heading}><Typewriter
                            style={{fontSize: '40px'}}
                            options={{
                              strings: [HeaderData[0]?.section1?.heading1],
                              autoStart: true,
                              loop: true,
                            }}
                          /></h1>
                        {HeaderData[0]?.section1?.heading2 &&  <h1 className={Classes.heading}>{HeaderData[0]?.section1?.heading2}</h1>}
                  </div>
                  <div className={Classes.headerSection3}>
                        <h2 className={Classes.heading}>{HeaderData[0]?.section2?.heading}</h2>
                        <p className={Classes.description1}>{HeaderData[0]?.section2?.description1}</p>
                        <p className={Classes.description2}>{HeaderData[0]?.section2?.description2}</p>
                        <p className={Classes.description3}>{HeaderData[0]?.section2?.description3}</p>
                        <a target='_blank' rel="noreferrer" href='tel:+91-9936818000' className={Classes.button}>CALL NOW</a>
                    </div>
                    </div>
            </>
          }       
    </div>
  )
}

export default HeaderNewComponent
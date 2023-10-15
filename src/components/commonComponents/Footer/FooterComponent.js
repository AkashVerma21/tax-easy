import React from 'react'
import classNames from 'classnames'
import Classes from './footer.module.scss'
import WhatsappIcon from '../../../utils/images/Whatsapp.png'
import {FaFacebookF} from 'react-icons/fa'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import {BsYoutube, BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import { Link } from 'react-router-dom'


const FooterComponent = () => {
  return (
    <div className={Classes.footerMainContainer}>
        <FooterLinks/>
        <p className={Classes.footerLastContainer}>&#169; 2020 - 2023 TaxEasy. All Rights Reserved.</p>
    </div>
  )
}

export default FooterComponent

const FooterLinks = ()=>{
    return(
        <div className={Classes.footerLinkMainSection}>
            <div className={classNames(Classes.footerLinks, Classes.firstContainer)}>
                <h2 className={Classes.sectionHeading}>CONTACT US</h2>
                <ul className={Classes.sectionDescription}>
                    <li>info@thetaxeasy.com</li>
                    <li><span style={{fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginRight: '10px'}}>Phone:</span>9936818000, 9310658474</li>
                    <li className={Classes.footerWhatsapp}><Link target='_blank' to='https://api.whatsapp.com/send?phone=9936818000'><img src={WhatsappIcon} alt='whatsapp-icon'/> Whatsapp Us</Link></li>
                    <li >Follow Us
                        <ul className={Classes.followIcons}>
                            <li><Link><FaFacebookF/></Link></li>
                            <li><Link><AiOutlineGooglePlus/></Link></li>
                            <li><Link><BsYoutube/></Link></li>
                            <li><Link><BsTwitter/></Link></li>
                            <li><Link><FiInstagram/></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={Classes.footerLinks}>
            <h2 className={Classes.sectionHeading}>BUSINESS REGISTRATION</h2>
            <ul className={Classes.sectionDescription}>
                    <li>Sole Proprietorship Registration</li>
                    <li>Partnership Firm Registration</li>
                    <li>Private Limited Company Registration</li>
                    <li>LLP Registration</li>
                    <li>One Person Company Registration</li>
                    <li>Startup Registration</li>
                    <li>Section 8 Company Registration</li>
                    <li>Farmer Producer Company Registration</li>
                    <li>Public Limited Company Registration</li>
                    <li>Nidhi Company Registration</li>
                </ul>
            </div>
            <div className={Classes.footerLinks}>
            <h2 className={Classes.sectionHeading}>GST SOLUTIONS</h2>
            <ul className={Classes.sectionDescription}>
                    <li>GST Registration</li>
                    <li>GST Return Filing Solutions</li>
                    <li>GST Amendment(s)</li>
                    <li>E-Commerce Seller Returns</li>
                    <li>GST Revocation</li>
                    <li>GST LUT Filing</li>
                    <li>GST Annual Return (GSTR 9)</li>
                    <li>GST Annual Return (GSTR 9C)</li>
                    <li>GST Billing Solutions</li>
                    <li>GST E-Invoicing Solutions</li>
                </ul>
            </div>
            <div className={classNames(Classes.footerLinks, Classes.trendingBlogMainContainer)}>
            <h2 className={Classes.sectionHeading}>ANNUAL COMPLIANCES</h2>
            <ul className={classNames(Classes.sectionDescription, Classes.trendingBlogSection)}>
                    <li>Income Tax Return (ITR) Filing</li>
                    <li>TDS Returns Filing</li>
                    <li>Company Annual Compliances</li>
                    <li>LLP Annual Compliances</li>
                    <li>ESIC Return Filing</li>
                    <li>EPF Return Filing</li>
                    <li>Director Annual Compliances</li>
                    <li>Company Amendment(s)</li>
                    <li>Return of Deposits</li>
                    <li>Other Annual Compliances</li>
                </ul>
            </div>
            <div className={classNames(Classes.footerLinks, Classes.footerFifthSection)}>
            <h2 className={Classes.sectionHeading}>OTHER REGISTRATIONS</h2>
            <ul className={classNames(Classes.sectionDescription, Classes.footerFifthSectionDescription)}>
                    <li>TDS Registration</li>
                    <li>Payroll Processing</li>
                    <li>Startup India Registration (DPIIT)</li>
                    <li>Import Export Code (IEC)</li>
                    <li>Udyam Registration</li>
                    <li>Trademark Registration</li>
                    <li>FSSAI Registration</li>
                    <li>ISO Certifications</li>
                    <li>Digital Signature Certificate (DSC)</li>
                    <li>Other Registrations</li>
                </ul>
            </div>
        </div>
    )
}


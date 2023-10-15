import React from 'react'
import classNames from 'classnames'
import Classes from './contactUs.module.scss'
import Youtube from '../../../utils/images/Youtube.png'
import Facebook from '../../../utils/images/Facebook.png'
import Instagram from '../../../utils/images/Instagram.png'
import Twitter from '../../../utils/images/Twitter.png'
import LinkedIn from '../../../utils/images/Linkedin.png'
import Whatsapp from '../../../utils/images/Whatsapp.png'


const ContactUs = ({stepInfo}) => {
    return (
        <div className={Classes.contactMainContainer}>
            <div className={Classes.contactLeftContainer}>
                <div className={Classes.conatctInfo}>
                <h2 className={Classes.contactHeading}>Contact Us</h2>
                <p className={Classes.contactDescription}>Get in Touch With Our Team of Experts Right Now !</p>
                <p className={Classes.contactDescription}>Get free Consltation by Experts.</p>
                </div>
                <div className={Classes.contactInfo}>
                    <p className={Classes.mobile}>+91 9936818000, +91 9310658474</p>
                    <p className={Classes.mail}>info@thetaxeasy.com</p>
                    <ul className={Classes.followIcons}>
                        <li><a target='_blank' rel="noreferrer" href='https://www.youtube.com/@TaxEasy2017'><img src={Youtube} alt='youtube'/></a></li>
                        <li><a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100076207151621&mibextid=LQQJ4d'><img src={Facebook} alt='facebook'/></a></li>
                        <li><a target='_blank' rel="noreferrer" href='https://www.instagram.com/taxeasy_in/'><img src={Instagram} alt='Instagram'/></a></li>
                        <li><a target='_blank' rel="noreferrer" href='https://twitter.com/Taxeasy_in'><img src={Twitter} alt='Twitter'/></a></li>
                        <li><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/company/taxeasy-solutions-pvt-ltd/'><img src={LinkedIn} alt='linkdin' style={{backgroundColor: '#fff', borderRadius: '50%'}}/></a></li>
                        <li><a target='_blank' rel="noreferrer" href='https://api.whatsapp.com/send?phone=9310658474'><img src={Whatsapp} alt='whatsapp'/></a></li>
                    </ul>
                </div>
            </div>
            <ContactUsITRRightSection info={stepInfo}/>
        </div>
    )
}

export default ContactUs

const ContactUsITRRightSection = ({info})=>{
    return(
        <div className={Classes.contactStepMainContainer}>
            {info?.map((info, index)=>(
                <div className={Classes.stepContainer} key={`contact-step-${index}`}>
                    <img src={info?.image} alt={`conatct-${info?.title}`} />
                    <h5 className={classNames(Classes.heading,index === 1 ? Classes.blue : '')}>{info?.title} :</h5>
                    <div className={Classes.description}>{info?.description}</div>
                </div>
            ))}
        </div>
    )
}


import React from 'react'
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Classes from './footer.module.scss'
import WhatsappIcon from '../../../utils/images/Whatsapp.png'
import Youtube from '../../../utils/images/Youtube.png'
import Facebook from '../../../utils/images/Facebook.png'
import Instagram from '../../../utils/images/Instagram.png'
import Twitter from '../../../utils/images/Twitter.png'
import LinkedIn from '../../../utils/images/Linkedin.png'
import { FooterData } from '../../../utils/constants/constantData';
import FooterPaymentImages from '../../../utils/images/FooterPaymentIcons.png'

export const FooterNewComponent = () => {
  return (
    <Container fluid className={Classes.footerMainContainer}>
      <Row className={Classes.footerFirstRow}>
      <Col xs={12} sm={6} md={6} lg='auto' className={classNames(Classes.footerLinks, Classes.firstSection)}>
            <h2 className={Classes.sectionHeading}>CONTACT US</h2>
            <ul className={Classes.sectionDescription}>
                    <li className={Classes.footerFirstInfo}>info@thetaxeasy.com</li>
                    <li className={Classes.footerFirstInfo}><span className={classNames(Classes.footerBoldSubHeading)}>Phone:</span>9936818000, 9310658474</li>
                    <li className={Classes.footerWhatsapp}><a target='_blank' rel="noreferrer" href='https://api.whatsapp.com/send?phone=9310658474'><img src={WhatsappIcon} alt='whatsapp-icon'/> Whatsapp Us</a></li>
                    <li className={Classes.footerBoldSubHeading}>Follow Us
                        <ul className={Classes.followIcons}>
                            <li><a target='_blank' rel="noreferrer" href='https://www.youtube.com/@TaxEasy2017'><img src={Youtube} alt='youtube'/></a></li>
                            <li><a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100076207151621&mibextid=LQQJ4d'><img src={Facebook} alt='facebook'/></a></li>
                            <li><a target='_blank' rel="noreferrer" href='https://www.instagram.com/taxeasy_in/'><img src={Instagram} alt='Instagram'/></a></li>
                            <li><a target='_blank' rel="noreferrer" href='https://twitter.com/Taxeasy_in'><img src={Twitter} alt='Twitter'/></a></li>
                            <li><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/company/taxeasy-solutions-pvt-ltd/'><img src={LinkedIn} alt='linkdin' style={{backgroundColor: '#fff', borderRadius: '50%'}}/></a></li>
                        </ul>
                    </li>
                </ul>
        </Col >
        {FooterData?.map((data,index)=> (<Col xs={12} sm={6} md={6} lg='auto' key={`footerData-${index}`} className={classNames(Classes.footerLinks)}>
            <h2 className={Classes.sectionHeading}>{data?.heading}</h2>
            <ul className={Classes.sectionDescription}>
                {data?.list?.map((listData,index)=><li key={`footerList-${index}`}>{listData}</li>)}
            </ul>
            </Col>))}
      </Row>
      <Row classsName={Classes.imageSection}>
        <img src={FooterPaymentImages} alt='footer-pagment-icons'/>
      </Row>
      <Row className={Classes.copyRightSection}>
        <Col lg={8}><p>Copyrights © 2017 - 2023  TaxEasy Solutions Pvt. Ltd.  All Rights Reserved</p></Col>
        <Col lg={4}><ul className={Classes.privacyPolicy}>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Disclaimer</li>
        </ul></Col>
      </Row>
    </Container>
  )
}
import React,{useRef,useState,useCallback} from 'react'
import { isMobile } from 'react-device-detect'
// import Classes from './gst.module.scss'
import { gstOfferList, gstSolutionList, gstEligibilityInfoCards, gstCustomerInfo, stepList, gstDocumentList, gstCustomerReview} from '../../utils/constants/constantData';
import DocumentsRequiredComponent from '../commonComponents/DocumentsRequired/DocumentsRequiredComponent';
import EligibilityAndQueriesComponent from '../commonComponents/EligibilityAndQueries/EligibilityAndQueriesComponent';
import MainInfoSolutionsComponent from '../commonComponents/MoreInfoSolutions/MainInfoSolutionsComponent';
import GstServicesComponent from '../GST/GstServices/GstServicesComponent';
import WhyTaxEasyComponent from '../commonComponents/WhytaxEasy/WhyTaxEasyComponent';
import CustomerReviewComponent from '../commonComponents/CustomerReviews/CustomerReviewComponent';
import {OfferingComponentRightContent} from '../commonComponents/Offerings/OfferingComponent';
import FreeConsultation from '../commonComponents/FreeConsultation/FreeConsultation';
import ContactUs from '../commonComponents/ContactUs/ContactUs';
import StepsComponent from '../commonComponents/Steps/StepsComponent';
import { GstInfoContainer, ImagesComponent, MainHeadingAboutPage } from '../commonComponents/SomeCommonComponents/SomeCommonCompoents';

const GstComponent = () => {

  const observer = useRef();
  const [autoplay, setAutoplay] = useState(0)

  const vedioRef = useCallback(
    node=>{
      if(observer && observer?.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries=>{
        if(entries[0]?.isIntersecting){
          setAutoplay(1)
        }else{
          setAutoplay(0)
        }
      })
      if (node) {
        observer.current?.observe(node)
      }
    },[observer]
  )

  return (
    <div style={{maxWidth: '1920px', margin: 'auto'}}>
      <MainHeadingAboutPage heading={'TaxEasy is the Most Loved & Trusted GST Service Provider Platform!'} description={'Admired for its Exceptional Customer Satisfaction!'}/>
        <MainInfoSolutionsComponent heading={'All GST Solutions Available with TaxEasy'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'} solutionList={gstSolutionList} isMobileConatiner={true} image={''} vedioRef={vedioRef} autoplay={autoplay}/>
        <GstInfoContainer/>
        <FreeConsultation heading={'GET Free Consultation By Expert!'}/>
        <StepsComponent stepList={stepList}/>
        <OfferingComponentRightContent heading={'Our Offering :'} description={''} offerList={gstOfferList}/>
        <GstServicesComponent/>
        <EligibilityAndQueriesComponent heading={'Eligibility For GST Registration'} description={'GET GST Registration Online in 7 Days'} infoCards={gstEligibilityInfoCards}/>
        <DocumentsRequiredComponent heading={'Documents Required For GST Registration'} documentList={gstDocumentList}/> 
        <WhyTaxEasyComponent heading={'Why TaxEasy ?'} description={'We are admired by people for our Exceptional Customer Satisfaction !'} customerInfo={gstCustomerInfo}/>
        {!isMobile && <ImagesComponent/>}
        <CustomerReviewComponent customerReview={gstCustomerReview}/>
        <ContactUs stepInfo={stepList}/>
    </div>
  )
}

export default GstComponent
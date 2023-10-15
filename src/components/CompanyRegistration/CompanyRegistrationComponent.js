import React,{useRef,useState,useCallback, useEffect} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Classes from './companyregistration.module.scss'
import classNames from 'classnames'
import { companyRegisterationOfferList, 
  CompanyRegisterationComparisonData, 
  companyRegistrationCustomerInfo, 
  AssociatedWithData, 
  CitiesData, 
  CompanyRegistrationStepList,
  companyRegistrationDocumentList, 
  companyRegisterationCustomerReview, 
  companyRegisterationInCities,
  companyRegisterationInStates,
  pricingCardInfo,
  TeamPhotos
   } 
  from '../../utils/constants/constantData'
import WhyTaxEasyComponent from '../commonComponents/WhytaxEasy/WhyTaxEasyComponent'
import {OfferingComponentRightContent} from '../commonComponents/Offerings/OfferingComponent'
import StepsComponent from '../commonComponents/Steps/StepsComponent'
import DocumentsRequiredComponent from '../commonComponents/DocumentsRequired/DocumentsRequiredComponent'
import ContactUs from '../commonComponents/ContactUs/ContactUs'
import CustomerReviewComponent from '../commonComponents/CustomerReviews/CustomerReviewComponent'
import {CitiesSection, AssociatedWithSection, ImagesComponent, TeamPhotoCarouselComponent, ThankyouModal} from '../commonComponents/SomeCommonComponents/SomeCommonCompoents'
import PlanPricingComponent from '../commonComponents/PlanPricing/PlanPricingComponent'
import CallNowGif from '../../utils/images/CallNowGIF.gif'
import WhatsappGif from '../../utils/images/WhatsappGIF.gif'
import { isMobile } from 'react-device-detect'


const CompanyRegistrationComponent = () => {
  const observer = useRef();
  const [autoplay, setAutoplay] = useState(0)

  const vedioRef = useCallback(
    node=>{
      if(observer && observer.current) observer.current.disconnect()
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
    <div>
        <CitiesSection info={CitiesData}/>
        {isMobile ? <TeamPhotoCarouselComponent info={TeamPhotos}/> : <AssociatedWithSection heading={'We Associated With'} info={AssociatedWithData}/>}
        <RegisterYourCompanyFormComponent vedioRef={vedioRef} autoplay={autoplay}/>
        <StepsComponent stepList={CompanyRegistrationStepList} />    
        <PlanPricingComponent heading={'Be the Director of your Own Company Today!'} pricingCardInfo={pricingCardInfo}/>
        <CalenderComponentContainer/>
        <OfferingComponentRightContent heading={'Our Offering :'} description={'Company Registration Online at Most Afforable Prices & Quality Service !'} offerList={ companyRegisterationOfferList}/>
        <DocumentsRequiredComponent heading={'Documents Required For Company  Registration'} documentList={companyRegistrationDocumentList}/>
        <WhyTaxEasyComponent heading={'Why TaxEasy'} description={'TaxEasy is the most trusted and Top Rated Company Consultants in India'} customerInfo={companyRegistrationCustomerInfo} isTwo={false} className={{infoCardContainer: Classes.infoCardContainer, imageContainer: Classes.imageContainer, cardContainer: Classes.cardContainer, gap: Classes.gap, whyTaxEasyContainer: Classes.whyTaxEasyContainer, heading: Classes.heading, image: Classes.image}}/>
        {!isMobile && <ImagesComponent/>}
        <CustomerReviewComponent customerReview={companyRegisterationCustomerReview}/>
        <CompanyRegisterationInCities registeration={companyRegisterationInCities}/>
        <CompanyRegisterationInStates registeration={companyRegisterationInStates}/>
        <ContactUs stepInfo={CompanyRegistrationStepList}/>
    </div>
  )
}

export default CompanyRegistrationComponent


const CalenderComponentContainer = ()=>{
  return(
    <div className={Classes.calenderComponentContainer}>
            <h3 className={Classes.mainHeading}>Private Limited Company v/s OPC v/s LLP</h3>
            <div className={Classes.cardMainContainer}> 
                <div>
                    <div className={classNames(Classes.dateContainer, Classes.dateContainerFirst)}>Point of Comparison</div>
                    <DateCardContainer info={CompanyRegisterationComparisonData[0]} key={`itr-date-card-1`} className={{listHeadingData: Classes.listHeadingData }}/>
                </div>
                <div>
                    <div className={classNames(Classes.dateContainer, Classes.dateContainerSecond)}>Private Limited Company</div>
                    <DateCardContainer info={CompanyRegisterationComparisonData[1]} key={`itr-date-card-2`} subdata={'Note: Both Directors & Stakeholders can be Same'}/>
                </div>
                <div>
                    <div className={classNames(Classes.dateContainer, Classes.dateContainerThird)}>One Person Company (OPC)</div>
                    <DateCardContainer info={CompanyRegisterationComparisonData[2]} key={`itr-date-card-3`} subdata={'Note: Both Directors & Stakeholders can be Same'}/>
                </div>
                <div>
                    <div className={classNames(Classes.dateContainer, Classes.dateContainerFourth)}>Limited Liability Partnership (LLP)</div>
                    <DateCardContainer info={CompanyRegisterationComparisonData[3]} key={`itr-date-card-4`}/>
                </div>
            </div>
      </div>
  )
}

const DateCardContainer = ({info, subdata, className})=>{
  return (
    <div className={Classes.cardContainer}>
          <h6 className={Classes.cardHeading}>{info?.heading}</h6>
          <ul className={Classes.cardDescription}>
              {info?.list?.map((data, index)=>(<li key={`itr-filling-${index}`} className={classNames(index===1 ? Classes.largerData : '', index+1===info?.list?.length? Classes.lastItem : '', className?.listHeadingData)}>{data}{subdata && index===1 && <span className={Classes.subData}>{subdata}</span>}</li>))}
          </ul>
      </div>
  )
}

const CompanyRegisterationInCities = ({registeration})=>{
  return (
    <Container className={Classes.companyRegisterationInCitiesMainContainer} fluid>
      <Row className={Classes.heading}>Company Registration in Cities</Row>
      <Row className={Classes.descriptionContainer}>
        {registeration?.map((dataList,index)=>(
          <Col key={`itrCitiesCol-${index}`} className={Classes.listContainer} xs={12} sm={12} md={4}>
            <ul>
              {dataList?.map((data,index)=><li key={`itrCitiesData-${index}`}>{data}</li>)}
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

const CompanyRegisterationInStates = ({registeration})=>{
  return (
    <Container className={Classes.companyRegisterationInStatesMainContainer} fluid>
      <Row className={Classes.heading}>Company  Registration in States</Row>
      <Row className={Classes.descriptionContainer}>
        {registeration?.map((dataList,index)=>(
          <Col key={`itrCitiesCol-${index}`} className={Classes.listContainer} xs={12} sm={6} md={6}>
            <ul>
              {dataList?.map((data,index)=><li key={`itrCitiesData-${index}`}>{data}</li>)}
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export const RegisterYourCompanyFormComponent = ({vedioRef, autoplay})=>{

  const [inputData, setInputData] = useState({name: '', mobile: ''})
  const [error, setError] = useState('');
  const [show, setShow] = useState(false)
  const handleClose = ()=>setShow(false)
  useEffect(()=>{
        if(show){
            setTimeout(()=>setShow(false), 3000)
        }
    },[show])

    const handleInputChange = (e)=>{
        setError('')
        if(e.target.name==='name'){
            setInputData({...inputData,name: e.target.value})
        }else if(e.target.name==='mobile'){
            setInputData({...inputData,mobile: e.target.value})
        }
    }

  const onSubmitClick = async()=>{
    if (inputData.mobile !== '' && inputData.mobile?.toString()?.length === 10) {
        try {
          const response = await fetch(process.env.REACT_APP_API_BASE_URL+'/contact', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
            },
            body: JSON.stringify({inputData, page: 'COMPANY_REG'}),
          });
    
          if (response.ok && response.status === 201) {
            setShow(true)
            setInputData({ name: '', mobile: '' });
          } else {
            console.log('An error occurred while submitting the data.');
            setInputData({ name: '', mobile: '' });
            setError('Some Error occured. Please Try to submitting the data again or after some time')
          }
        } catch (error) {
          console.log('An error occurred while making the request:', error);
          setInputData({ name: '', mobile: '' });
          setError('Some Error occured. Please Try to submitting the data again or after some time')
        }
      } else {
        setError('Please enter a valid mobile number.')
        console.log('Please enter a valid mobile number.');
      }
  }

  return(
    <div className={Classes.itrFilingMainContainer} ref={vedioRef}>
            <div className={Classes.vedioContainer}>
                <iframe 
                      className={Classes.solutionsVedio} 
                      src={`https://www.youtube.com/embed/lxunH2Cvz0A?autoplay=${autoplay}`}
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen>
                  </iframe>
            </div>
            <div className={Classes.textContainer}>
                  <h2 className={Classes.heading}>Get Instant Quote !</h2>
                  <Form className={Classes.formContainer}>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Enter Full Name" className={Classes.nameInput} name='name' value={inputData.name} onChange={handleInputChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                          <Form.Control type="number" placeholder="Enter Mobile Number" className={classNames(Classes.mobileInput, error? Classes.errorBorder : '')} name='mobile' value={inputData.mobile} onChange={handleInputChange}/>
                          <p className={Classes.errorMsg}>{error}</p>
                      </Form.Group>
                      <Button variant="warning" className={Classes.submitBtn} onClick={onSubmitClick}>SUBMIT NOW</Button>
                  </Form>
                  <ThankyouModal show={show} handleClose={handleClose}/>
                  <div className={Classes.buttonContainer}>
                      <a target='_blank' rel="noreferrer" href='tel:+91-9936818000' className={Classes.callNow}><img src={CallNowGif} alt='call-now'/><span>CALL NOW</span></a>
                      <a target='_blank' rel="noreferrer" href='https://api.whatsapp.com/send?phone=9310658474' className={Classes.whatsapp}><img src={WhatsappGif} alt='whatsapp'/><span>WHATSAPP</span></a>
                  </div>
              </div>
      </div>
  )
}
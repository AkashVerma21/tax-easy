import React,{useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel'
import Classes from './commonComponents.module.scss'
import classNames from 'classnames'
import Google from '../../../utils/images/Google.png'
import { MobileTextField } from '../MoreInfoSolutions/MainInfoSolutionsComponent'
import { isMobile, isTablet } from 'react-device-detect'
import LocationMapGIF from '../../../utils/images/LocationMapGIF.gif'
import LocationMapPinGIF from '../../../utils/images/LocationMapPinGIF.gif'
import {ImagesSectionData} from '../../../utils/constants/constantData'
import { Modal } from 'react-bootstrap'

export const MainHeadingAboutPage = ({heading, description, className})=>{
    return (
        <div className={classNames(Classes.mainHeadingAboutPageContainer, className?.mainHeadingContainer)}>
            <h1 className={classNames(Classes.heading, className?.heading)}>{heading}</h1>
            <p className={classNames(Classes.description, className?.description)}>{description}</p>
        </div>
    )
}

export const GstInfoContainer = ()=>{
    return (
    <div className={Classes.gstInfoContainer}>
        <div>
            <p><span>Taxeasy assigns a <span style={{fontWeight: '600', fontSize: '1.3rem'}}>personal expert</span> to you who will resolve all your tax & business finance related queries & ensure all your compliances.</span></p>
            <p><span>Say goodbye to tax worries with our <span style={{fontWeight: '600', fontSize: '1.3rem'}}>personalized assistance and expert guidance.</span></span></p>
        </div>
        <div className={Classes.callingInfo}>
            <a target='_blank' rel="noreferrer" href='tel:+91-9936818000'>Call Now 9936818000</a>
        </div>
    </div>
    )
}

export const GoogleRating = ()=>{
    return (
        <div className={Classes.mainGoogleRatingContainer}>
            <p className={Classes.heading}>4.9 Star Google Rating</p>
            <div className={Classes.description}>
                <img src={Google} alt={'google-icon'}/>
                <p>&#9733;  &#9733;  &#9733;  &#9733;  &#9733; </p>
            </div>
        </div>
    )
}

export const GoogleRatingWithMobile = ()=>{
    return (
        <div className={classNames(Classes.mainGoogleRatingContainer, Classes.mainGoogleRatingContainerWithMobile)}>
            <div>
                <p className={Classes.heading}>4.9 Star Google Rating</p>
                <div className={Classes.description}>
                    <img src={Google} alt={'google-icon'}/>
                    <p>&#9733;  &#9733;  &#9733;  &#9733;  &#9733; </p>
                </div>
            </div>
            <div>
                <MobileTextField className={{mobileInputContainer: Classes.mobileInputContainer}}/>
            </div>
        </div>
    )
}

export const CarouselComponent = ({responsive, carouselCard, Children, ClassName}) =>{
    
    return (
        <Carousel
            autoPlay={true}
            infinite={true}
            deviceType={isMobile? "mobile": isTablet? "tablet": "desktop"}
            containerClass={classNames(Classes.carouselContainer, ClassName)}
            removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
            responsive={responsive}
            autoPlaySpeed={2000}
            partialVisible={true}
        >
        {carouselCard?.map((item,index)=><Children key={`carousel Item ${item.key}-${index}`} item={item}/>)}
    </Carousel>
    )
}

export const ImageCard = ({image, alt})=>{
    return(
        <div className={Classes.imageCard}>
            <img src={image} alt={alt}/>
        </div>
    )
}

export const ImagesComponent = ()=>{
    return(
    <div className={Classes.imageComponentSection}>
          {ImagesSectionData?.map((data)=><ImageCard image={data?.image} alt={data?.alt} key={data?.alt}/>)}
    </div>)
}

export const StepsSection = ({image, alt, isLine, className})=>{
    return(
        <>
        <div className={classNames(Classes.stepsCircle, className?.stepsCircle)}>
            <img alt={alt} src={image}/>
        </div>
        {isLine && <div className={classNames(Classes.stepsLine,className?.stepsLine)}></div>}
        <div className={Classes.clear}></div>
        </>
    )
}

export const CitiesSection = ({info})=>{
    return(
        <div className={Classes.nameofCitiesMainContainer}>
            <div className={Classes.gifContainer}>
                <img src={LocationMapGIF} alt='location-path-gif'/>
                <img src={LocationMapPinGIF} style={{position: 'relative', left: '-125px'}} alt='location-pin-gif'/>
            </div>
            <div className={Classes.cityContainer}>
            <div className={Classes.first}>{info?.slice(0,9)?.map((info, index)=><p key={`section1-cities-${index}`}>{info?.cityName}</p>)}</div>
            <div className={Classes.second}>{info?.slice(9, info?.length)?.map((info,index)=><p key={`section2-cities-${index}`}>{info?.cityName}</p>)}</div>
            </div>
        </div>
    )
}

export const AssociatedWithSection = ({heading, info})=>{

     const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 40
        }
      };
    return(
        <div className={Classes.assiciatedWithMainContainer}>
            <h2 className={Classes.heading}>{heading}</h2>
            <div className={Classes.imageSection}>
                <CarouselComponent responsive={responsive} carouselCard={info} Children={AssociatedCardImg} ClassName={Classes.carousel}/>
            </div>
        </div>
    )
}

const AssociatedCardImg = ({item})=>{
    return(
        <div  className={Classes.associatedCard}>
        <img src={item?.image} style={{width: '160px', height: '80px'}} alt={item?.alt}/>
        </div>
    )
}


export const TeamPhotoCarouselComponent = ({info})=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    return (
        <div className={Classes.TeamPhotoCarouselComponentMainContainer}>
            <CarouselComponent responsive={responsive} carouselCard={info} Children={TeamPhotoCardImg} ClassName={Classes.teamCarousel}/>
        </div>
    )
}

const TeamPhotoCardImg = ({item})=>{
    return(
        <div className={Classes.teamPhotoCard}>
        <img src={item?.image} style={{width: '100%', height: '300px'}} alt={item?.alt}/>
        </div>
    )
}

export const ThankyouModal = ({show, handleClose})=>{
    return(
        <Modal 
        size="lg"
        show={show} 
        onHide={handleClose} 
        aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title className={Classes.modalTitle}>Thank you</Modal.Title>
            </Modal.Header>
            <Modal.Body className={Classes.modalBody}>Your data has been submitted sucessfully... We will get back to you soon!</Modal.Body>
        </Modal>
    )
}


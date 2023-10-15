import React from 'react'
import Classes from './CustomerReview.module.scss'
import { CarouselComponent } from '../SomeCommonComponents/SomeCommonCompoents';
import Google from '../../../utils/images/Google.png'

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 50
    }
  };

const CustomerReviewComponent = ({customerReview}) => {
  return (
    <>
    <div className={Classes.customerReviewMainContainer}>
        <h3 className={Classes.heading}>Reviews from Customers</h3> 
        <p className={Classes.description}>Heard from Our Customers what they have to say about Us !</p>
    </div>
    <div className={Classes.carouselContainer}>
        <CarouselComponent responsive={responsive} carouselCard={customerReview} Children={CutomerReviewCard}/>
    </div>
    </>
  )
}

export default CustomerReviewComponent

const CutomerReviewCard = ({item})=>{
    const {rating, description, customerImage, customerName, customerInfo} = item

    const getBgColor = ()=>{
      const bgArray = ['#FF9933','#FFD133','#33FFA2','#3390FF','#9C33FF','#FF33CA','#FF3364','#C733FF']
      const index = Math.floor(Math.random()*7)+1;
      return bgArray[index]
    }

    return (
        <div className={Classes.customerReviewCard}>
            <div className={Classes.rating}>
            <img src={Google} alt={'google-icon'}/>
              {Array(rating).fill("").map((data,index)=><p key={index}>&#9733;</p>)}
            </div>
            <p className={Classes.cardDescription}>{description}</p>
            <div className={Classes.cutomerInfoContainer}>
                <div className={Classes.customerImg} style={{backgroundColor: getBgColor()}}>{customerName[0]?.toUpperCase()}</div>
                <div className={Classes.customerInfo}>
                    <p className={Classes.customerName}>{customerName}</p>
                    <p className={Classes.extraInfo}>{customerInfo}</p>
                </div>
            </div>
        </div>
    )
}
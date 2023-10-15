import React from 'react'
import classNames from 'classnames'
import Classes from './planPricing.module.scss'

const PlanPricingComponent = ({heading, pricingCardInfo}) => {
  return (
    <div className={Classes.planPricingcMainContainer}>
        <h2 className={Classes.heading}>{heading}</h2>
        <p className={Classes.description}>No Space for any Doubts !  Connect Now for any Queries !</p>
        <div className={Classes.pricingCardContainer}>
            {pricingCardInfo?.slice(0,6)?.map((info,index)=><PricingCard info={info} key={`pricingCard-${index}`}/>)}
        </div>
        <div className={Classes.pricingLastCardContainer}>
            <PricingCard info={pricingCardInfo[6]} isRightText={true}/>
        </div>
    </div>
  )
}

export default PlanPricingComponent

const PricingCard = ({info, isRightText=false})=>{
    const {heading, description, pricing, infoList1, infoList2, image} = info
    return (
        <div className={classNames(Classes.pricingCard,isRightText? Classes.rightText: '')}>
            <div className={Classes.pricingCardSubContainer}>
            <img src={image} alt={heading}/>
            <h3 className={Classes.heading}>{heading}</h3>
            <p className={Classes.pricing}>
                INR 
                <span className={Classes.offerPrice}>{pricing.offerPrice}</span>
                <span className={Classes.listingPrice}>{pricing.listingPrice} </span> 
                Only /-
            </p>
            <p className={Classes.description}>{description}</p>
            <div className={Classes.listMainContainer}>
            <ul className={Classes.listContainer}>
               <p className={Classes.listMainDescription}>Package Includes: </p>
                {infoList1?.map((info,index)=><li key={`pricing-info-company-list1-${index}`}>{info}</li>)}
            </ul>
            {isRightText && <ul className={Classes.listContainer}>
                {infoList2?.map((info,index)=><li key={`pricing-info-company-list2-${index}`}>{info}</li>)}
            </ul>}
            </div>
            </div>
            <div className={Classes.detailsBtn}>
                <a target='_blank' rel="noreferrer" href='https://api.whatsapp.com/send?phone=9310658474'>CHAT NOW !</a>
            </div>
        </div>
    )
}
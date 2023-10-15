import React from 'react'
import classNames from 'classnames'
import Classes from './Offering.module.scss'
import OfferingGirlImg from '../../../utils/images/OurOfferingsGirl.png'

const OfferCard = ({info, index, className})=>{
    const {title, description} = info
    return (
        <div className={classNames(Classes.card, className?.card)}>
            <h2 className={Classes.heading}>{index+1}</h2>
            <div>
                <h2 className={Classes.subHeading}>{title}</h2>
                <p key={index} className={Classes.listItem}>{description}</p>   
            </div>
        </div>
    )
}


export const OfferingComponentRightContent = ({heading, description, offerList, className})=>{
    return(
    <div className={Classes.offerRightContentMainContainer}> 
        <div className={Classes.offerImageContainer}>
            <img src={OfferingGirlImg} alt='offer-girl-img'/>
        </div>  
        <div className={Classes.offerContainer}>
            <h2 className={Classes.offerHeading}>{heading}</h2>
            <p className={Classes.offerDescription}>{description}</p>
            <div className={Classes.offerCardContainer}>
                {offerList?.map((offer,index)=><OfferCard key={`${offer.title}-${index}`} info={offer} index={index} className={{card: Classes.offerRightCard}}/>)}
            </div>
        </div>
    </div>
    )
}

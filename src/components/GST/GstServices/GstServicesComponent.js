import React from 'react'
import Classes from'./GstServices.module.scss'
import classNames from 'classnames'
import { ListContainer } from '../../commonComponents/MoreInfoSolutions/MainInfoSolutionsComponent'
import { isMobile } from 'react-device-detect'
import { gstServicesList } from '../../../utils/constants/constantData'

const GstServicesComponent = () => {
  return (
    <div className={Classes.gstServicesMainContainer}>
        <h2 className={Classes.heading}>GST Services We Offer</h2>
        {/* <p className={Classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> */}
        <div className={Classes.servicesCardMainContainer}>
            {gstServicesList?.map((service,index)=><ServicesCard key={`${service?.title}-${index}`} services={service}/>)}
        </div>
    </div>
  )
}

export default GstServicesComponent

const ServicesCard = ({services})=>{
    const {title, list, image} = services
    return (
        <div className={classNames(Classes.servicesCard, list?.length>7 ? Classes.newServiceCard : '' )}>
            <div className={Classes.imageContainer}>
                {image && <img src={image} alt={title} className={Classes.image}/>}<h3 className={Classes.cardTitle}>{title}</h3>
            </div>
            {services?.price && <p className={Classes.cardPrices}> @ INR <span style={{textDecoration: 'line-through'}}>{services?.price?.offerPrice}</span> <span>{services?.price?.listingPrice}</span> /-</p>}
            {isMobile ? list?.map((listItem, index)=><ListContainer key={`servicesList-${index}`} solution={listItem} className={{servicesCardContainer : Classes.servicesCardContainer}}/>)
            :
            list?.length<8 ? 
            <div className={Classes.cardListContainer}>
            {list?.map((listItem, index)=><ListContainer key={`servicesList-${index}`} solution={listItem} className={{servicesCardContainer : Classes.servicesCardContainer}}/>)}
            </div>:
            <div style={{display: 'flex'}}>
                <div>
                {list?.slice(0,5).map((listItem, index)=><ListContainer key={`servicesList-${index}`} solution={listItem} className={{servicesCardContainer : Classes.servicesCardContainer}}/>)}
                </div>
                <div>
                {list?.slice(5,list?.length).map((listItem, index)=><ListContainer key={`servicesList-${index}`} solution={listItem} className={{servicesCardContainer : Classes.servicesCardContainer}}/>)}
                </div>
            </div>}
            <div className={Classes.cardButton}>Get More Details</div>
        </div>
    )
}
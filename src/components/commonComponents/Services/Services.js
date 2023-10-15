import React from 'react'
import classNames from 'classnames'
// import { isMobile } from 'react-device-detect'
import Classes from './services.module.scss'
import { ListContainer } from '../MoreInfoSolutions/MainInfoSolutionsComponent'

const Services = ({services}) => {
    return (
        <div className={Classes.servicesMainContainer}>
            <h2 className={Classes.heading}>Services We Offer !</h2>
            <p className={Classes.description}>TaxEasy is One Stop Solution for all your Tax & Startup Needs !</p>
            <div className={Classes.servicesCardMainContainer}>
                {services?.map((service,index)=><ServicesCard key={`${service?.title}-${index}`} services={service}/>)}
            </div>
        </div>
      )
}

export default Services


const ServicesCard = ({services, isRightText=false})=>{
    const {title, list, image} = services
    return (
        <div className={classNames(Classes.servicesCard, list?.length>7 ? Classes.newServiceCard : '' )}>
            <div className={Classes.imageContainer}>
                {image && <img src={image} alt={title} className={Classes.image}/>}<h3 className={Classes.cardTitle}>{title}</h3>
            </div>
            {isRightText ?
            <div style={{display: 'flex'}}>
                    <div>
                    {list?.slice(0,5).map((listItem, index)=><ListContainer key={`servicesList-${index}`} solution={listItem} className={{servicesCardContainer : Classes.servicesCardContainer, solutionDescription : Classes.solutionDescription, tick: Classes.tick}}/>)}
                    </div>
                    <div>
                    {list?.slice(5,list?.length).map((listItem, index)=><ListContainer key={`servicesList-${index}`} solution={listItem} className={{servicesCardContainer : Classes.servicesCardContainer, solutionDescription : Classes.solutionDescription}}/>)}
                    </div>
            </div>:
            <div className={Classes.cardListContainer}>
            {list?.map((listItem, index)=><ListContainer key={`servicesList-${index}`} solution={listItem} className={{servicesCardContainer : Classes.servicesCardContainer, solutionDescription : Classes.solutionDescription, tick: Classes.tick}}/>)}
            </div>
            }
            <div className={Classes.btnContainer}>
                <button className={Classes.getMoreDetails}>Get More Details</button>
                <button className={Classes.watchVedio}>Watch Video</button>
            </div>
        </div>
    )
}
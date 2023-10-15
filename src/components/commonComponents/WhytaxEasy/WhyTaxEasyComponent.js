import React from 'react'
import classNames from 'classnames'
import Classes from './whyTaxEasy.module.scss'
import WhyTaxEasyFemaleImg from '../../../utils/images/WhyTaxEasyFemaleImg.png'

const WhyTaxEasyComponent = ({heading, description, customerInfo, className, isTwo=true}) => {
  return (
    <div className={classNames(Classes.whyTaxEasyContainer, className?.whyTaxEasyContainer)}>
        <div className={classNames(Classes.imageContainer, className?.imageContainer)}>
        <h2 className={classNames(Classes.heading,className?.heading)}>{heading}</h2>
        <p className={Classes.description}>{description}</p>
        <img src={WhyTaxEasyFemaleImg} alt='WhyTaxEasyFemale'/>
        </div>
        <div className={classNames(Classes.infoCardContainer,className?.infoCardContainer)}>
            {customerInfo?.map((info,index)=><CustomerInfoCard key={`${info?.title}-${index}`} info={info} className={className} isTwo={isTwo} index={index} />)}
        </div>
    </div>
  )
}

export default WhyTaxEasyComponent

export const CustomerInfoCard = ({info, className, isTwo, index})=>{
    const {image, title, description} = info
    return (
        <div className={classNames(Classes.customerCard, className?.cardContainer, isTwo&&index>1?Classes.gap:'', !isTwo&&index>2 ? Classes.gap:'', !isTwo&&index>2 ? className?.gap:'')}>
            <img src={image} alt={'lady-img'} className={className?.image}/>
            <h3 className={classNames(Classes.cardTitle, className?.cardTitle)}>{title}</h3>
            <p className={classNames(Classes.cardDescription,className?.cardDescription)}>{description}</p>
        </div>
    )
}
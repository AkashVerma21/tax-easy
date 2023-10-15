import React from 'react'
import Classes from './steps.module.scss'
import classNames from 'classnames'
import { StepsSection } from '../SomeCommonComponents/SomeCommonCompoents'
import { isMobile } from 'react-device-detect'

const StepsComponent = ({stepList, className}) => {
  return (
    <>
    {isMobile ? 
      <div className={Classes.stepsMobileMainContainer}>
          {stepList?.map((data)=><StepsComponentMobile info={data} key={`info-${data?.title}`} className={className?.stepsMobile}/>)}
      </div>:
    <div className={Classes.stepsComponentContainer}>
        <div className={Classes.stepsContainer}>
          {stepList?.map((data,index)=><StepsSection image={data?.image} key={data?.title} alt={data?.title} isLine={stepList.length-1!==index} className={className}/>)}
        </div>
        <div className={Classes.stepsdescriptionContainer}>
            {stepList?.map((data, index)=> <StepDescriptionComponent info={data} key={`info-${data?.title}`} index={index}/>)}
        </div>
    </div>}
    </>
  )
}

export default StepsComponent

const StepDescriptionComponent = ({info,index})=>{
    const {title, description} = info
    return(
        <div className={Classes.stepsDescription}>
            <h4 className={classNames(Classes.heading,index===1?Classes.blue:'')}>{title}</h4>
            <p className={Classes.description}>{description}</p>
        </div>
    )
}

const StepsComponentMobile = ({info, className})=>{
  const {title, image, description} = info
  return(
    <div>
      <div className={classNames(Classes.stepsMobileContainer,className)}>
            <img src={image} alt={title}/>
            <h4 className={Classes.heading}>{title}</h4>
            <p className={Classes.description}>{description}</p>
        </div>
    </div>
  )
}
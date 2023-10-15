import React from 'react'
import Classes from './eligibilityAndQueries.module.scss'

const EligibilityAndQueriesComponent = ({heading, description, infoCards}) => {
  return (
    <div className={Classes.eligibilityMainConatiner}>
        <div className={Classes.eligibilitySubContainer1}>
        <h3 className={Classes.mainHeading}>{heading}</h3>
        <p className={Classes.mainDescription}>{description}</p>
        </div>
        <div className={Classes.eligibilityCardContainer}>
            {infoCards?.map((info, index)=><EligibitlityInfo key={`title-${index}`} info={info}/>)} 
        </div>
    </div>
  )
}

export default EligibilityAndQueriesComponent

const EligibitlityInfo = ({info})=>{
    const {title, description, image} = info;
    return (
        <div className={Classes.card}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={image} alt={`${title}-img`}/>
            <h4 className={Classes.cardTitle}>{title}</h4>
            </div>
            <p className={Classes.cardDescription}>{description}</p>
        </div>
    )
}
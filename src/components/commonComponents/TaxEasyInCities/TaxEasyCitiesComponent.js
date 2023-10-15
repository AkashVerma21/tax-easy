import React from 'react'
import Classes from './cities.module.scss'

const TaxEasyCitiesComponent = ({heading, cities}) => {
  return (
    <div className={Classes.citiesMainContainer}>
        <h3 className={Classes.mainHeading}>{heading}</h3>
        <div className={Classes.imageMainConatiner}>
            {cities?.map((info)=><div className={Classes.imageContainer}>
                <img alt={info?.cityName} src={info?.image}/>
                <p className={Classes.imgDescription}>{info?.cityName}</p>
            </div>)}
        </div>
    </div>
  )
}

export default TaxEasyCitiesComponent
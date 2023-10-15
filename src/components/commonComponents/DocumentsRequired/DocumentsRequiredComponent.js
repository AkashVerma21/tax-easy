import React, { useState } from 'react'
import Classes from './documents.module.scss'
import gstDocumentTick from '../../../utils/images/gstDocumentTick.png'
import { isMobile } from 'react-device-detect'


const DocumentsRequiredComponent = ({heading, documentList}) => {
  const [documents, setDocuments] = useState(documentList[0].list)
  const [active, setActive] = useState(0);
  return (
    <div className={Classes.gstDocumentMainConatiner}>
        <div className={Classes.gstDocumentSubContainer1}>
        <h3 className={Classes.mainHeading}>{heading}</h3>
        </div>
            {isMobile  ?
            <>
            {documentList?.map((info,index)=>{
                return (
                    <div key={`document-list-${index}`} >
                        <h2 className={Classes.mobileHeading}>{info.title}</h2>
                        {info?.list?.map((item,index)=><DocumentCard info={item} key={`document-info-${index}`}/>)}
                    </div>
                    )})}
            </>:
            <>
            <div className={Classes.documentListHeading}>
                <ul>
                    {documentList?.map((info,index)=><li onClick={()=>{setDocuments(info.list); setActive(index)}} className={index===active?Classes.active:""} key={`document-headings-${index}`}>{info.title}</li>)}
                </ul>
            </div>
            <div className={Classes.documentListContainer}>
                {documents?.map((item,index)=><DocumentCard info={item} key={`document-card-${index}`}/>)}
            </div>
            </>}
    </div>
  )
}

export default DocumentsRequiredComponent

const DocumentCard = ({info})=>{
    return (
        <div className={Classes.documentCard}>
            <div className={Classes.imgCardContainer}>
                <img src={gstDocumentTick} alt={info}/>
            </div>
           <div className={Classes.descriptionCardContainer}>
                <p className={Classes.description}>{info}</p>
                <p className={Classes.subDescription}></p>
            </div>
        </div>
    )
}
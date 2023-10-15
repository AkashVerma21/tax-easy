import React,{useState, useEffect} from 'react'
import Classes from './mainInfoSolutions.module.scss'
import classNames from 'classnames'
import MobileIcon from '../../../utils/images/mobile.svg'
import { ThankyouModal } from '../SomeCommonComponents/SomeCommonCompoents'

const MainInfoSolutionsComponent = ({heading, description, solutionList, isMobileConatiner, image, className, vedioRef, autoplay}) => {

  return (
    <div className={classNames(Classes.solutionInfoMainContainer,className?.solutionInfoMainContainer)} ref={vedioRef}>
        <div className={Classes.solutionInfoContainer}>
            <div className={Classes.infoContainer}>
                <h1 className={Classes.heading}>{heading}</h1>
                <div className={Classes.solutionListContainer}>
                    {solutionList.length>7 && <div>{solutionList.slice(0,solutionList.length/2)?.map((data,index)=><ListContainer key={`solutionList1-${index}`} solution={data}/>)}</div>}
                    {solutionList.length>7 && <div>{solutionList.slice(solutionList.length/2,solutionList.length)?.map((data,index)=><ListContainer key={`solutionList2-${index}`} solution={data}/>)}</div>}
                    {solutionList.length<=7 && <div>{solutionList?.map((data,index)=><ListContainer key={`solutionList1-${index}`} solution={data}/>)}</div>}
                </div>
                {isMobileConatiner && <MobileTextField/>}
            </div>
            <div className={Classes.imageContainer}>
                <iframe 
                    className={Classes.solutionsVedio}
                    src={`https://www.youtube.com/embed/9__92o0MyDw?autoplay=${autoplay}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default MainInfoSolutionsComponent

export const ListContainer = ({solution, className})=>{
    return(
        <div className={classNames(Classes.solutionList, className?.servicesCardContainer)}>
            <p className={classNames(Classes.tick, className?.tick)}></p>
            <p className={classNames(Classes.solutionDescription, className?.solutionDescription)}>{solution}</p>
        </div>
    )
}

export const MobileTextField = ({className})=>{

    const [mobileNo, setMobileNo] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false)
    const handleClose = ()=>setShow(false)
    useEffect(()=>{
            if(show){
                setTimeout(()=>setShow(false), 3000)
            }
        },[show])
  
  const onSubmitClick = async ()=>{
    if(mobileNo!=='' && mobileNo?.toString()?.length===10){
        try{
                const response  = await fetch(process.env.REACT_APP_API_BASE_URL+'/contact',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({mobile: mobileNo, page: 'GST'})
            });

            if(response.ok && response.status === 201){
                setMobileNo('');
                console.log('Data submitted Successfully');
                setShow(true)
            }else{
                console.log('Some Error occured while submitting the data')
                setMobileNo('');
                setError('Some Error occured. Please Try to submitting the data again or after some time')
            }
        }catch(error){
            console.log('Some Error occured while submitting the data')
            setMobileNo('');
            setError('Some Error occured. Please Try to submitting the data again or after some time')
        }
    }else{
        setError('Please Enter Valid Mobile No.')
        console.log('Please Enter Valid Mobile No.')
    }
}

    return (
        <>
        <div className={classNames(Classes.mobileInputContainer, className?.mobileInputContainer, error? Classes.errorBorder : '')}>
            <img src={MobileIcon} style={{paddingLeft: '10px'}} alt={'mobile-icon'}/>
            <input type="number" name="mobile" placeholder='Enter Mobile Number ' className={Classes.mobileInput} value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value); setError('')}}/>
            <button className={Classes.mobileInputButton} onClick={onSubmitClick}>Submit</button>
        </div>
        <p className={Classes.errorMsg}>{error}</p>
        <ThankyouModal show={show} handleClose={handleClose}/>
        </>
    )
}
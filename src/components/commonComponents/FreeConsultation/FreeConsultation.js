import React,{useState} from 'react'
import classNames from 'classnames';
import Classes from './freeConsultation.module.scss'
import ConsulationImg from '../../../utils/images/consultation.png'
import MobileIcon from '../../../utils/images/mobile.svg';
import EmailIcon from '../../../utils/images/email.svg'

const FreeConsultation = ({heading, className}) => {

    const [inputData, setInputData] = useState({name: '', mobile: ''})

    const handleInputChange = (e)=>{
        if(e.target.name==='name'){
            setInputData({...inputData,name: e.target.value})
        }else if(e.target.name==='mobile'){
            setInputData({...inputData,mobile: e.target.value})
        }
    }

    const onSubmitClick = async()=>{
        if (inputData.mobile !== '' && inputData.mobile?.toString()?.length === 10) {
            try {
              const response = await fetch(process.env.REACT_APP_API_BASE_URL+'/contact', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-type': 'application/json',
                },
                body: JSON.stringify({...inputData, page: 'GST'}),
              });
        
              if (response.ok && response.status === 201) {
                setInputData({ name: '', mobile: '' });
              } else {
                console.log('An error occurred while submitting the data.');
                setInputData({ name: '', mobile: '' });
              }
            } catch (error) {
              console.log('An error occurred while making the request:', error);
              setInputData({ name: '', mobile: '' });
            }
          } else {
            console.log('Please enter a valid mobile number.');
          }
      }

    return(
        <div className={classNames(Classes.consulationMainContainer, className?.consultationMainContainer)}>
            <div className={Classes.consultationFormContainer}>
                <h2 className={Classes.consultationTitle}>{heading}</h2>
                <form className={Classes.consultationForm} onSubmit={(e)=> e.preventDefault()}>
                    <div className={Classes.consultationFormNameContainer}>
                        <img src={EmailIcon} style={{paddingLeft: '20px'}} alt='email-icon'/>
                        <input placeholder='Enter Name' className={Classes.consultationFormName} name='name' type='text' value={inputData.name} onChange={handleInputChange}/>
                    </div>
                    <div className={Classes.consultationFormMobileContainer}>
                        <img src={MobileIcon} style={{paddingLeft: '20px'}} alt='mobile-icon'/>
                        <input placeholder='Enter Mobile Number' className={Classes.consultationFormMobile} name='mobile' type='number' value={inputData.mobile} onChange={handleInputChange}/>
                    </div>
                    <button className={Classes.consultationFormBtn} onClick={onSubmitClick}>Submit</button>
                </form>
            </div>
            <div className={Classes.consultaionImgContainer}>
                <img src={ConsulationImg} alt={'consultaion-expert'}/>
            </div>
        </div>
    )
}

export default FreeConsultation
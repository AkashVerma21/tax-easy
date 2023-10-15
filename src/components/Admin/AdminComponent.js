import React, {useEffect, useState} from 'react'
import AdminLoginForm from './AdminLoginForm'
import Classes from './admin.module.scss'
import { useSearchParams } from 'react-router-dom'
import AdminData from './AdminData'

const AdminComponent = () => {
 const [searchParams] = useSearchParams();
 const queryData = searchParams.get('admin')
 const [isLoggedIn,setIsLoggedIn] = useState(window.sessionStorage.getItem('login'))
 const token = window.localStorage.getItem('token')
 const [contactData, setContactData] = useState();

 useEffect(()=>{
  const fetchData = async()=>{
    try{
      const response = await fetch(process.env.REACT_APP_API_BASE_URL+'/contact',{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })

      if(response.ok && response.status === 200){
        const resp  = await response.json();
        setContactData(resp.data);
      }else{
        console.log("Error ocured in fetching the data",response.error)
      }
    }catch(error){
      console.log("Some Error occured in fetching the data");
    }
  }
  if(isLoggedIn && token){
  fetchData();
  }
 },[isLoggedIn,token])

  return queryData === 'true' && (
    <div>
      {isLoggedIn==='true' ? <AdminData data={contactData}/> :
        <div className={Classes.adminLogin}>
            <div className={Classes.heading}>
                <h4>Admin Login Panel</h4>
            </div>
            <div>
             <AdminLoginForm setIsLoggedIn={setIsLoggedIn}/> 
            </div>
        </div>}
    </div>
  )
}

export default AdminComponent
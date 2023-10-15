import './App.css';
import HeaderNewComponent from './components/commonComponents/HeaderNew/HeaderNewComponent';
import { FooterNewComponent } from './components/commonComponents/Footer/FooterNewComponent';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import { Provider } from 'react-redux';
import { store } from './utils/utilities/store';



function App() {
  const location = useLocation();

  useEffect(()=>{
    window?.scrollTo(0,0);
  },[location])

  return (
    <Provider store={store}>    
      <HeaderNewComponent/>
      <Outlet/>
      <FooterNewComponent/>
    </Provider>
  );
}

export default App;

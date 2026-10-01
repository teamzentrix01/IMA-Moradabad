
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// MAIN LAYOUT

import RootLayout from './RootLayout';



// PAGES
import About from './pages/About';
import Home from './pages/Home';
import Secretary_Message from './pages/secretary_Message';
import President_Message from './pages/President_Message';
import UpComing_Events from './pages/UpComing_Events';
import Past_Events from './pages/Past_Events';
import Achievements from './pages/Achievements';
import MembersDirectory from './pages/MembersDirectory';
import Treasurer_Message from './pages/Treasurer_Message';



//Sub_PAGES 

import Image_Gallery from './pages/Image_Gallery'
import Video_Gallery from './pages/Video_Gallery';
import News_Gallery from './pages/News_Gallery';
import Contact_Us from './pages/Contact_Us';
import RequestBlood from './pages/RequestBlood';
import BloodCamps from './pages/BloodCamps';
import Blood_Donate from './pages/BloodDonate';
import CME from './pages/CME';
import Conference from './pages/Conference';
import ThankYou from './pages/thankyou';
import Registration from './pages/Registration';
import BloodDonate from './pages/BloodDonate';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'secretarymessage', element: <Secretary_Message /> },
      { path: 'presidentmessage', element: <President_Message /> },
      { path: 'treasurer-message', element: <Treasurer_Message /> },
      { path: 'imagegallery', element: <Image_Gallery /> },
      { path: 'videogallery', element: <Video_Gallery /> },
      { path: 'newsgallery', element: <News_Gallery /> },
      { path: 'blooddonate', element: <Blood_Donate /> },
      { path: 'contactus', element: <Contact_Us /> },
      { path: 'upComingevents', element: <UpComing_Events /> },
      { path: 'bloodcamps', element: <BloodCamps /> },
      { path: 'requestblood', element: <RequestBlood /> },
      { path: 'blooddonate', element: <Blood_Donate /> },
      { path: 'pastevents', element: <Past_Events /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'members-directory', element: <MembersDirectory /> },
      { path: 'cme', element: <CME /> },
      { path: 'conference', element: <Conference /> },
      { path: 'thankyou', element: <ThankYou /> },
      { path: "registration", element: <Registration /> },
      { path: 'blooddonate', element: <BloodDonate /> }
    ]

  }
])




const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App

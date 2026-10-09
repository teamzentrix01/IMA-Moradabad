
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// MAIN LAYOUT
import RootLayout from './RootLayout';

// Lightweight, instant fallback loading spinner
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Loading...</span>
  </div>
);

// Eager load Home for instant First Contentful Paint
import Home from './pages/Home';

// Lazy load all remaining pages to reduce initial bundle size & blocking time
const About = lazy(() => import('./pages/About'));
const Secretary_Message = lazy(() => import('./pages/secretary_Message'));
const President_Message = lazy(() => import('./pages/President_Message'));
const Treasurer_Message = lazy(() => import('./pages/Treasurer_Message'));
const UpComing_Events = lazy(() => import('./pages/UpComing_Events'));
const Past_Events = lazy(() => import('./pages/Past_Events'));
const Achievements = lazy(() => import('./pages/Achievements'));
const MembersDirectory = lazy(() => import('./pages/MembersDirectory'));
const Image_Gallery = lazy(() => import('./pages/Image_Gallery'));
const Video_Gallery = lazy(() => import('./pages/Video_Gallery'));
const News_Gallery = lazy(() => import('./pages/News_Gallery'));
const Contact_Us = lazy(() => import('./pages/Contact_Us'));
const RequestBlood = lazy(() => import('./pages/RequestBlood'));
const BloodCamps = lazy(() => import('./pages/BloodCamps'));
const Blood_Donate = lazy(() => import('./pages/BloodDonate'));
const CME = lazy(() => import('./pages/CME'));
const Conference = lazy(() => import('./pages/Conference'));
const ThankYou = lazy(() => import('./pages/thankyou'));
const Registration = lazy(() => import('./pages/Registration'));
const BloodDonate = lazy(() => import('./pages/BloodDonate'));
const Nominate = lazy(() => import('./pages/Nominate'));
const JoinIMA = lazy(() => import('./pages/JoinIMA'));
const NewIMA = lazy(() => import('./pages/NewIMA'));
const BloodGroupDirectory = lazy(() => import('./pages/BloodGroupDirectory'));
const BloodBanks = lazy(() => import('./pages/BloodBanks'));

// Helper to wrap lazy components in Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: withSuspense(About) },
      { path: 'secretarymessage', element: withSuspense(Secretary_Message) },
      { path: 'presidentmessage', element: withSuspense(President_Message) },
      { path: 'treasurer-message', element: withSuspense(Treasurer_Message) },
      { path: 'imagegallery', element: withSuspense(Image_Gallery) },
      { path: 'videogallery', element: withSuspense(Video_Gallery) },
      { path: 'newsgallery', element: withSuspense(News_Gallery) },
      { path: 'blooddonate', element: withSuspense(Blood_Donate) },
      { path: 'contactus', element: withSuspense(Contact_Us) },
      { path: 'upComingevents', element: withSuspense(UpComing_Events) },
      { path: 'bloodcamps', element: withSuspense(BloodCamps) },
      { path: 'requestblood', element: withSuspense(RequestBlood) },
      { path: 'pastevents', element: withSuspense(Past_Events) },
      { path: 'achievements', element: withSuspense(Achievements) },
      { path: 'nominate', element: withSuspense(Nominate) },
      { path: 'join-ima', element: withSuspense(JoinIMA) },
      { path: 'new-ima', element: withSuspense(NewIMA) },
      { path: 'members-directory', element: withSuspense(MembersDirectory) },
      { path: 'about/blood-group', element: withSuspense(BloodGroupDirectory) },
      { path: 'about/blood-banks', element: withSuspense(BloodBanks) },
      { path: 'cme', element: withSuspense(CME) },
      { path: 'conference', element: withSuspense(Conference) },
      { path: 'thankyou', element: withSuspense(ThankYou) },
      { path: 'registration', element: withSuspense(Registration) }
    ]
  }
]);




const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App

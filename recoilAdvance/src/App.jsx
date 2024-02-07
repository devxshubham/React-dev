import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'

import { RecoilRoot, useRecoilValue,useRecoilState } from 'recoil'
import { notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return <>
    <RecoilRoot>
      <RecoilApp/>
    </RecoilRoot>
  </>
}
function RecoilApp(){
 const [notifications, setNotifications] = useRecoilState(notificationsAtom)

  const totalNotification = useRecoilValue(totalNotificationSelector)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sum-server.100xdevs.com/notifications");
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <>
        <button>home </button>
        <button>MyNetwork ({ (notifications.network>99) ? "99+" : notifications.network})</button>
        <button>Jobs ({notifications.jobs>99 ? "99+" : notifications.jobs})</button>
        <button>message ({notifications.message>99 ? "99+" : notifications.message})</button>
        <button>notification ({notifications.notification>99 ? "99+" : notifications.notification})</button>
        <button>Me</button>
        <div>
          <button>total ({totalNotification})</button>
        </div>
      </>
  )
}

export default App


// import './App.css';
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
// import { notificationsAtom, totalNotificationSelector } from './atoms';
// import { useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   return (
//     <RecoilRoot>
//       <MainApp />
//     </RecoilRoot>
//   );
// }

// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://sum-server.100xdevs.com/notifications");
//         setNetworkCount(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);

//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <button>Home</button>
//       <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
//       <button>Jobs {networkCount.jobs}</button>
//       <button>Messaging ({networkCount.messaging})</button>
//       <button>Notifications ({networkCount.notifications})</button>
//       <button>Me ({totalNotificationCount})</button>
//     </>
//   );
// }

// export default App;

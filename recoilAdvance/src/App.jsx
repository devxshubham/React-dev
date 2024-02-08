import { useEffect, useState } from 'react'
import './App.css'

import axios from 'axios'

import { RecoilRoot, useRecoilValue,useRecoilState } from 'recoil'
import { notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sum-server.100xdevs.com/notifications");
        setNetworkCount(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);

      }
    };

    fetchData();
  }, []);

  return (
    <>
      <button>Home</button>
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.message})</button>
      <button>Notifications ({networkCount.notification})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;

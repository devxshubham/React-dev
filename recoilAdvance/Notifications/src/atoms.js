import axios from 'axios';
import { atom, selector } from 'recoil';

export const notificationsAtom = atom({
  key: 'notificationsAtom',
  default: selector({
    key : "notificationsAtomSelector",
    get : async()=>{
      await new Promise( r => setTimeout( r, 4000));
      const response = await axios.get("https://sum-server.100xdevs.com/notifications");
      return response.data
    }
  })
});

export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const notificaitons = get(notificationsAtom);
    return (
      notificaitons.network +
      notificaitons.jobs +
      notificaitons.notifications +
      notificaitons.messaging
    );
  },
});

import { atom, selector } from 'recoil';

export const notificationsAtom = atom({
  key: 'notificationsAtom',
  default: {
    network: 0,
    jobs: 0,
    notifications: 0,
    messaging: 0,
  },
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

// import {atom, selector} from 'recoil'


// export const notificationsAtom = atom({
//     key : "notificationsAtom",
//     default : {
//         network : 0,
//         jobs : 0,
//         notification : 0,
//         message : 0
//     }
// })

// export const totalNotificationSelector = selector({
//     key : "totalNotificationSelector",
//     get : ({get}) => {
//         const notificaitons = get(notificationsAtom)
//         console.log(notificaitons)
//         return notificaitons.network + notificaitons.jobs + notificaitons.notification + notificaitons.message
//     }
// })
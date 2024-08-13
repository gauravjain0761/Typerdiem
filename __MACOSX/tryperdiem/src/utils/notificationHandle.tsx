import notifee, { AndroidImportance, EventType, RepeatFrequency, TimestampTrigger, TriggerType } from "@notifee/react-native";




export const onMessageReceived = (remoteMessage: any) => {
  setAsyncNotifiactionData(remoteMessage?.data);
  onDisplayNotification(remoteMessage);
};

export const  onDisplayNotification =async(message: any)=> {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default Channel",
    importance: AndroidImportance.HIGH,
  });
  notifee.displayNotification({
    title: message.title,
    body: message.body,
    android: {
      channelId,
      pressAction: {
        id: "default",
        launchActivity: "default",
      },
    }
  });
}


export const onCreateTriggerNotification = async(message: any) => {
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default Channel",
    importance: AndroidImportance.HIGH,
  });

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: Date.now() + 600000,
    repeatFrequency: RepeatFrequency.HOURLY,
    alarmManager:true
  };

  await notifee.createTriggerNotification(
    {
      id: '123',
      title: message.title,
      body: message.body,
      android: {
        channelId,
        pressAction: {
          id: "default",
          launchActivity: "default",
        },
      },
    },
    trigger,
  );
}


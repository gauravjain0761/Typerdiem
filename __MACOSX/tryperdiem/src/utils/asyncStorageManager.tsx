import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncKeys = {
  // clear in logout time
  token: "@token",
  user_info: "@user_info",
  user_onboarding: "@user_onboarding",
  user_listData: "@user_listData",
  
  // no clear in logout time
  fcm_token: "@fcm_token",
};

export const clearAsync = async () => {
  await AsyncStorage.multiRemove([
    asyncKeys.token,
    asyncKeys.user_info,
  ]);
};

export const setAsyncToken = async (token: string) => {
  await AsyncStorage.setItem(asyncKeys.token, JSON.stringify(token));
};

export const getAsyncToken = async () => {
  const token = await AsyncStorage.getItem(asyncKeys.token);
  if (token) {
    return JSON.parse(token);
  } else {
    return null;
  }
};

export const setAsyncUserInfo = async (user: any) => {
  await AsyncStorage.setItem(asyncKeys.user_info, JSON.stringify(user));
};

export const getAsyncUserInfo = async () => {
  const userInfo = await AsyncStorage.getItem(asyncKeys.user_info);
  if (userInfo) {
    return JSON.parse(userInfo);
  } else {
    return null;
  }
};

export const setAsyncUserOnboarding = async (user: any) => {
  await AsyncStorage.setItem(asyncKeys.user_onboarding, JSON.stringify(user));
};

export const getAsyncUserOnboarding = async () => {
  const userInfo = await AsyncStorage.getItem(asyncKeys.user_onboarding );
  if (userInfo) {
    return JSON.parse(userInfo);
  } else {
    return null;
  }
};

export const setAsyncUserList = async (user: any) => {
  await AsyncStorage.setItem(asyncKeys.user_listData, JSON.stringify(user));
};

export const getAsyncUserList = async () => {
  const userInfo = await AsyncStorage.getItem(asyncKeys.user_listData );
  if (userInfo) {
    return JSON.parse(userInfo);
  } else {
    return null;
  }
};
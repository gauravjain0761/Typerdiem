import {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {emailCheck, getText, infoToast} from '../../utils/commonFunction';
import {useAppDispatch} from '../../redux/hooks';
import {Input, PrimaryButton, SignInBtn} from '../../components';
import {Icons} from '../../assets';
import {string} from '../../i18n/locales/en';
import {colors} from '../../theme/colors';
import {commonFontStyle, hp, wp} from '../../theme/fonts';
import { screenName } from '../../navigation/screenNames';
import { RouterProps } from '../../utils/types';
import { dispatchNavigation } from '../../utils/globalFunctions';
import { setAsyncToken } from '../../utils/asyncStorageManager';
import { onDisplayNotification } from '../../utils/notificationHandle';

const SignIn = ({navigation, route}: RouterProps) => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);

  const onGooglePress = async () => {
    // onGoogleLogin(async (response) => {
    //   let data = await formDataGoogleLogin(response);
    //   const obj = {
    //     data,
    //     onSuccess: () => {
    //       dispatchNavigation(screenName.bottom_tab_navigator);
    //     },
    //     onFailure: () => {},
    //   };
    //   dispatch(googleSignin(obj));
    // });
  };

  //login with email and password
  const onPressSignIn = async () => {
    if (userName.trim().length === 0) {
      infoToast('Please enter your username');
    } else if (password.trim().length === 0) {
      infoToast('Please enter your password');
    } else if (password.trim().length < 6) {
      infoToast('Your password must be at least 6 characters');
    }else if(userName.trim() !== "admin" || password.trim() !== "password123"){
      infoToast('user not found');
    } else {
      setAsyncToken(true)
      dispatchNavigation(screenName.HomeScreen)
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.signInText}>{getText(string.login.sign_in)}</Text>

        <View style={{height: hp(10)}} />
        <Input
          value={userName}
          placeholder="Enter username"
          label={getText(string.login.userName)}
          onChangeText={(t: string) => setUserName(t)}
        />
        <Input
          value={password}
          autoCorrect={false}
          isShowEyeIcon={true}
          placeholder="* * * * * * *"
          secureTextEntry={isShowPassword}
          label={getText(string.login.password)}
          onChangeText={(t: string) => setPassword(t)}
          onPressEye={() => setIsShowPassword(!isShowPassword)}
        />
        <PrimaryButton
          onPress={onPressSignIn}
          label={getText(string.login.sign_in_button)}
          containerStyle={styles.containerStyle}
        />
        <SignInBtn
          iconName={Icons.google}
          onBtnPress={onGooglePress}
          containerStyle={styles.googleBtn}
          title={getText(string.login.sign_in_with_google)}
        />
       
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingHorizontal: wp(20),
  },
  signInText: {
    alignSelf: 'center',
    marginTop: hp(50),
    marginBottom: hp(5),
    ...commonFontStyle(600, 40, colors.primary),
  },
  googleBtn: {
    // marginTop: hp(22),
    borderWidth: 1,
    borderColor: colors.borderGrey,
  },
  signInTextStyle: {
    color: colors.white,
  },
  forgotPasswordTextStyle: {
    ...commonFontStyle(500, 15, colors.placeholderTextColor),
    marginVertical: hp(15),
    alignSelf: 'flex-start',
  },
  bottomTextStyle: {
    ...commonFontStyle(500, 15, colors.placeholderTextColor),
    alignSelf: 'center',
    marginVertical: hp(10),
  },
  signUpTextStyle: {
    ...commonFontStyle(400, 15, colors.primary),
  },
  guestUserContainer: {
    alignSelf: 'center',
  },
  backIconStyle: {
    height: wp(25),
    width: wp(25),
  },
  backIconContainer: {
    position: 'absolute',
    left: wp(20),
    top: hp(10),
  },
  containerStyle:{
    marginTop:30
  }
});

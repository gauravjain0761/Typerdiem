import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {Icons} from '../../assets';
import {colors} from '../../theme/colors';
import {
  commonFontStyle,
  hp,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../theme/fonts';
import {AppStyles} from '../../theme/appStyles';
import {PrimaryButton} from '../../components';
import {screenName} from '../../navigation/screenNames';
import {dispatchNavigation} from '../../utils/globalFunctions';
import {setAsyncUserOnboarding} from '../../utils/asyncStorageManager';
import {getText} from '../../utils/commonFunction';
import {string} from '../../i18n/locales/en';
import { dummyData } from '../../utils/dummyData';

type Props = {};

const IntroductionScreen = (props: Props) => {
  const flatlistRef = useRef(null);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={AppStyles.flex}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setAsyncUserOnboarding(true);
            dispatchNavigation(screenName.SignIn);//login screen navigation
          }}
          style={styles.skipView}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View>
          <SwiperFlatList
            index={index}
            ref={flatlistRef}
            data={[Icons.w1, Icons.w2, Icons.w3]}
            onChangeIndex={({index}) => {
              setIndex(index);
            }}
            renderItem={({item}: any) => (
              <View>
                <Image style={styles.image} source={item} />
              </View>
            )}
            showPagination
            paginationStyle={{top: SCREEN_HEIGHT / 1.6}}
            paginationStyleItemActive={styles.activeDot}
            paginationStyleItemInactive={styles.inactiveDot}
            contentContainerStyle={{height: SCREEN_HEIGHT / 1.6}}
          />
        </View>
        <Text style={styles.title}>{dummyData[index].title}</Text>
        <Text style={styles.des}>{dummyData[index].subTitle}</Text>
        <PrimaryButton
          onPress={() => {
            //next item show
            if (index < 2) {
              flatlistRef?.current?.scrollToIndex({
                index: index + 1,
                animated: true,
              });
            } else {
              setAsyncUserOnboarding(true);
              dispatchNavigation(screenName.SignIn);//login screen navigation
            }
          }}
          containerStyle={styles.btnStyle}
          label={index < 2 ? 'Next' : 'Login'}
        />
      </View>
    </SafeAreaView>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: SCREEN_WIDTH,
    height: '100%',
  },
  activeDot: {
    backgroundColor: colors.primary,
    height: 10,
    width: 10,
    marginHorizontal: 5,
  },
  inactiveDot: {
    backgroundColor: colors.Surface_Tertiary,
    height: 10,
    width: 10,
    marginHorizontal: 5,
  },
  title: {
    ...commonFontStyle(600, 24, colors.primary),
    textAlign: 'center',
    marginTop: 40,
  },
  des: {
    ...commonFontStyle(400, 14, colors.Text_Tertiary),
    textAlign: 'center',
    marginTop: 5,
  },
  btnStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH * 0.9,
    bottom: hp(2),
    alignSelf: 'center',
  },
  skipText: {
    ...commonFontStyle(400, 18, colors.Text_Tertiary),
  },
  skipView: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    paddingRight: 24,
    paddingTop: 20,
  },
});

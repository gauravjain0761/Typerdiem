import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../theme/colors';
import {commonFontStyle, wp} from '../../theme/fonts';
import {
  clearAsync,
  getAsyncUserList,
  setAsyncUserList,
} from '../../utils/asyncStorageManager';
import {AppStyles} from '../../theme/appStyles';
import {Icons} from '../../assets';
import {dispatchNavigation} from '../../utils/globalFunctions';
import {screenName} from '../../navigation/screenNames';
import {PrimaryButton} from '../../components';
import {string} from '../../i18n/locales/en';
import {getText} from '../../utils/commonFunction';
import AddEvent from '../../components/home/AddEventModal';
import AddEventModal from '../../components/home/AddEventModal';
import moment from 'moment';
import BackgroundTimer from 'react-native-background-timer';
import Notifications from '../../utils/Notifications';
import {
  onCreateTriggerNotification,
  onDisplayNotification,
} from '../../utils/notificationHandle';
import {listData} from '../../utils/dummyData';

type Props = {};

const HomeScreen = (props: Props) => {
  const [list, setList] = useState([]); //user event list state
  const [addEvent, setAddEvent] = useState(false); //add event modal state

  const onUserData = async () => {
    const listOfData = await getAsyncUserList();
    if (listOfData) {
      setList(listOfData);
    } else {
      setList(listData);
      setAsyncUserList(listData);
    }
  };

  useEffect(() => {
    onUserData(); //user get all event list
  }, [addEvent]);

  //logout function
  const onLogoutPress = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await clearAsync();
          dispatchNavigation(screenName.SignIn);
        },
      },
    ]);
  };

  //change toggle event
  const changeValue = item => {
    const update = list.map(list => {
      if (list.id == item.id) {
        {
          item.isSelect &&
            onCreateTriggerNotification({
              id: item?.id,
              title: item.name,
              body: item.name,
            });
        }
        return {
          ...item,
          isSelect: !list.isSelect,
        };
      } else {
        return {
          ...list,
        };
      }
    });
    setList(update);
    setAsyncUserList(update);
  };

  //open event modal
  const onEventPress = () => {
    setAddEvent(true);
  };

  //render event list
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <View style={styles.leftView}>
          <Text style={styles.idText}>{item?.id}</Text>
          <Text style={styles.itemText}>Name : {item?.name}</Text>

          <Text style={styles.itemText}>
            Date :{' '}
            {item?.date
              ? moment(item?.date).format('DD-MM-YYYY')
              : moment(new Date()).format('DD-MM-YYYY')}
          </Text>
        </View>
        <Switch
          value={item?.isSelect}
          onChange={() => changeValue(item)}
          onMagicTap={() => changeValue(item)}
          style={{}}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={AppStyles.mainWhiteContainer}>
      <View style={styles.headerView}>
        <View />
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity onPress={onLogoutPress}>
          <Image source={Icons.logout} style={styles.logout} />
        </TouchableOpacity>
      </View>
      <FlatList data={list} renderItem={renderItem} />
      <PrimaryButton
        onPress={onEventPress}
        label={getText(string.home.event)}
        containerStyle={styles.containerStyle}
      />
      <AddEventModal isVisible={addEvent} onClose={() => setAddEvent(false)} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerView: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: wp(16),
    marginTop: 10,
    alignItems: 'center',
  },
  headerText: {
    ...commonFontStyle(500, 24, colors.black),
  },
  cardView: {
    elevation: 1,
    marginVertical: 8,
    paddingVertical: 20,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  leftView: {
    flex: 1,
  },
  idText: {
    ...commonFontStyle(500, 15, colors.black),
  },
  itemText: {
    ...commonFontStyle(500, 15, colors.primary),
  },
  logout: {
    width: wp(24),
    height: wp(24),
  },
  containerStyle: {
    marginHorizontal: 24,
  },
});

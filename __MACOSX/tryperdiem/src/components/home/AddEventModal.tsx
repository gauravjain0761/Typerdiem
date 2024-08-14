import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../theme/colors';
import ReactNativeModal from 'react-native-modal';
import {commonFontStyle, hp, wp} from '../../theme/fonts';
import {Icons} from '../../assets';
import PrimaryButton from '../common/PrimaryButton';
import {getText, infoToast} from '../../utils/commonFunction';
import {string} from '../../i18n/locales/en';
import Input from '../common/Input';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateSelect from '../common/DateSelect';
import moment from 'moment';
import {getAsyncUserList, setAsyncUserList} from '../../utils/asyncStorageManager';

type Props = {};

const AddEventModal = ({isVisible, onClose, onConfirm}) => {
  const [addText, setAddText] = useState('');
  const [dateValue, setDateValue] = useState('');


  //new add event function
  const onPressNewAdd = async () => {
    if (addText.trim().length == 0) {
      infoToast('Please enter your event');
    } else if (dateValue === '') {
      infoToast('Please select date');
    } else {
      const listOfData = await getAsyncUserList();
      const listData = [
        ...listOfData,
        {id: listOfData.length+1, name: addText, date: dateValue},
      ];
      setAsyncUserList(listData);
      setDateValue('');
      setAddText('');
      onClose()
    }
  };
  return (
    <ReactNativeModal
      isVisible={isVisible}
      statusBarTranslucent
      animationIn={'fadeInUpBig'}
      animationInTiming={1000}
      animationOutTiming={1000}
      style={{margin: 0, justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.rowStyle}>
          <Text style={styles.itemText}>{getText(string.home.newEvent)}</Text>
          <TouchableOpacity
            onPress={() => {
              onClose(); 
              setDateValue('');
              setAddText('');
            }}>
            <Image source={Icons.close} style={styles.close} />
          </TouchableOpacity>
        </View>
        <Input
          value={addText}
          placeholder={getText(string.home.add_here)}
          label={getText(string.home.event_name)}
          onChangeText={(t: string) => setAddText(t)}
        />
        <DateSelect
          value={dateValue}
          placeholder={getText(string.home.dateText)}
          label={getText(string.home.date)}
          onChangeText={(t: string) => setDateValue(t)}
        />
        <PrimaryButton
          extraStyle={styles.signupButton}
          onPress={onPressNewAdd}
          label={getText(string.home.event)}
        />
      </View>
    </ReactNativeModal>
  );
};

export default AddEventModal;

const styles = StyleSheet.create({
  itemText: {
    ...commonFontStyle(400, 18, colors.black),
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: hp(20),
    flex: 1,
  },
  container: {
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingHorizontal: wp(16),
    paddingVertical: hp(10),
    marginHorizontal: wp(16),
  },
  check1: {
    width: 18,
    height: 18,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'space-between',
    paddingVertical: 15,
    // paddingHorizontal: 10,
  },
  listText: {
    ...commonFontStyle(400, 16, colors.black),
  },
  inputStyle: {
    ...commonFontStyle(400, 16, colors.black),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grayBE,
    paddingLeft: 12,
    height: hp(50),
  },
  signupButton: {
    marginTop: hp(20),
    alignSelf: 'center',
  },
  close: {
    height: wp(22),
    width: wp(22),
    top: -30,
    position: 'absolute',
    right: 0,
    tintColor: colors.black,
  },
});

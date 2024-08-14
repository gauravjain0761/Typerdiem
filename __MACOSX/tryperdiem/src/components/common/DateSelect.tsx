//import liraries
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {InputProps} from '../../utils/types';
import {commonFontStyle, hp, wp} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import {Icons} from '../../assets';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useState} from 'react';
import {getText} from '../../utils/commonFunction';
import {string} from '../../i18n/locales/en';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateSelect = ({
  placeholder,
  label,
  value,
  onSubmitEditing,
  onChangeText,
}: InputProps) => {
  const [timeData, setTimeData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangePress = (date: Date) => {
    setShowDatePicker(false);
    onChangeText(date);
    setTimeData(date);
  };

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.labelTextStyle}>
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.firstThemeContainer}>
        <Text
          style={[
            styles.inputStyle,
            {color: value == '' ? colors.borderGreyLight : colors.black},
          ]}>
          {value == ''
            ? getText(string.home.dateText)
            : moment(value).format('DD-MM-YYYY')}
        </Text>
        <Image source={Icons.calenadar} style={styles.calenadar} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        date={timeData}
        onConfirm={onChangePress}
        onCancel={() => setShowDatePicker(false)}
        minimumDate={new Date()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(25),
  },
  labelTextStyle: {
    ...commonFontStyle(400, 18, colors.primary),
    marginBottom: hp(5),
  },
  firstThemeContainer: {
    height: hp(60),
    borderRadius: 10,
    marginTop: hp(5),
    backgroundColor: colors.inputBack,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  secondThemeContainer: {
    height: hp(60),
    borderRadius: 10,
    marginTop: hp(5),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    borderWidth: 1.5,
    borderColor: colors.inputBorder,
  },
  inputStyle: {
    flex: 1,
    padding: 0,
    ...commonFontStyle(400, 18, colors.black),
  },
  calenadar: {
    height: hp(24),
    width: hp(24),
    tintColor: colors.borderGreyLight,
  },
  pickerContainer: {
    backgroundColor: 'lightblue', // Custom background color
    borderRadius: 10,
    padding: 10,
  },
});

export default DateSelect;

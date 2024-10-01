import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import Icons from '../../Assets/Icons';
import Images from '../../Assets/Images';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import ThemeColors from '../../Utils/Colors';
import Fonts from '../../Utils/Fonts';
import Loader from '../Common/Loader';
import MessageAlert from '../Common/MessageAlert';
import {
  getWeatherIcon,
  getWeatherIconSize,
} from '../../Utils/WeatherConditions';

const WeatherCard = ({cityName, weatherData}) => {
  return (
    <ImageBackground source={Images.WeatherCardBack} style={styles.card}>
      <Text style={styles.temperature}>
        {weatherData?.currentConditions?.temp?.toFixed(0)}°
      </Text>
      <View style={styles.lowHigh}>
        <Text style={styles.lowHighText}>
          {`L:${weatherData?.days?.tempmin?.toFixed(0) || 0}° `}
        </Text>
        <Text style={styles.lowHighText}>
          {`H:${weatherData?.days?.tempmax?.toFixed(0) || 0}°`}
        </Text>
      </View>
      <Text style={styles.location}>
        {cityName?.neighborhood?.split(' ').slice(0, 2).join(' ') ||
          cityName?.city?.split(' ').slice(0, 2).join(' ')}
      </Text>
      <View style={styles.weatherIconContainer}>
        <Image
          source={getWeatherIcon(weatherData?.currentConditions?.icon)}
          style={getWeatherIconSize(weatherData?.currentConditions?.icon)}
        />
        <Text style={styles.weatherDescription}>
          {weatherData?.currentConditions?.conditions}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: rw(88),
    height: rh(21.7),
    marginVertical: rh(1.25),
    paddingHorizontal: rw(4.2),
    paddingTop: rh(0.9),
  },
  temperature: {
    color: ThemeColors.White,
    fontSize: rf(8.2),
    fontFamily: Fonts.ExtraLight,
  },
  highLow: {
    color: ThemeColors.White,
    fontSize: rf(1.9),
    fontFamily: Fonts.Light,
  },
  location: {
    fontFamily: Fonts.Light,
    color: ThemeColors.White,
    fontSize: rf(2),
    marginTop: -2,
    marginLeft: 5,
  },
  lowHigh: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  lowHighText: {
    fontFamily: Fonts.Light,
    color: ThemeColors.DarkGray,
    fontSize: rf(2),
  },
  weatherIconContainer: {
    position: 'absolute',
    right: 17,
    gap: 12,
    alignItems: 'center',
  },
  weatherDescription: {
    color: ThemeColors.White,
    fontSize: rf(1.9),
    fontFamily: Fonts.ExtraLight,
    alignSelf: 'flex-end',
    right: 10,
  },
});

export default memo(WeatherCard);
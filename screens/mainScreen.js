import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { search } from '../mockData';
import { movie } from '../mockData';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  screen: {
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  img: {
    width: 300,
    height: 466,
    borderRadius: 20,
    marginHorizontal: 'auto',
  },
  touchElem: {
    marginVertical: 4,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    paddingTop: Constants.statusBarHeight,
    width: '100%',
    borderColor: 'black',
    height: 30,

    borderWidth: 1,
  },
});

const MovieScreen = ({ navigation }) => (
  <View style={styles.container}>
  <ScrollView>
    <TextInput style={styles.input} />
    <View style={styles.mainBox}>
      {search['Search'].map((object) => (
        <TouchableOpacity
          style={styles.touchElem}
          onPress={() => {
            navigation.navigate('Movie', { movieInfo: movie });
          }}>
          <Image style={styles.img} source={{ uri: `${object['Poster']}` }} />
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.screen}></View>
    </ScrollView>
  </View>
);

export default MovieScreen;

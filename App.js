/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Banner from './src/components/Banner';
import Post from './src/components/Post';


const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Banner/>
      <ScrollView>
      <Post avatar={require('./src/assets/images/avatar/avatar.jpg')} content={require('./src/assets/images/post/post1.jpg')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar1.jpg')} content={require('./src/assets/images/post/post2.jpg')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar2.jpg')} content={require('./src/assets/images/post/post3.png')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar3.jpg')} content={require('./src/assets/images/post/post4.png')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar.jpg')} content={require('./src/assets/images/post/post5.png')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar1.jpg')} content={require('./src/assets/images/post/post6.jpg')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar2.jpg')} content={require('./src/assets/images/post/post1.jpg')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar3.jpg')} content={require('./src/assets/images/post/post2.jpg')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar.jpg')} content={require('./src/assets/images/post/post3.png')}/>
      <Post avatar={require('./src/assets/images/avatar/avatar1.jpg')} content={require('./src/assets/images/post/post4.png')}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerContainer:{
    backgroundColor:'gray',
    padding: 8,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

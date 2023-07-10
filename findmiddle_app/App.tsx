/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import styled from 'styled-components/native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapComponent from './src/components/MapComponent';
import ProfileComponent from './src/components/ProfileComponent';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  useEffect(() => {}, []);

  const NavigationBar = () => {
    const navigation = useNavigation();
    return (
      <NavigationView>
        <NavigationButton
          title={'홈'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <NavigationButton
          title={'이용자 등록'}
          onPress={() => {
            navigation.navigate('People');
          }}
        />
      </NavigationView>
    );
  };

  const NavigationView = styled.View`
    height: 60px;
    width: 100%;
    background-color: blue;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `;

  const NavigationButton = styled.Button`
    flex: 1;
  `;

  const MemberView = () => {
    return (
      <MemberScrollView>
        {new Array(30).fill(0).map((_, index) => {
          return (
            <MemberItemView key={`Member-${index}`}>
              <Text>이름 : 김정규</Text>
              <Text>사는곳 : 어린이대공원역</Text>
              <Text>선호 지역 : 광진구, 강남구</Text>
            </MemberItemView>
          );
        })}
      </MemberScrollView>
    );
  };

  const MemberScrollView = styled.ScrollView`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    box-sizing: border-box;
    padding: 5% 10%;
  `;

  const MemberItemView = styled.View`
    flex: 1;
    margin-bottom: 10%;
    & > Text {
      background-color: gray;
      margin: 10% 0;
    }
  `;

  const HomeScreen = () => {
    return (
      <>
        <MapComponent />
        <MemberView />
      </>
    );
  };

  const ProfileScreen = ({navigation, route}: any) => {
    return <ProfileComponent />;
  };

  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name={'People'} component={ProfileScreen} />
        </Stack.Navigator>
        <View>
          <NavigationBar />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;

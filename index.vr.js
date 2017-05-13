import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,Image
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('26820012.jpg')}/>
        <Text
          style={{
            backgroundColor: '#000',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 1],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              {translate: [-0.5, 2, -4]},
              {rotate: '5.8deg'}
            ],
          }}>
          Hello World
        </Text>
        <Text
          style={{
            backgroundColor: '#000',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 1],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [3, 0, 3]}],
          }}>
          Hello World
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

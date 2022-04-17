import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

class NavBtn() {
  state = {}
  return (
    <View>
      <NearBy />
      <WorldWide />
    </View>
  )
}
const NearBy = () => {
  <Button style={styles.nearby}>Near by</Button>
}

const WorldWide = () => {
  <Button style={styles.worldwide}>Near by</Button>
}

const styles = StyleSheet.create({
  nearby: {
    border: '1px solid red',
    width: '30rem',
    borderRadius: 10
  },
  worldwide: {
    border: '1px solid blue',
    width: '30rem',
    borderRadius: 10
  },
});

export default NavBtn;



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

function NavBtn(props) {
  state = {}
  return (
    <View>
      <NearBy />
      <WorldWide />
    </View>
  )
}
const NearBy = () => {
  <TouchableOpacity>
    <Button style={styles.nearby}>Near by</Button>
  </TouchableOpacity>
}

const WorldWide = () => {
  <TouchableOpacity>
    <Button style={styles.worldwide}>World Wide</Button>
  </TouchableOpacity>
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



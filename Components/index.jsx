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
    <View style={styles.view}>
      <NearBy />
      <WorldWide />
    </View>
  )
}
const NearBy = () => {
  <TouchableOpacity>
    <Button style={styles.nearby} onPress={nearby}>Near by</Button>
  </TouchableOpacity>
}

const WorldWide = () => {
  <TouchableOpacity>
    <Button style={styles.worldwide} onPress={worldwide}>World Wide</Button>
  </TouchableOpacity>
}




const styles = StyleSheet.create({
  view : {
    display: 'flex',
    justifyContent: 'center',
    //margin-top: 1rem;
  },
  nearby: {
    border: 'none',
    width: '8rem',
    borderRadius: 15,
    height: '2rem',
    color: 'white',
    background: '#0ee100'
  },
  worldwide: {
    width: '8rem',
    borderRadius: 15,
    height: '2rem'
    border: 'none',
    color: '#0ee100',
    background: 'transparent'
    
  },
});

const nearby = () => {
  styles.nearby[borderBottom] = '1px solid #0ee100';
}
const worldwide = () => {
  styles.worldwide[borderBottom] = '1px solid #0ee100';
    
  }
}
export default NavBtn;



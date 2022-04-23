import {
  StatusBar
} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import {NavBtn} from './Components/NavBtn.jsx'

export default function App() {
  return ( 
  <SafeAreaView style = {styles.container}> 
    <NavBtn />
  </SafeAreaView>
    
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',

    },
  });
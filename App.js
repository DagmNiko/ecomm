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


export default function App() {
  const click = () => { < Text > clicked!</Text >
  }
  return ( < SafeAreaView style = {
    styles.container
  } > < TouchableOpacity onPress = {
    click
  } > < Image source = {
    require("./assets/favicon.png")}/ > < /TouchableOpacity > < /SafeAreaView >
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
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('')
  const [upperLimit, setUpperLimit] = useState(0)
  const [lowerLimit, setLowerLimit] = useState(0)

  calc = a => {
    setAge(a)
    let x = (220-Number(a))
    let upper = x*0.85
    let lower = x*0.65

    setUpperLimit(Math.round(upper))
    setLowerLimit(Math.round(lower))
  }
  return (
    <View style={styles.container}>
      <Text>Heart Rate Limits based by Age.</Text>
      <TextInput placeholder='Enter Age in years'
      keyboardType='decimal-pad'
      value={age} onChangeText={text => calc(text)}
      style={styles.field}
      />

    <Text style={styles.field}>Hr limits</Text> 
    <Text style={styles.field}>{lowerLimit.toString()} - {upperLimit.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

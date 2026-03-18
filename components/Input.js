

import { StyleSheet, Text, TextInput, View } from 'react-native'


const Input = ({title, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        border: '1px solid black',
        margin: 3,
        padding: 3,
        borderRadius: 3,
        backgroundColor: 'gold',        
    },
    title: {
        textAlign: 'center',
    },
    input: {
        border: '1px solid black',
        margin: 3,
        padding: 3,
        borderRadius: 3,
        backgroundColor: 'white',        
    }
})

import { Button, StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
import { useState } from 'react'

const Reg = ( {navigaton} ) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [id, setId] = useState()

    function save() {
        console.log('Mentés...')
    }
  return (
    <View style={styles.container}>
      <Text>Regisztráció</Text>

        <Input
            title="Név"
            onChangeText={(text) => setName(text)}
            value={name}
        />
        <Input
            title="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
        />

        <View style={styles.button}>
            <Button 
                title="Mentés"
                onPress={() => save()}
            />
        </View>

        <Input
            title="Id"
            onChangeText={(text) => setId(text)}
            value={id}
        />



    </View>
  )
}

export default Reg

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        margin: 3,
    }
})
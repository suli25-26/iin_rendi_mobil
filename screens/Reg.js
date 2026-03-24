
import { Button, StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Reg = ( {navigaton} ) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [id, setId] = useState()

    async function save() {
        console.log('Mentés...')
        const url = 'http://localhost:8000/api/visits'
        try {
          let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                eventId: 1
            }),
            headers: {
                "Content-Type": "application/json"
            }
          })
          let result = await response.json()
          console.log(result.data.id)
          AsyncStorage.setItem('rendiId', result.data.id)
        } catch (error) {
            console.error('Hiba! A regisztráció sikeretelen')
            console.error(error)
        }

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
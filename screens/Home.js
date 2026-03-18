
import { Button, StyleSheet, Text, View } from 'react-native'
import Reader from '../components/Reader'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>QR-kód olvasása</Text>
      <Reader />

        <View>
            <Button 
                title="Regisztráció"
                onPress={() => navigation.navigate('Reg')}
            />
        </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


import { Button, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { startArriving } from '../services/visitService'

const Reader = () => {
    const [permission, requestPermission] = useCameraPermissions()
    const [scanned, setScanned] = useState(false)

    if(!permission) return <View />

    if(!permission.granted) {
        return(
            <View style={styles.container}>
                <Text>Engedély szükséges a kamerához</Text>
                <Button 
                    title="Engedélyez"
                    onPress={requestPermission}
                />
            </View>
        )
    }

    const handleBarcodeScanned = ({ type, data }) => {
        setScanned(true)
        alert('Üzenet: ' + data)
        startArriving()
    }

  return (
    <View style={styles.container}>
      <CameraView 
        style={StyleSheet.absoluteFill}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
            barcodeTypes: ["qr"],
        }}
      />
      {scanned && (
        <View style={styles.buttonContainer}>
            <Button 
                title="Vissza"
                onPress={() => setScanned(false)}
            />
        </View>
      )}
    </View>
  )
}

export default Reader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
    },
})

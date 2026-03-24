import AsyncStorage from '@react-native-async-storage/async-storage';

const host = 'http://localhost:8000/api/visits'

const startArriving = async () => {
    let id = await AsyncStorage.getItem('rendiId')
    const url = host + '/' + id
    console.log('id: ', id)
    let response = await fetch(url)
    let result = await response.json()
    console.log(result.data.id == id)
    if (result.data.id == id) {
        updateArrived(result.data)
    }
}
const updateArrived = async (data) => {
    const url = host + '/' + data.id
    let respone = await fetch(url, {
        method: 'put',
        body: JSON.stringify({
            arrived: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

const createVisit = async (visit) => {
    const url = 'http://localhost:8000/api/visits'
    try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: visit.name,
                email: visit.email,
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

export { startArriving, createVisit }
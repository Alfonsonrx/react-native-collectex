import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorite({ miniatureId }) {
    console.log(miniatureId)
    const addFavorite = () => {
        console.log(`Agregar miniature numero: ${miniatureId}`)
    }
    return (
        <Icon
            name='heart'
            color='#fff'
            size={20}
            onPress={() => addFavorite()}
        />
    )
}
import React from 'react'
import { Image } from 'react-native'
import { Button } from 'react-native-elements'

export default function HeaderHamburgerButton({ navigation }) {
    return (
        <Button
            containerStyle={{ marginLeft: 10 }}
            onPress={() => { navigation.toggleDrawer() }}
            type="clear"
            icon={<Image source={require('../../assets/menu.png')} />}
        />

    )
}

import React from 'react'
import { Text, Dimensions, TouchableHighlight, StyleSheet } from 'react-native'

export default (props) => {

    const stylesButton = [style.button]

    if (props.double) stylesButton.push([style.doubleButton])
    if (props.op) stylesButton.push([style.operationButton])

    
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({

    button: {
        fontSize: 40,
        height: (Dimensions.get('window').width / 4),
        width: (Dimensions.get('window').width / 4),
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderColor: '#000'

    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#fa8231'
    },
    doubleButton: {
        width: (Dimensions.get('window').width / 4) * 2,
    }
})
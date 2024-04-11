import { StyleSheet, View } from "react-native"
import { ContainerProp } from "./type"

const useStyle = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: 'white'
    }
})


export const Container = ({children,...rest}: ContainerProp) => {
    return (
        <View  style={useStyle.container} {...rest}>
            {children}
        </View>
    )
}
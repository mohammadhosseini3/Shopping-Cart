import { StyleSheet,Text,View } from "react-native";

const Header = ({title}) => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.text}>{title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title : "Shopping List"
};

const styles = StyleSheet.create({
    header:{
        height:60,
        backgroundColor:"darkblue",
        alignItems : "center",
        justifyContent : "center"
    },
    text : {
        color:"white",
        fontSize: 30
    }
})

export default Header;
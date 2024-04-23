import { StyleSheet,Text,View,TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";

const AddItem = ({addItem}) => {
    const [text,setText] = useState('')
    const onChange = (textValue) => setText(textValue)
    return (
        <View>
            <TextInput placeholder="Add Item ...." style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn} onPress={addItem =()=>{addItem}}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={30}/>
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{
        backgroundColor:"#2bad8",
        padding : 9,
        margin:5
    },
    btnText : {
        color:"darkslateblue",
        fontSize:20,
        textAlign:'center'
    }
})

export default AddItem;
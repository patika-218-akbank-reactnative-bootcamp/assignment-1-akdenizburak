import React from 'react';
import { StyleSheet, View} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const PostHeaderOptions=()=>{
    return(
        <View style={styles.container}>
        <MaterialIcons name="more-horiz" size={30} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:30,
        backgroundColor: "white",
        alignSelf:"center",
    },
});

export default PostHeaderOptions;
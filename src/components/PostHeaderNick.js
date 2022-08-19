import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostHeaderNick=()=>{
    return(
        <Text style={styles.container}>akdenizburakk</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "60%",
        height: 20,
        fontSize: 18,
        color:"black",
        fontWeight: "bold",
        backgroundColor: "white",
        marginLeft:10,
        textAlign:'left',
        alignSelf:"center"
    },
});

export default PostHeaderNick;
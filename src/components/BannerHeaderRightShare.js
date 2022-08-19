import React from 'react';
import { StyleSheet, Text, View } from "react-native";


const BannerHeaderRightShare=()=>{
    return(
        <Text style={styles.container}>X</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        fontSize: 30,
        color:"black",
        fontWeight: "bold",
        backgroundColor: "white",
        marginTop:10,
        textAlign:'center',
    },
});

export default BannerHeaderRightShare;
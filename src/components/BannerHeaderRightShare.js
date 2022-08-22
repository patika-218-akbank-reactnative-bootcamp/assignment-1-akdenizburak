import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons'



const BannerHeaderRightShare=()=>{
    return(
        <Octicons name="diff-added" size={25} color="black"/>
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
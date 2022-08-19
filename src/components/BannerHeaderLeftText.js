import { StyleSheet, Text } from "react-native"
import React from "react";


const BannerHeaderLeftText=()=>{
    return(
        <Text style={styles.container}>Instagram</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "60%",
        height: 40,
        fontSize: 30,
        color:"black",
        fontWeight: "bold",
        backgroundColor: "white",
        marginLeft:20,
        textAlign:'center',
        marginTop:10,
        textAlign:'center',
    },
});
export default BannerHeaderLeftText;
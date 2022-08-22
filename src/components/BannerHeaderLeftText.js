import { Image, StyleSheet, Text } from "react-native"
import React from "react";


const BannerHeaderLeftText=()=>{
    return(
        <Image
        style={styles.image}
        source={require('../assets/images/logo/logo.png')}
        />
    )
}

const styles = StyleSheet.create({
    image: {
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
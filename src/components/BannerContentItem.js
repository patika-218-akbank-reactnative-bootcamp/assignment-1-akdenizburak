import { StyleSheet, View } from "react-native";
import React from "react";

const BannerContentItem=()=>{
    return(
        <View style={styles.imageContainer}>
        </View>
    )
}

const styles=StyleSheet.create({
    imageContainer:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:"white",
        borderWidth:3,
        borderColor:"firebrick",
        marginLeft:10,
        alignSelf:"center",
    },
})

export default BannerContentItem;
import { Image, StyleSheet, View } from "react-native";
import React from "react";

const PostHeaderAvatar=({imgURL})=>{
    return(
        <View style={styles.imageContainer}>
            <Image source={imgURL}/>
        </View>
    )
}

const styles=StyleSheet.create({
    imageContainer:{
        width:40,
        height:40,
        borderRadius:50,
        borderColor:"black",
        borderWidth:1,
        backgroundColor:"white",
        marginLeft:10,
        alignSelf:"center"
    },
})

export default PostHeaderAvatar;
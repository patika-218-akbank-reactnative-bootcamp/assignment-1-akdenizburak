import { Image, StyleSheet, View } from "react-native";
import React from "react";

const PostHeaderAvatar=({imgURL})=>{
    return(
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={imgURL}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:40,
        height:40,
        borderRadius:50,
        borderColor:"black",
        borderWidth:1,
        backgroundColor:"white",
        marginLeft:10,
        alignSelf:"center",
        overflow:"hidden"
    },
    image:{
        width:"100%",
        height:"100%",
    }
})

export default PostHeaderAvatar;
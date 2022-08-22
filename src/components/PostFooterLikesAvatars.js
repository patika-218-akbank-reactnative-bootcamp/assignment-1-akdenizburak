import { Image, StyleSheet, View } from "react-native";
import React from "react";

const PostFooterLikesAvatars = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image1Container} source={require('../assets/images/avatar/avatar.jpg')}/>
            <Image style={styles.image2Container} source={require('../assets/images/avatar/avatar1.jpg')}/>
            <Image style={styles.image3Container} source={require('../assets/images/avatar/avatar3.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "30%",
        height: 30,
        flexDirection:"row",
    },
    image1Container: {
        left:5,
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    image2Container: {
        position: "absolute",
        left:22,
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    image3Container: {
        position: "absolute",
        left:44,
        width: 30,
        height: 30,
        borderRadius: 50
    },
})

export default PostFooterLikesAvatars;
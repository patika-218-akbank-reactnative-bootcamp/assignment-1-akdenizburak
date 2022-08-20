import { Image, StyleSheet, View } from "react-native";
import React from "react";

const PostFooterLikesAvatars = () => {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imageContainer}>
                <View style={styles.imageContainer}>

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: "black",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        backgroundColor: "white",
        alignSelf: "flex-start",
        marginLeft:10,
        
    },
})

export default PostFooterLikesAvatars;
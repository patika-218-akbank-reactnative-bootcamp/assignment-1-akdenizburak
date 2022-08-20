import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostFooterLikesNicks from "./PostFooterLikesNicks";
import PostFooterLikesAvatars from "./PostFooterLikesAvatars";

const PostFooterLikes=()=>{
    return(
        <View style={styles.container}>
            <PostFooterLikesAvatars/>
            <PostFooterLikesNicks/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        flexDirection:"row",
        alignItems:"center",
        marginLeft:10,
        backgroundColor:"white"
    },
});

export default PostFooterLikes;
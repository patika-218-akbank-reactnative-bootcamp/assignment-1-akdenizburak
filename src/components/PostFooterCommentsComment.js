import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostFooterCommentsComment=()=>{
    return(
        <Text style={styles.container}>Lorem ipsum dolor si amet. lorem ipsum dolor si amet. Lorem ipsum dolor si amet.</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: "75%",

        height: 75,
        fontSize: 15,
        color:"black",
        fontWeight:"normal",

        
        },
});

export default PostFooterCommentsComment;
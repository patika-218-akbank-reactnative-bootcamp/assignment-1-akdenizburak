import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PostFooterCommentsComment=()=>{
    return(
        <Text style={styles.container}>lorem ipsum dolor si amet. lorem ipsum dolor si amet.</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "70%",
        height: 75,
        fontSize: 15,
        color:"black",
        fontWeight: "bold",

        
        },
});

export default PostFooterCommentsComment;
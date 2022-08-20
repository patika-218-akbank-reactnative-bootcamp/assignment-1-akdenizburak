import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostFooterCommentsNick from "./PostFooterCommentsNick";
import PostFooterCommentsComment from "./PostFooterCommentsComment";

const PostFooterComments=()=>{
    return(
        <View style={styles.container}>
            <PostFooterCommentsNick/>
            <PostFooterCommentsComment/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 75,
        fontSize: 15,
        color:"black",
        fontWeight: "bold",
        backgroundColor:"white",
        flexDirection:"row",
        marginTop:5
        },
});

export default PostFooterComments;
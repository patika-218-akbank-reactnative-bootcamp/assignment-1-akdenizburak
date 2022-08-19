import React from 'react';
import { View, StyleSheet } from 'react-native'
import PostFooterButtons from './PostFooterButtons';
import PostFooterLikes from './PostFooterLikes';

const PostFooter = () => {
    return (
        <View style={styles.container}>
            <PostFooterButtons/>
            <PostFooterLikes/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "30%",
        backgroundColor:"purple",
    },
});

export default PostFooter;
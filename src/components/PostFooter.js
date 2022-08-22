import React from 'react';
import { View, StyleSheet } from 'react-native'
import PostFooterButtons from './PostFooterButtons';
import PostFooterLikes from './PostFooterLikes';
import PostFooterComments from './PostFooterComments';

const PostFooter = () => {
    return (
        <View style={styles.container}>
            <PostFooterButtons/>
            <PostFooterLikes/>
            <PostFooterComments/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor:"white"
    },
});

export default PostFooter;
import React from 'react';
import { View, StyleSheet } from 'react-native'
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

const Post = ({avatar,content}) => {
    return (
        <View style={styles.container}>
            <PostHeader imgURL={avatar}/>
            <PostContent imgURL={content}/>
            <PostFooter/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 500,
        borderBottomColor:"gray",
        borderBottomWidth:1,
    },
});

export default Post;
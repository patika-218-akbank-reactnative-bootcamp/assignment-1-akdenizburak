import React from 'react';
import { View, StyleSheet } from 'react-native'
import PostHeaderAvatar from './PostHeaderAvatar';
import PostHeaderNick from './PostHeaderNick';
import PostHeaderOptions from './PostHeaderOptions';

const PostHeader = ({imgURL}) => {
    return (
        <View style={styles.container}>
            <PostHeaderAvatar imgURL={imgURL}/>
            <PostHeaderNick/>
            <PostHeaderOptions/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "13%",
        backgroundColor:"white",
        flexDirection:"row",
    },
});

export default PostHeader;
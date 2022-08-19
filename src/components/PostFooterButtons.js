import React from 'react';
import { StyleSheet, View } from 'react-native';

import PostFooterButtonsComment from './PostFooterButtonsComment';
import PostFooterButtonsLike from './PostFooterButtonsLike';
import PostFooterButtonsShare from './PostFooterButtonsShare';


const PostFooterButtons = () => {
    return (
        <View style={styles.container}>
            <PostFooterButtonsLike />
            <PostFooterButtonsComment />
            <PostFooterButtonsShare />
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        width:"30%",
        height:35,
        flexDirection:"row",
        marginLeft:10,
        justifyContent:"space-between",
    }
})

export default PostFooterButtons;
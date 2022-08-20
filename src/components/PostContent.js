import React from 'react';
import { View, StyleSheet, Image } from 'react-native'

const PostContent = ({imgURL}) => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={imgURL}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "55%",

    },
    image:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    }
});

export default PostContent;
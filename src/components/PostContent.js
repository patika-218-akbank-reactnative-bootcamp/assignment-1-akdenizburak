import React from 'react';
import { View, StyleSheet, Image } from 'react-native'

const PostContent = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/400x400.jpg')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "55%",
        
    },
});

export default PostContent;
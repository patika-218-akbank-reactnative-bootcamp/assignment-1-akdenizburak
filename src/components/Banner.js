import React from 'react';
import { View, StyleSheet } from 'react-native'
import BannerContent from './BannerContent';
import BannerHeader from './BannerHeader';

const Banner = () => {
    return (
        <View style={styles.container}>
            <BannerHeader/>
            <BannerContent/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 130,
        backgroundColor:"white",
        borderBottomColor:"lightgray",
        borderBottomWidth:1
    },
});

export default Banner;
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BannerContentItem = ({ imgURL, userName }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={imgURL} />
            </View>
            <Text style={styles.text}>{userName}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#E91E8E",
        marginLeft: 10,
        alignSelf: "center",
        overflow: "hidden",
        padding:2
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius:50,
    },
    text:{
        alignSelf:"center",
        color:"black",
        fontSize:12,
        marginTop:2,
    }

})

export default BannerContentItem;
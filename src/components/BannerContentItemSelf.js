import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const BannerContentItemSelf = ({ imgURL}) => {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={imgURL} />
            </View>
            <Text style={styles.addBadge}>+</Text>
            <Text style={styles.text}>Your Story</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "white",

        marginLeft: 10,
        alignSelf: "center",
        overflow: 'hidden',
    },
    addBadge: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "dodgerblue",
        borderColor: "white",
        borderWidth: 2,
        marginBottom: 1,
        position: "absolute",
        left: 60,
        top: 40,
        color: "white",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: "100%"
    },
    text:{
        alignSelf:"center",
        marginLeft:10,
        marginTop:2,
        fontSize:12
    }
})

export default BannerContentItemSelf;
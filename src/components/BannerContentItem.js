import { Image, StyleSheet, View } from "react-native";
import React from "react";

const BannerContentItem = ({ imgURL }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={imgURL} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "firebrick",
        marginLeft: 10,
        alignSelf: "center",
        overflow:"hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }

})

export default BannerContentItem;
import BannerContentItem from "./BannerContentItem";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BannerContentItemSelf from "./BannerContentItemSelf";

const BannerContent = () => {
    return (
        <ScrollView horizontal>
            <BannerContentItemSelf/>
            <BannerContentItem />
            <BannerContentItem />
            <BannerContentItem />
            <BannerContentItem />
            <BannerContentItem />
            <BannerContentItem />
            <BannerContentItem />
            <BannerContentItem />
            <BannerContentItem />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        flexDirection:"row",
    }
})

export default BannerContent;
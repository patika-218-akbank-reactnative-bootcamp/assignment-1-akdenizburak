import BannerContentItem from "./BannerContentItem";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BannerContentItemSelf from "./BannerContentItemSelf";

const BannerContent = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <BannerContentItemSelf imgURL={require('../assets/images/avatar/avatar.jpg')}/>
            <BannerContentItem userName={"Alexy"} imgURL={require('../assets/images/avatar/avatar1.jpg')}/>
            <BannerContentItem userName={"Veronica"} imgURL={require('../assets/images/avatar/avatar2.jpg')}/>
            <BannerContentItem userName={"Selin"} imgURL={require('../assets/images/avatar/avatar3.jpg')}/>
            <BannerContentItem userName={"Alexy"} imgURL={require('../assets/images/avatar/avatar1.jpg')}/>
            <BannerContentItem userName={"Veronica"} imgURL={require('../assets/images/avatar/avatar2.jpg')}/>
            <BannerContentItem userName={"Selin"} imgURL={require('../assets/images/avatar/avatar3.jpg')}/>
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
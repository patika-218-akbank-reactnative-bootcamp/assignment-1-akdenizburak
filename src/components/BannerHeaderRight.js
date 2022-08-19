import React from 'react';
import { View } from "react-native"
import BannerHeaderRightDM from './BannerHeaderRightDM';
import BannerHeaderRightLike from './BannerHeaderRightLike';
import BannerHeaderRightShare from './BannerHeaderRightShare';



const BannerHeaderRight=()=>{
    return(
        <View style={{flexDirection:"row", width:"40%", backgroundColor:"white",justifyContent:"space-evenly", marginTop:15}}>
            <BannerHeaderRightShare/>
            <BannerHeaderRightLike/>
            <BannerHeaderRightDM/>
        </View>
    )
}

export default BannerHeaderRight;
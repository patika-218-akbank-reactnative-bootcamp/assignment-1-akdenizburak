import React from 'react';
import { View } from "react-native"
import BannerHeaderLeftText from './BannerHeaderLeftText';


const BannerHeaderLeft=()=>{
    return(
        <View style={{flexDirection:"row", width:"60%",height:50, backgroundColor:"white"}}>
            <BannerHeaderLeftText/>
        </View>
    )
}

export default BannerHeaderLeft;
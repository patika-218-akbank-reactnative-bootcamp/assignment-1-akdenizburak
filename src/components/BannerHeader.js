import React from 'react';
import { View } from "react-native"

import BannerHeaderLeft from './BannerHeaderLeft';



const BannerHeader=()=>{
    return(
        <View style={{flexDirection:"row"}}>
            <BannerHeaderLeft/>
        </View>
    )
}

export default BannerHeader;
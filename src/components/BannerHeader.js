import React from 'react';
import { View } from "react-native"

import BannerHeaderLeft from './BannerHeaderLeft';
import BannerHeaderRight from './BannerHeaderRight';



const BannerHeader=()=>{
    return(
        <View style={{flexDirection:"row"}}>
            <BannerHeaderLeft/>
            <BannerHeaderRight/>
        </View>
    )
}

export default BannerHeader;
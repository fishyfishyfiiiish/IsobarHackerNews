import React, {useState} from 'react';
import {View} from "react-native";

import LandingContainer from "./containers/LandingContainer";
import NewsContainer from "./containers/NewsContainer";

export default function App() {
    const [isNewsVisible, setNewsVisibility] = useState(false);
    const showNews = () => {
        setNewsVisibility(true);
    }

    return (
        <View style={{ height: '100%'}}>
            {isNewsVisible ? <NewsContainer/> : <LandingContainer showNews={showNews}/>}
        </View>
    );
}


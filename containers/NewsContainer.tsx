import React, {useEffect, useState} from "react";
import {getTopNewsIds} from "../services/hackerNewsApi";
import {getNews} from "../services/hackerNewsApi";
import {FlatList, StyleSheet, Text, View} from "react-native";
import News from "../components/News";

const NewsContainer = props => {
    const [topNewsIds, setTopNewsIds] = useState([]);
    // TODO these three states should be reduced
    const [randomNewsIds, setRandomNewsIds] = useState([]);
    const [randomNews, setRandomNews] = useState([]);
    const [ascNews, setAscNews] = useState([]);

    useEffect(() => {
        getTopNewsIds().then(response => {
            setTopNewsIds(response);
            getRandomNewsIds(response);

            // Getting the actual stories
            for (let i = 0; i < randomNewsIds.length; i++) {
                console.log(randomNewsIds[i].id);
                getNews(randomNewsIds[i].id).then(
                    result => {
                        setRandomNews(randomNews => [...randomNews, result]);
                    }
                )
            }

            //organize the randomly picked news
            setAscNews([]);
            setAscNews(randomNews.sort(compareByScore));
        })
    }, []);

    const compareByScore = (a, b) => {
        return a.score - b.score;
    }

    /**
     * getting randomized ids from an array
     * @param newsIds
     */
    const getRandomNewsIds = newsIds => {
        // Making sure to empty state before we start
        setRandomNewsIds([]);
        setRandomNews([]);

        // We want 10 random news
        const storyNb = 10;
        for (let i = 0; i < storyNb; i++) {
            setRandomNewsIds(
                randomNewsIds => [
                    ...randomNewsIds,
                    // This is not the best randomised option, but it's much quicker than
                    // fx shuffling the entire array.
                    // Be aware that there could be multiple times the same story... :/
                    {'id': newsIds[Math.floor(Math.random() * newsIds.length)]}
                ]
            );
        }

    }

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={(item, id) => item.key} data={ascNews} renderItem={({item}) => <News story={item}/>}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: '20%',
        paddingHorizontal: '10%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default NewsContainer;

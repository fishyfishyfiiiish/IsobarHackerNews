import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import {getAuthor} from "../services/hackerNewsApi";


const News = props => {
    const [author, setAuthor] = useState({'id': '', 'karma': ''});

    useEffect(() => {
        getAuthor(props.story.by).then(response => {
            setAuthor(response);
        })
    }, []);

    const getDate = (timestamp) => {
      return new Date(timestamp * 1000).toDateString();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.story.title}</Text>
            <Text style={styles.author}>{author.id} ({author.karma}) - {getDate(props.story.time)}</Text>
            <View style={styles.story}>
                <Text>{props.story.url}</Text>
                <Text style={styles.bold}>Score: {props.story.score}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 10,
        color: 'grey'
    },
    story: {
        paddingTop: 10,
        paddingBottom: 10
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default News;

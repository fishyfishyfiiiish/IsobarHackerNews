import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newNewsUrl = `${baseUrl}newstories.json`;
export const topNewsUrl = `${baseUrl}topstories.json`;
export const newsUrl = `${baseUrl}item/`;
export const author = `${baseUrl}user/`;

export const getNewsIds = async () => {
    const result = await axios.get(newNewsUrl).then(({data}) => data);

    return result;
}

export const getTopNewsIds = async () => {
    const result = await axios.get(topNewsUrl).then(({data}) => data);

    return result;
}

export const getNews = async (newsId) => {
    const result = await axios.get(`${newsUrl + newsId}.json`).then(({data}) => data);

    return result;
}

export const getAuthor = async (authorId) => {
    const result = await axios.get(`${author + authorId}.json`).then(({data}) => data);

    return result;
}

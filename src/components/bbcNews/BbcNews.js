import { useEffect, useState } from "react";
import AllNews from '../allNews/AllNews';

export default function Home(){
    
    const url = process.env.REACT_APP_URL;

    const [readLater, setReadLater] = useState([]);

    async function fetchTrending(){

        const response = await fetch(`${url}/getNews/bbc-news`);
        const trendingData = await response.json();
        setReadLater(trendingData);
        console.log(readLater);
    }

    useEffect(() => {fetchTrending()}, []);

    function addCommentProp(comment, id){
       for (const movie of readLater) {
             if (movie.id === id) { 
                 movie.comment = comment;
            }
        }
    }
    
    return (
        <>
        <AllNews data = {readLater} addCommentProp = {addCommentProp}/>
        </>
    )
}
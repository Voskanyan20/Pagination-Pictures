import React from 'react';
import {useParams} from "react-router-dom";
import page1 from '../data/page1.json'
import page2 from '../data/page2.json'
import page3 from '../data/page3.json'
import CGallery from "../components/CGallery";
import Pagination from "../components/Pagination";

const Gallery = (props) => {
    const params = useParams()
    const getPictures = (key) =>({
        1:page1,
        2:page2,
        3:page3
    })[key || 1]
    return (
        <div>
            <h1 style={{textAlign:"center"}}>GALLERY</h1>
            <CGallery pictures={getPictures(params.page)}/>
            <Pagination totalPages={3}/>
        </div>
    )

};

export default Gallery;
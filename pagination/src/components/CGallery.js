import React from 'react';
import '../assets/style.css'

function CGallery(props) {
    const {pictures} = props
    return (
        <div className={'images_div'}>
            {pictures.map(i => (
                <div key={i.id} className={'images_divs'} >
                    <img className={'images'} src={i.src.small} alt={i.alt} />
                    <h3>{i.photographer}</h3>
                </div>
            ))}
        </div>
    );
}

export default CGallery;
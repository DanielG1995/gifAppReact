import React from 'react'

export const GifGridItem = ({ url, id, title }) => {

    return (
        <div className="card animate__animated animate__fadeIn animate-delay:2s">
            <center>
                <img src={url} alt={title} />
                <p> {title} </p>
            </center>
        </div>
    )
}

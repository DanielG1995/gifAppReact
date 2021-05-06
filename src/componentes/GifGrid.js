import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    // const [images, setImages] = useState([]);

    const { loading, data: images } = useFetchGifs(categoria);



    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate-delay:2s">{categoria}</h3>
            {loading && <p className="animate__animated animate__flash animate-delay:2s">Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    })
                }
            </div>
        </>
    )
}
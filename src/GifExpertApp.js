
import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategoria';
import { GifGrid } from './componentes/GifGrid';

const GifExpertApp = () => {

    // const categorias = ['One Punch','DBZ','Death Note','Naruto']
    const [categorias, setCategorias] = useState(['DBZ']);

    //const handelAdd = () => {
    //    setCategorias([...categorias,'....']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />
            <ol>
                {
                    categorias.map((categoria) =>
                        <GifGrid
                            key={categoria}
                            categoria={categoria} />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;


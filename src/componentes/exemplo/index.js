import React, { useState } from 'react';
import { useDrop } from "react-dnd";
import Imagem from '../imagem';


const ListaImagens = [
    {
        id: 1,
        url: "https://image.shutterstock.com/image-illustration/3d-illustration-application-software-programming-600w-675903388.jpg"
    },
    {
        id: 2,
        url: "https://image.shutterstock.com/image-illustration/internet-media-intelligence-screen-monitoring-600w-1996580468.jpg"
    },
    {
        id: 3,
        url: "https://image.shutterstock.com/image-photo/running-computer-data-www-programming-600w-1369501385.jpg"
    }
];


function Exemplo() {

    const [quadro, setQuadro] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "imagem",
        drop: (item) => addImagemNoQuadro(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    const addImagemNoQuadro = (id) => {
        const listaImagens = ListaImagens.filter((imagem) => id === imagem.id);
        setQuadro((e) => [...e, listaImagens[0]]);

    }

    return (
        <>
            <div className="Imagens"> {ListaImagens.map((imagem) => {
                return <Imagem url={imagem.url} id={imagem.id} />
            })}
            </div>
            <div className="Quadro" ref={drop}>
                {quadro.map((imagem) => {
                    return <Imagem url={imagem.url} id={imagem.id} />;
                })}
            </div>
        </>
    )

}

export default Exemplo;
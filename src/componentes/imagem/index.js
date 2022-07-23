import React from 'react';
import { useDrag } from 'react-dnd';

function Imagem({ id, url }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "imagem",
        item: { id: id },
        collect: (monitor) => ({
            //opacity: monitor.isDragging() ? 0.5 : 1
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <img
            ref={drag}
            src={url}
            alt="componente.imagem"
            width="150px"
            style={{ border: isDragging ? "5px solid pink" : "0px" }}
        />
    )

}

export default Imagem;
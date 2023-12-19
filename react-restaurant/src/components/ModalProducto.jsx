import React from 'react'
import useQuiosco from '../hooks/useQuiosco'


export default function ModalProducto() {
    const { handleClickModal } = useQuiosco()
    return (
        <>
            <p>Desde modal</p>
            <button onClick={handleClickModal}>Cerrar</button>
        </>
    )
}

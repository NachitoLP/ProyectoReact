import "./loader.scss";
import React from 'react'
import { Pulsar } from '@uiball/loaders'

export default function Loader() {
    return (
        <div className="div_cargando">
            <Pulsar 
                size={50}
                speed={1.9} 
                color="white" 
            />
        </div>
    )
}

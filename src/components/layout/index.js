import React from 'react'

import './style.css'
import { Story } from './../Story/index';

export function Layout() {
    return (
        <>
            <div className="mainGrid">
                <div className="firstColumn" style={{gridArea: "firstColumn"}}>
                    <div className="box">
                        <Story />
                    </div>
                    <div className="box">
                        post
                    </div>
                </div>
                    <div className="suggestioBox" style={{gridArea: "secondColumn"}}>
                        sugestões
                    </div>
            </div>
        </>
    )
}
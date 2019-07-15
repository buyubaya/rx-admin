import React, { Component } from 'react';


export default class Logo extends Component {
    render() {
        return (
            <div className='logo-H'>
                <svg viewBox="0 0 80 100" id="logo-h">
                    <path  
                        d="M5,5 
                            l20,0 
                            l0,50 
                            l20,0 
                            l0,20 
                            l-20,0 
                            l0,20 
                            l-20,0 
                            l0,-89" />
                    <path 
                        d="M75,95 
                            l-20,0 
                            l0,-50 
                            l-20,0 
                            l0,-20 
                            l20,0 
                            l0,-20 
                            l20,0 
                            l0,89" />
                </svg>
            </div>
        )
    }
}

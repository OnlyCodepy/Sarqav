import React from 'react';
import './SplashScreen.css';

export default function SplashScreen(){
    const name= "SARQAV";

    return (
        <div className='splash-screen'>
            <h1 className='splash-text'>
                {name.split("").map((letter,index)=>(
                    <span key ={index} style={{animationDelay: '${index*0.2}s'}}>
                        {letter}

                    </span>
                ))}

            </h1>

        </div>
    )
}
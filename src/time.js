import React from 'react'

const msToTime = ms => {
    const msinsec= 1000
    const msinmin = msinsec * 60
    const msinh = msinmin * 60

    const hours = Math.floor(ms / msinh)
    const hoursRest = ms % msinh
    const minutes = Math.floor(hoursRest / msinmin)
    const minutesRest = hoursRest % msinmin
    const seconds = Math.floor(minutesRest / msinsec)
    return String(hours).padStart(2, '0') +':' + String(minutes).padStart(2, '0') +':' + String(seconds).padStart(2, '0')
}

const Time = ({ms}) => {
    return <div >
        <h1 className='time'>
                {msToTime(ms)}
        </h1>
        
        <h6 className='timetext'>
                <div >Hour</div>
                <div >Minute</div>
                <div >Second</div>
                
        </h6>
        </div>
}
    
export default Time
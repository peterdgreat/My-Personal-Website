import React from 'react'

export default function Project() {
const styles = {
    proj: {
        color: '#fff',
        textAlign: 'center',
        width: '50%',
    }
}
    return (
        <div className="works  ">
       <h1>My Recent works</h1>
           <hr style={styles.proj}/>
        </div>
    )
}

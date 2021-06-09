import React from 'react';

export default function Banner(props) {
    return(
        <>
            <div style={{ backgroundImage: `url("/Images/photo10.jpeg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 540 }}>
                <div className="text-center text-light centered">
                    <h1 className="text-capitalize font-italic">{props.pageHeader}</h1><br/>
                    <span className="font-italic">{props.pageSubHeader}</span><br/><br/><br/>
                    <h2 className="font-italic text-decoration-underline">{props.currentPage}</h2>
                </div>
            </div>
        </>
    )
}
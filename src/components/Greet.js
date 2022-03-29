import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <>
        <h1>Welcome to my learning platform {props.name} a.k.a { props.heroName} </h1>
        {props.children}
        </>
    );
}

export default Greet;

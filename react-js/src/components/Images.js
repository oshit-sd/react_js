// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react'

export default function Images() {

    // const [myInterval, setmyInterval] = useState(null)

    useEffect(() => {
        console.log("Images Comp Mounted");
        const interval = setInterval(() => {
            console.log("Hello");
        }, 1000);


        return () => {
            clearInterval(interval);
        }
    }, []);



    return (
        <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
    )
}


// export default class Images extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { interval: null }
//     }
//     componentDidMount() {
//         console.log("Images Mount");
//         this.setState({
//             interval: setInterval(() => {
//                 console.log('set interval')
//             }, 1000)
//         })
//     }
//     componentWillUnmount() {
//         console.log("Images Unmount");
//         clearInterval(this.state.interval);
//     }

//     render() {
//         return (
//             <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
//         )
//     }
// }

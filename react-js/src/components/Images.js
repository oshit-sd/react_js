// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react'

export default function Images() {
    // const [myInterval, setmyInterval] = useState(null)
    // useEffect(() => {
    //     console.log("Images Comp Mounted");
    //     const interval = setInterval(() => {
    //         console.log("Hello");
    //     }, 1000);


    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, []);
    // return (
    //     <img src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
    // )


    const images = [
        "https://images.unsplash.com/photo-1583407183677-f7e236eef23b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1509291832281-6323f499fc80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        "https://images.unsplash.com/photo-1576087317272-798fb5cb70b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1596127234629-9a5ae764145c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    ]

    function ShowImages() {
        return images.map(image => {
            return (
                <div>
                    <img src={image}></img>
                </div>
            );
        })
    }

    return (
        <section>
            <div className="flex justify-center">
                <ShowImages />

                {/* <div>
                    <img src={images[0]} width="150"></img>
                </div> */}
            </div>
        </section>
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

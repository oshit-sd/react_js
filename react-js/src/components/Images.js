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


    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1599724290412-88e9fd9ed552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1558817298-ef90308bbf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1599372603794-954864d73b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    ])

    // const images = [
    //     "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "https://images.unsplash.com/photo-1599724290412-88e9fd9ed552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "https://images.unsplash.com/photo-1558817298-ef90308bbf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "https://images.unsplash.com/photo-1599372603794-954864d73b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    // ]

    function ShowImages() {
        return images.map(image => {
            return (
                <div className="w-1/3  my-3 flex justify-center">
                    <img src={image} width="150"></img>
                </div>
            );
        })
    }

    function handleAdd() {
        if (newImage != "") {
            setimages([
                ...images,
                newImage
            ])
            setnewImage = "";
        }
    }

    const [newImage, setnewImage] = useState("")
    function handleChange(event) {
        setnewImage(event.target.value);
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <ShowImages />

                {/* <div>
                    <img src={images[0]} width="150"></img>
                </div> */}
            </div>

            <div className="flex justify-between my-5">
                {/* <input onChange={handleChange} type="text" className="p-2 border border-gray-800 shadow rounded" /> */}
                <div class="w-full">
                    <input value={newImage} onChange={handleChange} type="text" className="p-2 w-full border border-gray-800 shadow rounded" />
                </div>
                <div>
                    <button onClick={handleAdd} disable={newImage == ""} className={`p-2 text-white ml-2 ${newImage != "" ? "bg-green-600" : "bg-green-300"}`} > Add </button>
                </div>
            </div>
        </section >
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

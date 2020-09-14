import React, { useState, useEffect, useRef } from "react";
import Images from "./components/Images";

// function App({ title }) {
//     return <div className="bg-gray-600 border text-white p-5">Hello React {title}</div>;
// }
function App() {
    const [title, setTitle] = useState("Hello Set state");
    const [isShowing, setisShowing] = useState(false);
    const [didMount, setdidMount] = useState(false)
    const mountRef = useRef(false)

    // component did mount only
    useEffect(() => {
        setdidMount(true);
        console.log("App Mounted");
    }, [])

    // component will updated (when we use some state value inside [], this is work for every time)
    useEffect(() => {
        // if (isShowing != null) {
        //     console.log("App Updated");
        // }
        // if (didMount) {
        //     console.log("App Updated");
        // }
        if (mountRef.current) {
            console.log("App Updated");
        } else {
            mountRef.current = true;
        }
    }, [isShowing])

    function handleClick() {
        setisShowing(!isShowing)
    }
    return (
        <section className="flex justify-center">
            {
                console.log("App Render")}
            <div className="w-10/12 ">
                <div className="my-4">
                    <div className="text-center">
                        <div className="my-4">
                            {title}
                        </div>
                        <button onClick={handleClick} className="p-1 bg-blue-600 text-white my-2">Toggle Image</button>
                    </div>

                    {isShowing ? <Images /> : null}

                </div>
            </div>
        </section >
    );
}
// function App({ title }) {
//     return <div style={{
//         padding: '2rem',
//         border: '1px solid',
//         backgroundColor: 'gray',
//         color: '#fff'
//     }}>Hello React {title}</div>;
// }

// class App extends React.Component {
//     constructor(props) {
//         console.log("App Constractor");
//         super(props);
//         this.state = { title: "Hello React 2", isShowing: false }
//         // this.handleClick = this.handleClick.bind(this);
//     }

//     componentDidMount() {
//         console.log("App Mounted");
//         this.setState({
//             title: "React LifeCycle"
//         })
//     }

//     handleClick = () => {
//         this.setState({
//             isShowing: !this.state.isShowing
//         })
//     }
//     // handleClick() {
//     //     this.setState({
//     //         isShowing: !this.state.isShowing
//     //     })
//     // }


//     render() {
//         console.log("App Render");
//         // return <div>Hello React Class Based</div>;
//         // return <div>{this.state.title}</div>;
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1/2">
//                     <div className="my-4">
//                         <div className="text-center">
//                             <div className="my-4">
//                                 {this.state.title}
//                             </div>
//                             <button onClick={this.handleClick} className="p-1 bg-blue-600 text-white my-2">Toggle Image</button>
//                         </div>

//                         {this.state.isShowing ? <Images /> : null}

//                     </div>
//                 </div>
//             </section >
//         );
//     }
// }

export default App;
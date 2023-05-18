// import React, { useState, useEffect } from "react";

// const Search = () => {

//     const [userData, setUserData] = useState([]);
//     const [filterData, setFilterData] = useState([]);
//     const [changeData, setChangeData] = useState("");

//     const url = "https://jsonplaceholder.typicode.com/posts";

//     useEffect(() => {
//         fetch(url).then((res) => {
//             return (res.json());
//         }).then((jsondata) => {
//             console.log(jsondata);
//             setUserData(jsondata);
//             setFilterData(jsondata);
//         }).catch((error) => {
//             console.log(error);
//         })
//     }, [])

//     const changeEvent = (e) => {
//         console.log(e.target.value);
//         setChangeData(e.target.value);

//         const filter_data = filterData.filter((item) => {
//             return (item.title.toLowerCase().includes(e.target.value))
//         })

//         setUserData(filter_data);

//     }

//     return (<>
//         <div style={{ textAlign: "center" }}>
//             <h1>This is Search Functionality in React </h1>
//             <hr />
//             <input
//                 type="search"
//                 placeholder="Search Data Here..."
//                 value={changeData}
//                 onChange={(e) => changeEvent(e)}
//             />
//             <hr />
//             {
//                 userData.map((item, index) => {
//                     return (<>
//                         <p key={index}>{item.id}.&nbsp;{item.title}</p>
//                     </>)

//                 })
//             }
//         </div>
//     </>)
// }


// export default Search;


//practise 1 for search Functionality

// import React, { useState, useEffect } from "react";

// const Search = () => {

//     const [userData, setUserData] = useState([]);
//     const [filterData, setFilterData] = useState([]);
//     const [changeData, setChangeData] = useState("");

//     const url = "https://jsonplaceholder.typicode.com/posts"
//     useEffect(() => {
//         fetch(url).then((res) => {
//             return (res.json())
//         }).then((jsondata) => {
//             console.log(jsondata);
//             setUserData(jsondata);
//             setFilterData(jsondata);
//         }).catch((error) => {
//             console.log(error);
//         })
//     }, [])

//     const onChangeEvent = (e) => {
//         console.log(e.target.event);
//         setChangeData(e.target.value);

//         if (e.target.value=== "") {
//             setUserData(filterData);

//         }
//         else {
//             const data_filter = filterData.filter((item) => {
//                 return (
//                     item.title.toLowerCase().includes(e.target.value.toLowerCase())
//                 )
//             })
//             if (data_filter.length > 0) {
//                 setUserData(data_filter);
//             }else{
//                 setUserData([{"title":"NO DATA FOUND"}])
//             }

//         }
//     }

//     return (<>
//         <div style={{ textAlign: "center" }}>
//             <h2>This is Example of Search Functionality</h2>
//             <hr />
//             Search Here:
//             <input
//                 type="search"
//                 placeholder="Search User Title Here..."
//                 onChange={(e) => { onChangeEvent(e) }}
//             />
//             <hr />
//             <table className="table table-dark table-striped table-hover">
//                 <tbody>
//                     <tr>
//                         <th>UserID:</th>
//                         <th>User Title:</th>
//                         <th>User Body:</th>
//                     </tr>
//                     {
//                         userData.map((item, index) => {
//                             return (<>
//                                 <tr key={index}>
//                                     <td>{item.id}</td>
//                                     <td>{item.title}</td>
//                                     <td>{item.body}</td>
//                                 </tr>
//                             </>)
//                         }
//                         )
//                     }
//                 </tbody>
//             </table>

//         </div>


//     </>)
// }


// export default Search;



//practise 2 for search

// import React, { useState, useEffect } from "react";
// const Search = () => {

//     const [showData, setShowData] = useState([]);
//     const [filterData, setFilterData] = useState([]);
//     const [inputValue, setInputValue] = useState("");

//     const url = "https://jsonplaceholder.typicode.com/posts";

//     useEffect(() => {
//         fetch(url).then((res) => {
//             return (res.json())
//         }).then((json) => {
//             setShowData(json);
//             setFilterData(json);
//             console.log(json);

//         }).catch((error) => {
//             console.log(error);
//         })

//     }, [])


//     const changeEvent = (e) => {
//         console.log(e.target.value);
//         setInputValue(e.target.value);


//         const data_filter = filterData.filter((item) => {
//             return (
//                 item.title.toLowerCase().includes(e.target.value.toLowerCase())
//             )
//         })
//         setShowData(data_filter);


//     }

//     return (<>
//         <div style={{ textAlign: "center" }}>
//             <h2 style={{ fontFamily: "Times New Roman" }}>Seacrch Functionality in React Js</h2>


//             <input
//                 type="Search"
//                 placeholder="Search Here..."

//                 onChange={(e) => changeEvent(e)}

//             />
//         </div>
//         <hr />
//         <table className="table table-dark table-hover table-striped">
//             <tbody>
//                 <tr>
//                     <th>User Id:&nbsp;</th>
//                     <th>User Title:&nbsp;</th>
//                     <th>User Body:&nbsp;</th>
//                 </tr>

//                 {
//                     showData.map((item) => {
//                         return (<>
//                             <tr>
//                                 <td>{item.id}</td>
//                                 <td>{item.title}</td>
//                                 <td>{item.body}</td>
//                             </tr>
//                         </>)
//                     })
//                 }

//             </tbody>
//         </table>
//     </>)

// }


// export default Search;


//practise 3  search

// import React, { useState, useEffect } from "react";

// const Search = () => {
//     const [showData, setShowData] = useState([]);
//     const [filterData, setFilterData] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     const url = "https://jsonplaceholder.typicode.com/posts";

//     useEffect(() => {
//         fetch(url).then((res) => {
//             return (res.json())
//         }).then((jsondata) => {
//             console.log(jsondata);
//             setShowData(jsondata);
//             setFilterData(jsondata);


//         }).catch((error) => {
//             console.log(error)
//         })


//     }, [])

//     const changeEvent = (e) => {
//         console.log(e.target.value);
//         setInputValue(e.target.value);

//         if (e.target.value === "") {
//             setShowData(filterData);

//         }
//         else {

//             const filter_data = filterData.filter((item) => {
//                 return (item.title.toLowerCase().includes(e.target.value.toLowerCase()))
//             })


//             if (filter_data.length > 0) {
//                 setShowData(filter_data);

//             }
//             else {
//                 setShowData([{ "title": "DATA NOT FOUND" }]);
//             }
//         }



//     }



//     return (<>
//         <div style={{ textAlign: "center" }}>
//             <h2>Search Functionality</h2>
//             <hr />
//             <input
//                 type="search"
//                 placeholder="Search Here..."
//                 value={inputValue}
//                 onChange={(e) => { changeEvent(e) }}

//             />
//         </div>
//         <br />

//         <table className="table table-dark table-hover table-striped">
//             <tbody>
//                 <tr>
//                     <th>Id</th>
//                     <th>Title</th>
//                     <th>Body</th>
//                 </tr>
//                 {
//                     showData.map((item) => {
//                         return (<>
//                             <tr>
//                                 <td>{item.id}</td>
//                                 <td>{item.title}</td>
//                                 <td>{item.body}</td>
//                             </tr>
//                         </>)

//                     })
//                 }
//             </tbody>
//         </table>


//     </>)


// }
// export default Search;



//practise  4 search functionality

import React, { useState, useEffect } from "react";

const Search = () => {
    const [showData, setShowData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(url).then((res) => {
            return (res.json())

        }).then((jsondata) => {
            console.log(jsondata);
            setShowData(jsondata);
            setFilterData(jsondata);

        }).catch((error) => {
            console.log(error);

        }

        )
    }, [])

    const changeEvent = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
        if (e.target.value === "") {
            setShowData(filterData);
        }
        else {
            const filter_data = filterData.filter((item) => {
                return (item.title.toLowerCase().includes(e.target.value.toLowerCase()))

            })
            if (filter_data.length > 0) {
                setShowData(filter_data);

            }
            else {
                setShowData([{ "body": "NO DATA FOUND" }])
            }
        }


    }

    return (<>
        <div style={{ textAlign: "center" }}>
            <h2>Search Functionality</h2>
            <hr />
            <input
                type="search"
                placeholder="Type here for search"
                value={inputValue}
                onChange={(e) => changeEvent(e)}

            />
            <br />
            <br />
        </div>

        <table className="table table-hover table-striped table-dark">
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>

                </tr>
                {
                    showData.map((item) => {
                        return (<>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        </>)

                    })
                }
            </tbody>
        </table>

    </>)
}


export default Search;

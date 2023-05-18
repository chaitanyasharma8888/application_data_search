//A)Search Functionality


//example 1

// import React from "react";
// import { Users } from "./Users.js";
// import { useState } from "react";
// import Table from "./Table.js";


// const App = () => {

//   const [query, setQuery] = useState();

//   // const keys = ["first_name", "last_name", "email"];

//   // console.log(Users[0]["email"])//this will get 1st user email from Users.js

//   const Search = (data) => {
//     return (data.filter((items) => {
//       return (
//       //  keys.some((key)=>{
//       //   return (
//       //     items[key].toLowerCase().includes(query)
//       //   )
//       //  })
//         items.last_name.toLowerCase().includes(query) ||
//         items.email.toLowerCase().includes(query)  ||
//         items.gender.toLowerCase().includes(query)
//       )
//     }))
//   }


//   return (<>

//     <input type="text" placeholder="Search here...." onChange={(e) => setQuery(e.target.value)} />
//     <Table data={Search(Users)} />
//   </>)

// }


// export default App;


//example 2
//Seema Holiday Developer

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [tabledata, setTableData] = useState([]);
//   const [filterdata, setFilterdata] = useState([]);
//   const [searchData, setSearchData] = useState();

//   console.log(searchData);
//   useEffect(() => {
//     const fetchData = () => {
//       const url = "https://jsonplaceholder.typicode.com/users";
//       fetch(url).then((res) => {
//         return res.json();
//       }).then((jsondata) => {
//         console.log(jsondata);
//         setTableData(jsondata);
//         setFilterdata(jsondata);
//       });
//     }
//     fetchData();
//   }, [])

//   const handleSearch = (e) => {
//     console.log(e.target.value);
//     if (e.target.value == "") {
//       setTableData(filterdata);

//     }
//     else {
//       const data = filterdata.filter((filteritem) => {
//         return (
//           filteritem.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
//           filteritem.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
//           filteritem.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
//           filteritem.phone.toLowerCase().includes(e.target.value.toLowerCase()) ||
//           filteritem.website.toLowerCase().includes(e.target.value.toLowerCase())
//         )
//       })
//       if (data.length > 0) {
//         setTableData(data);
//       }
//       else {
//         setTableData([{ "name": "NO DATA FOUND" }])
//       }
//     }
//   }
//   return (<>
//     <div style={{ textAlign: "center" }}>
//       <h2 >This is Search Functionality Example in Reactjs</h2>
//       <input type="search"
//         placeholder="search here..."
//         value={searchData}
//         onChange={(e) => { handleSearch(e) }}
//       />
//       <br /><br />
//       <table style={{
//         backgroundColor: "lightgray", padding: "10px", marginLeft: "auto",
//         marginRight: "auto"
//       }}>
//         <tbody>
//           <tr>
//             <th>User Full Name &nbsp; &nbsp;</th>
//             <th>UserName &nbsp; &nbsp;</th>
//             <th>UserMail &nbsp; &nbsp;</th>
//             <th>UserPhone &nbsp; &nbsp;</th>
//             <th>UserWebsite &nbsp; &nbsp;</th>
//           </tr>
//           {tabledata.map((item) => {
//             return (<>
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.username}</td>
//                 <td>{item.email}</td>
//                 <td>{item.phone}</td>
//                 <td>{item.website}</td>
//               </tr>
//             </>)
//           })}
//         </tbody>
//       </table>
//     </div>
//   </>)
// }
// export default App;


//example 2
//API used https://api.publicapis.org/entries

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {

//   const [data, setData] = useState([]);
//   const [filterdata, setFilterData] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const getData = async () => {
//       return await axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
//         console.log(res.data);
//         setData(res.data);
//         setFilterData(res.data);
//       }).catch((err) => {
//         console.log(err);
//       })
//     }
//     getData();
//   }, [])

//   const searchhandler = (e) => {
//     setSearch(e.target.value)
//     console.log(e.target.value);
//     {

//       const finalfilterdata = filterdata.filter((item) => {
//         return (
//           item.title.toLowerCase().includes(e.target.value.toLowerCase())
//         )
//       })
//       setData(finalfilterdata);
//     }



//   }
//   return (<>
//     <div style={{ textAlign: "center" }}>
//       <input
//         type="search"
//         value={search}
//         placeholder="search here..."
//         onChange={(e) => searchhandler(e)}
//       />
//       <table style={{ marginLeft: "auto", marginRight: "auto" }}>
//         <tbody>
//           <tr>

//             <th>id&nbsp;&nbsp;</th>
//             <th>title &nbsp; &nbsp;</th>
//             <th>url &nbsp;&nbsp;</th>
//             <th>thumbnailUrl&nbsp;&nbsp;</th>

//           </tr>
//           {data.map((item, index) => {
//             return (<>
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.url}</td>
//                 <td>{item.thumbnailUrl}</td>
//               </tr>
//             </>)

//           })}
//         </tbody>
//       </table>
//     </div>
//   </>)
// }


// export default App;


// //B)Pagination functionality

// import React, { useState, useEffect } from "react";
// import Pagination from "./Pagination.jsx";
// // import Pagniation_new from "./Pagination_new.jsx";

// const App = () => {

//   const [posts, setPosts] = useState([]);
//   const [showPerPage, setShowPerPage] = useState(10);
//   const [pagination, setPagination] = useState({
//     start: 0,
//     end: showPerPage
//   });


//   const url = "https://jsonplaceholder.typicode.com/posts";

//   useEffect(() => {
//     fetch(url).then((res) => {
//       return (res.json())
//     }).then((data) => {
//       console.log(data);
//       setPosts(data);
//     })
//   }, [])

//   const onPaginationChange = (start, end) => {
//     // console.log(start,end,"clicked");
//     setPagination({
//       start: start,
//       end: end
//     })

//   }

//   return (<>
//     <div style={{ textAlign: "center" }}>
//       <h2>This is Pagination Example</h2>
//       <hr />
//       {
//         posts.slice(pagination.start, pagination.end).map((item, index) => {
//           return (<>
//             <div key={item.id}>
//               <h5>{item.id}.&nbsp;Title:&nbsp;{item.title}&nbsp;,Body:&nbsp;{item.body}</h5>

//             </div>
//           </>)
//         })
//       }
//     </div>
//     <Pagination
//       showperpage={showPerPage}
//       onPaginationChange={onPaginationChange}
//       total={posts.length}//kyui posts kae andar array hai aur APi se sara data array mae store hua hai toa length nikal jayegi
//     />
//     {/* <Pagniation_new
//       showperpage={showPerPage}
//       onPaginationChange={onPaginationChange}
//       total={posts.length}//kyui posts kae andar array hai aur APi se sara data array mae store hua hai toa length nikal jayegi
//     /> */}
//   </>)

// }

// export default App;


//practise 1 for pagination
// import React, { useState, useEffect } from "react";
// import Pagination from "./Pagination"

// const App = () => {
//   const [userData, setUserData] = useState([]);
//   const [showPerPage, setShowPerPage] = useState(10);
//   const [pagination, setPagination] = useState({
//     start: 0,
//     end: showPerPage
//   })


//   const url = "https://jsonplaceholder.typicode.com/posts";

//   useEffect(() => {
//     fetch(url).then((res) => {
//       return (res.json())

//     }).then((jsondata) => {
//       console.log(jsondata);
//       setUserData(jsondata);
//     }).catch((error) => {
//       console.log(error);
//     })

//   }, [])

//   const paginationHandler = (start_value, end_value) => {
//     setPagination({
//       start: start_value,
//       end: end_value
//     })
//   }

//   return (<>
//     <div style={{ textAlign: "center" }}>
//       <h2>Pagination example</h2>
//       <hr />
//       {userData.slice(pagination.start, pagination.end).map((item, index) => {
//         return (<>
//           <p key={index}>{item.id}&nbsp;{item.title}</p>
//         </>)

//       })};

//       <hr />
//       <Pagination
//         showPerPage={showPerPage}
//         paginationHandler={paginationHandler}
//         total={userData.length} />
//     </div>
//   </>)
// }


// export default App;

// practise 1 pagination


// import React, { useState, useEffect } from "react";
// import Pagination from "./Pagination.jsx";

// const App = () => {

//   const [userData, setUserData] = useState([]);
//   const [showPerPage, setShowPerPage] = useState(10);
//   const [pagination, setPagination] = useState({
//     start: 0,
//     end: showPerPage
//   });

//   const url = "https://jsonplaceholder.typicode.com/posts";

//   useEffect(() => {
//     fetch(url).then((res) => {
//       return (res.json());
//     }).then((jsondata) => {
//       console.log(jsondata);
//       setUserData(jsondata);

//     }).catch((error) => {
//       console.log(error);

//     })

//   }, [])

//   const paginationHandler = (start_value, end_value) => {
//     setPagination({
//       start: start_value,
//       end: end_value
//     })

//   }

//   return (<>
//     <div style={{ textAlign: "center" }}>
//       <h2>Example Pagination in API Data !!</h2>
//       <hr />
//       {
//         userData.slice(pagination.start, pagination.end).map((item, index) => {
//           return (<>
//             <p key={index}>{item.id}&nbsp;{item.title}</p>
//           </>)
//         })}
//       <hr />
//       <Pagination
//         showPerPage={showPerPage}
//         paginationHandler={paginationHandler}
//         total={userData.length}
//       />
//     </div>
//   </>)
// }

// // export default App;

// //practise 1 for search

// import React from "react";
// import Search from "./Search.jsx";

// const App = () => {
//   return (<>
//     <Search />
//   </>)

// }


// export default App;


//practise 2 for search

// import React from "react";
// import Search from "./Search.jsx";

// const App=()=>{
//   return(<>
//     <Search/>
//   </>)
// }

// export default App;

// import React from "react";
// import Search from "./Search.jsx";

// const App = () => {
//   return (<>
//     <Search />

//   </>)
// }

// export default App;


// import React, { useEffect, useState } from "react";
// import Pagination from "./Pagination.jsx";

// const App = () => {
//   const [showData, setShowData] = useState([]);
//   const [showPerPage, setShowPerPage] = useState(8);
//   const [pagination, setPagination] = useState({
//     start: 0,
//     end: showPerPage
//   })

//   const url = "https://jsonplaceholder.typicode.com/posts";

//   useEffect(() => {
//     fetch(url).then((item) => {
//       return (item.json())
//     }).then((jsondata) => {
//       console.log(jsondata);
//       setShowData(jsondata);


//     }).catch((error) => {
//       console.log(error);

//     })

//   }, [])

//   const paginationHandler = (start_value, end_value) => {
//     setPagination({
//       start:start_value,
//       end:end_value
//     })

//   }
//   return (<>
//     <div style={{ textAlign: "center" }}>
//       <h2>PAGINATION</h2>
//       <hr />
//     </div>
//     <table className="table table-dark table-striped table-hover">
//       <tbody>
//         <tr>
//           <th>ID</th>
//           <th>TITLE</th>
//           <th>BODY</th>

//         </tr>

//         {
//           showData.slice(pagination.start, pagination.end).map((item) => {
//             return (<>
//               <tr>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.body}</td>
//               </tr>
//             </>)
//           })
//         }

//       </tbody>
//     </table>

//     <Pagination
//       showPerPage={showPerPage}
//       total={showData.length}
//       paginationHandler={paginationHandler}

//     />
//   </>)

// }

// export default App;

//pagination practise 1

// import React, { useState, useEffect } from "react";
// import Pagination from "./Pagination.jsx";

// const App = () => {
//   const [showData, setShowData] = useState([]);
//   const [showPerPage, setShowPerPage] = useState(8);
//   const [pagination, setPagination] = useState({
//     start: 0,
//     end: showPerPage
//   })


//   const url = "https://jsonplaceholder.typicode.com/posts";

//   useEffect(() => {
//     fetch(url).then((data) => {
//       return (data.json());
//     }).then((jsondata) => {
//       setShowData(jsondata);


//     }).catch((error) => {
//       console.log(error)

//     })


//   }, [])


//   const paginationHandler = (start_value, end_value) => {
//     setPagination({
//       start:start_value,
//       end:end_value
//     })

//   }

//   return (<>
//     <div style={{ textAlign: "center" }}>
//       Pagination
//       <hr />
//       <table className="table table-border table-striped table-hover table-dark">
//         <tbody>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//           {
//             showData.slice(pagination.start, pagination.end).map((item) => {
//               return (<>
//                 <tr>
//                   <td>{item.id}</td>
//                   <td>{item.title}</td>
//                   <td>{item.body}</td>
//                 </tr>
//               </>)

//             })
//           }
//         </tbody>
//       </table>
//     </div>
//     <Pagination
//       showPerPage={showPerPage}
//       total={showData.length}
//       paginationHandler={paginationHandler}
//     />
//   </>)
// }


// export default App;


//pagination practise 2


import React, { useState, useEffect } from "react";
import Pagination from "./Pagination.jsx";

const App = () => {

  const [showData, setShowData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage
  })

  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(url).then((res) => {
      return (res.json());

    }).then((jsondata) => {
      console.log(jsondata);
      setShowData(jsondata);

    }).catch((error) => {
      console.log(error);

    })


  }, [])

  const paginationHandler = (start_value, end_value) => {
    setPagination({
      start: start_value,
      end: end_value
    })

  }

  return (<>
    <div style={{ textAlign: "center" }}>

      <h3>PAGINATION</h3>
      <hr />
      <table className="table table-dark table-striped table-hover">
        <tbody>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          </tr>
          {
            showData.slice(pagination.start, pagination.end).map((item) => {
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
    </div>
    <hr />
    <Pagination
      showPerPage={showPerPage}
      total={showData.length}
      paginationHandler={paginationHandler}

    />


  </>)

}


export default App;
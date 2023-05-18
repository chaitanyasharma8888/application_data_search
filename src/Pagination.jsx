// import React, { useState, useEffect } from "react";


// const Pagination = ({ showperpage, onPaginationChange, total }) => {

//     const [counter, setCounter] = useState(1);

//     useEffect(() => {

//         const value = showperpage * counter;
//         // console.log("start value", value - showperpage);
//         // console.log("end value", value);
//         // console.log(total);
//         onPaginationChange(value - showperpage, value);

//     }, [counter])


//     const onButtonClick = (type) => {
//         if (type === "prev") {
//             if (counter === 1) {
//                 setCounter(1);
//             }
//             else {
//                 setCounter(counter - 1);
//             }

//         } else if (type === "next") {
//             if(Math.ceil(total/showperpage)===counter){
//                 setCounter(counter);
//             }else{
//                 setCounter(counter+1);
//             }


//         }

//     }

//     return (<>
//         <div style={{ textAlign: "center" }}>
//             <hr />
//             <button onClick={() => onButtonClick("prev")}>Prev</button>&nbsp;&nbsp;
//             <button onClick={() => onButtonClick("next")}>Next</button>
//         </div>

//     </>)
// }


// export default Pagination;


//practise 1 for pagination
// import React, { useState, useEffect } from "react";

// const Pagination = ({ showPerPage, paginationHandler, total }) => {
//     const [counter, setCounter] = useState(1);

//     useEffect(() => {
//         const value = showPerPage * counter;
//         console.log("start value", value - showPerPage);
//         console.log("end Value", value);
//         paginationHandler(value - showPerPage, value);

//     }, [counter])

//     const clickEvent = (type) => {
//         if (type === "prev") {
//             if (counter === 1) {
//                 setCounter(counter);
//             } else {
//                 setCounter(counter - 1);
//             }
//         } else {
//             if (type === "next") {
//                 const next_value = Math.ceil(total / showPerPage);
//                 if (next_value === counter) {
//                     setCounter(counter);
//                 } else {
//                     setCounter(counter + 1);
//                 }

//             }
//         }

//     }

//     return (<>
//         <button className="btn btn-primary" onClick={() => clickEvent("prev")}>Prev</button>&nbsp;
//         <button className="btn btn-primary" onClick={() => clickEvent("next")}>Next</button>
//     </>)
// }


// export default Pagination;


//practise 2 pagination

// import React, { useState, useEffect } from "react";

// const Pagination = ({ showPerPage, paginationHandler, total }) => {
//     const [counter, setCounter] = useState(1);

//     useEffect(() => {

//         const value = showPerPage * counter;
//         // console.log("start value", value - showPerPage);
//         // console.log("end value", value);
//         paginationHandler(value - showPerPage, value);


//     }, [counter])

//     const onClick = (type) => {

//         if (type === "prev") {
//             if (counter === 1) {
//                 setCounter(1);
//             }
//             else {
//                 setCounter(counter + 1);
//             }
//         } else {
//             const next_value = (Math.ceil(total / showPerPage));
//             if (next_value === counter) {
//                 setCounter(counter);
//             } else {
//                 setCounter(counter + 1);
//             }
//         }

//     }

//     return (<>
//         <button className="btn btn-primary" onClick={() => { onClick("prev") }}>Prev</button>&nbsp;
//         <button className="btn btn-primary" onClick={() => { onClick("next") }}>Next</button>
//     </>)


// }


// export default Pagination;

// import React, { useState, useEffect } from "react";

// const Pagination = ({ showPerPage, total, paginationHandler }) => {

//     const [counter, setCounter] = useState(1);

//     useEffect(() => {
//         const value = showPerPage * counter
//         console.log("start value" + (value - showPerPage));
//         console.log("end value" + value);
//         paginationHandler(value - showPerPage, value);

//     }, [counter])

//     const clickEvent = (type) => {
//         if (type === "prev") {
//             if (counter === 1) {
//                 setCounter(counter);

//             }
//             else {
//                 setCounter(counter - 1)
//             }

//         }
//         else {
//             const next_value = Math.ceil(total / showPerPage);
//             if (next_value === counter) {
//                 setCounter(counter)
//             }
//             else {
//                 setCounter(counter + 1)
//             }

//         }

//     }

//     return (<>
//         <hr />
//         <div style={{ textAlign: "center" }}>
//             <button className="btn btn-primary" onClick={() => clickEvent("prev")}>Prev</button>&nbsp;
//             <button className="btn btn-primary" onClick={() => clickEvent("next")}>Next</button>

//         </div>
//         <hr />
//     </>)
// }


// export default Pagination;

//pagination practise 1
// import React, { useState, useEffect } from "react";

// const Pagination = ({ showPerPage, total, paginationHandler }) => {
//     const [counter, setCounter] = useState(1);

//     useEffect(() => {
//         const value = showPerPage * counter;
//         console.log("start_value" + " " + (value - showPerPage));
//         console.log("end_value" + " " + value);
//         paginationHandler(value - showPerPage, value);

//     }, [counter])

//     const clickEvent = (type) => {
//         if (type === "prev") {
//             if (counter === 1) {
//                 setCounter(counter);
//             }
//             else {
//                 setCounter(counter - 1);
//             }
//         }
//         else {
//             const next_value = Math.ceil(total / showPerPage);
//             if (next_value === counter) {
//                 setCounter(counter);
//             }
//             else {
//                 setCounter(counter + 1);
//             }
//         }

//     }


//     return (<>
//         <div style={{ textAlign: "center" }}>
//             <button className="btn btn-primary" onClick={() => clickEvent("prev")}>PREV</button>&nbsp;
//             <button className="btn btn-primary" onClick={() => clickEvent("next")}>NEXT</button>
//         </div>

//     </>)
// }


// export default Pagination;



//pagination practise 2

import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, total, paginationHandler }) => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        console.log("start_value" + " " + value - showPerPage);
        console.log("end_value" + " " + value);
        paginationHandler(value - showPerPage, value);


    }, [counter])

    const clickEvent = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(counter);
            }
            else {
                setCounter(counter - 1);
            }

        }

        else {
            const next_value = Math.ceil(total / showPerPage);
            if (next_value === counter) {
                setCounter(counter);
            }
            else {
                setCounter(counter + 1);
            }

        }

    }

    return (<>
        <div style={{ textAlign: "center" }}>
            <button className="btn btn-primary" onClick={() => clickEvent("prev")}>PREV</button>&nbsp;
            <button className="btn btn-primary" onClick={() => clickEvent("next")}>NEXT</button>
        </div>
        <hr />
    </>)

}


export default Pagination;
// import React, { useState, useEffect } from "react";


// const Pagination_new = ({ showperpage, onPaginationChange, total }) => {

//     const [counter, setCounter] = useState(1);
//     const [numberOfButtons, setnumberOfButtons] = useState(Math.ceil(total / showperpage));

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
//             if (numberOfButtons === counter) {
//                 setCounter(counter);
//             } else {
//                 setCounter(counter + 1);
//             }


//         }

//     }

//     return (<>
//         <div className="d-flex justify-content-center">

//             <hr />
//             <nav aria-label="Page navigation example ">
//                 <ul className="pagination">
//                     <li className="page-item"><a className="page-link" href="!#" onClick={() => onButtonClick("prev")}>Previous</a></li>

//                     {
//                         new Array(numberOfButtons).fill("").map((item, index) =>
//                         (
//                             <li className="page-item"><a className="page-link" href="!#">{index + 1}</a></li>
//                         )
//                         )
//                     }
//                     <li className="page-item"><a className="page-link" href="!#" onClick={() => onButtonClick("next")}>Next</a></li>
//                 </ul>
//             </nav>
//         </div>



//     </>)
// }


// export default Pagination_new;
import React, { useState } from 'react'
import { RiArrowGoBackLine,RiArrowGoForwardLine } from "react-icons/ri";
import { TaskDataContext } from '../contexts/TaskContext';
const Pagination = ({ limit }) => {
    const {count} = TaskDataContext();
    const [page,setPage] =useState(0);
    const maxPage = Math.ceil(count / limit);
    const skip = limit * page;
    console.log("max",count);
    return (
        <div className='pagination flex'>
            <p className='page-item'><RiArrowGoBackLine/></p>
            {[...Array(maxPage).keys()].map(i => <p className='page-item' key={i} onClick={()=> setPage(i+1)}>{i+1}</p>)}
            <p className='page-item'><RiArrowGoForwardLine/></p>
        </div>
    )
}

export default Pagination
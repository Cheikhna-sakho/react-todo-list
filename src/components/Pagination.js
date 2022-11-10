import React, { useEffect, useRef, useState } from 'react'
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";
import { pngTask } from '../api/task.api';
import { TaskDataContext } from '../contexts/TaskContext';
// import { activeClass } from '../utils/activeClass';
const Pagination = ({ limit }) => {
    const { count, setTask } = TaskDataContext();
    const [page, setPage] = useState(0);
    const maxPage = Math.ceil(count / limit);
    const skip = limit * page;
    const pageItem = useRef([]);

    useEffect(() => {
        const currentEl = pageItem.current
        currentEl.filter(el => {
            if (el) {
                if (currentEl.indexOf(el) !== page) {
                    if (el.className.includes("active")) {
                        console.log("yes is active", el.className.split(" ").filter(cl => cl != "active"));
                        el.className = el.className.split(" ").filter(cl => cl != "active").join(" ");
                    }
                }
                else {
                    el.className += " active"
                }
            }
            return el;
        });
        (async () => {
            try {
                const res = await pngTask(limit, skip);
                setTask(res.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [page]);

    return (
        <div className='pagination flex'>
            <p onClick={() => page > 0 && setPage(page - 1)} className='page-item'><RiArrowGoBackLine /></p>
            {[...Array(maxPage).keys()].map(i => <p ref={el => pageItem.current[i] = el} className='page-item' key={i} onClick={() => setPage(i)}>{i + 1}</p>)}
            <p onClick={() => page < maxPage && setPage(page + 1)} className='page-item'><RiArrowGoForwardLine /></p>
            <p>Page {page + 1}</p>
        </div >
    )
}

export default Pagination
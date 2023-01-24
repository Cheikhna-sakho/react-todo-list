import React, { useCallback, useEffect, useRef, useState } from 'react'
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";
import { TaskDataContext } from '../contexts/TaskContext';

const Pagination = (data, { start = 0, ratio = 4 } = {}) => {
    const { count, setShowTask } = TaskDataContext();
    const [page, setPage] = useState(start);
    const [pageIndex, SetPageIndex] = useState(1);
    const [maxPage, setMaxPage] = useState(page);
    const [end, setEnd] = useState(null);

    const updatePage = useCallback((i) => {
        setPage(i * ratio)
    }, [ratio]);
    // };
    const next = () => {
        if (count > page + ratio) {
            SetPageIndex(pageIndex + 1)
        }
    }
    const back = () => {
        if (page - ratio >= 0) {
            SetPageIndex(pageIndex - 1)
        }
    }

    useEffect(() => {
        const lastValue = () => {
            const endVal = (page + ratio);
            const len = data && count;
            return len > endVal ? endVal - len : null;
        }
        setEnd(lastValue());
    }, [data, ratio, page, count])
    useEffect(() => {
        !count && setMaxPage(1);
        count && setMaxPage(Math.ceil(count / ratio))
    }, [count, ratio])
    useEffect(() => {
        const updateIndexOfPage = () => {
            if (maxPage > 0) {
                setPage(0);
                SetPageIndex(maxPage / maxPage);
            } else {
                SetPageIndex(1);
            }
        }
        updateIndexOfPage();
    }, [maxPage]);

    useEffect(() => { updatePage(pageIndex - 1) }, [pageIndex, updatePage]);

    useEffect(() => {
        const switchPage = () => {
            data && setShowTask(end ? (
                data.slice(page, end)
            ) : data.slice(page));
        }
        switchPage();
    }, [data, page, end, ratio,setShowTask])


    return { next, back, maxPage, pageIndex, SetPageIndex };
}



export const PageItem = () => {
    const { task } = TaskDataContext();
    const limit = 10;
    const { next, back, maxPage, pageIndex, SetPageIndex } = Pagination(task, { ratio: limit });
    const pageItem = useRef([]);

    useEffect(() => {
        const setItemActiveClass = () => {
            const currentEl = pageItem.current
            currentEl.filter(el => {
                if (el) {
                    if (currentEl.indexOf(el) !== pageIndex - 1) {
                        if (el.className.includes("active")) {
                            el.className = el.className.split(" ").filter(cl => cl !== "active").join(" ");
                        }
                    }
                    else {
                        el.className += " active"
                    }
                }
                return el;
            });
        }
        setItemActiveClass();
    }, [pageIndex]);

    return (
        <div className='pagination flex'>
            <p onClick={back} className='page-item'><RiArrowGoBackLine /></p>
            {[...Array(maxPage).keys()].map(i => <p ref={el => pageItem.current[i] = el} className='page-item' key={i} onClick={() => { SetPageIndex(i + 1); console.log(i); }}>{i + 1}</p>)}
            <p onClick={next} className='page-item'><RiArrowGoForwardLine /></p>
            <p>Page {pageIndex}/{maxPage}</p>
        </div >
    )

}

export default Pagination
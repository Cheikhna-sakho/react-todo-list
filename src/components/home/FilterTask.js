import { useRef } from 'react'
import { BsFilter } from "react-icons/bs";
import { FilterDataContext } from '../../contexts/TaskContext';
// import { activeClass } from '../../utils/activeClass';

const FilterTask = () => {
    const filterItems = useRef();
  
    const {filterByDate,filterByDesc} = FilterDataContext();
    return (
        <div className='filter-box'>
            <p className="filter flex"><span><BsFilter /></span> Trier par</p>
            <div ref={filterItems} className='filter-items'>
                <p onClick={filterByDate}>date</p>
                <p onClick={filterByDesc}>description</p>
            </div>
        </div>
    )
}

export default FilterTask

import { FcSearch } from "react-icons/fc";

import { SearchDataContext } from '../../contexts/TaskContext';
import AddTask from './AddTask';
import FilterTask from "./FilterTask";
import ShowByCompleted from "./ShowByCompleted";



const HomeTop = () => {
    const { setSearch } = SearchDataContext();
    return (
        <div className="top-home grid-col">
            <h2>Ma Liste des Taches</h2>
            <div className="search-bar flex">
                <span><FcSearch /></span> <input type="search" onChange={e =>{ setSearch(e.target.value);}} placeholder='chercher une tache' />
            </div>
            <ShowByCompleted />
            <div className="todo-option flex">
                <FilterTask />
                <AddTask />
            </div>
        </div>
    )
}

export default HomeTop;
import { TaskCompletedDataContext } from '../../contexts/TaskContext';

const ShowByCompleted = () => {
    const { setTaskCompleted } = TaskCompletedDataContext()
    return (
        <select onChange={(e) => setTaskCompleted(e.target.value)}>
            <option value={"null"}>Tout</option>
            <option value={true}>Completé</option>
            <option value={false}>En court</option>
        </select>
    )
}

export default ShowByCompleted
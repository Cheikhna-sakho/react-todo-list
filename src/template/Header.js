
import { FcTodoList } from "react-icons/fc";

// import { FcSearch } from "react-icons/fc";
import Nav from './Nav';
const Header = () => {
  // const { user } = UserDataContext();
  // const [search, setSearch] = useState();
  return (
    <header className='grid'>
      <div className="logo"><span>TO</span>DO<FcTodoList /></div>
      <div className="header-box-items grid-col">
        {/* {user && (
          <div className="search-bar flex">
            <span><FcSearch /></span> <input type="search" onChange={e => setSearch(e.target.value)} placeholder='chercher une tache' />
          </div>
        )} */}
        <Nav />

      </div>
    </header>
  )
}

export default Header

    import { PiMagnifyingGlassBold } from "react-icons/pi";

    const SearchBar = () => {
        return (
            <div className='input-wrapper'>
                <input className="busca" placeholder='' />
                <button className='search-button'><PiMagnifyingGlassBold className='lupa' fontSize={28} /></button>
            </div>
        )
    }

    export default SearchBar
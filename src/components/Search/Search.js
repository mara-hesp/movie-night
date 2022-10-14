import { useState } from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue('')
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputField()
    }

    return (
        <div className='search'>
            <form>
                <input className='input' value={searchValue} onChange={handleSearchInputChanges} type='text' />
                <input className='button' onClick={callSearchFunction} type='submit' value='Buscar' />
            </form>
        </div>
    )
}

export default Search
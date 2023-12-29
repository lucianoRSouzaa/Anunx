import { useState } from 'react'
import {
    IconButton,
    InputBase,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ handleSubmitSearch }) => {
    const [search, setSearch] = useState()

    return (
        <>
            <InputBase
                placeholder="Ex: iPhone 12"
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton onClick={() => handleSubmitSearch(search)}>
                <SearchIcon />
            </IconButton>
        </>
    )
}

export default SearchBar
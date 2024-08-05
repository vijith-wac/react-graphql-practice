import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'


const GET_CHARACTER_LOCATIONS = gql`
query GetSearch($name : String!){
    characters(filter:{
        name: $name
    }){
        results{
        location{
            id
            name
        }
        }
    }
}
`

const CharacterSearch = () => {
    const [name, setName] = useState('')

    const [getLocation, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS)


    const handleSearch = () => {
        getLocation({
            variables: {
                name
            }
        })
    }

    console.log({ loading, data, error, called })

    return (


        <div>
            <h2>Character search</h2>
            <input onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

            {loading && <h2>Loading</h2>}
            {!loading && !error && called && data.characters.results.length===0 && <h2>No characters available</h2>}
            {error && <h2>Error: {error.message}</h2>}
            {!loading&&!error&&called&&data && (
                <div>
                    {data.characters.results?.map(({location}) => {
                        return (
                            <div key={location.id}>
                                <h2>{location.name}</h2>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>

    )
}

export default CharacterSearch
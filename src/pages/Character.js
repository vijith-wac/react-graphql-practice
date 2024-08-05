
import React from 'react'
import UseCharcter from '../hooks/useCharacter'
import { useParams } from 'react-router-dom'
import { FidgetSpinner } from 'react-loader-spinner'



export const Character = () => {
    const {id} = useParams()
    const { loading, data, error } = UseCharcter(id)
    if(loading) return   <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="fidget-spinner-loading"
    wrapperStyle={{}}
    wrapperClass="fidget-spinner-wrapper"
    />

if(error) return <h2>Error Page</h2>
    return (
        <div>
         <h2>{data.character.name}</h2>
        <img src={data.character.image} alt={data.character.name}/>
        {data?.character?.episode?.map((episode)=>{
            return(
                <div>
                    <h2>{episode.episode}</h2>
                    <h3>{episode.name}</h3>
                    </div>
            )
        })}

        </div>
    )
}

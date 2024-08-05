import React from 'react'

import { FidgetSpinner } from 'react-loader-spinner'
import useCharaters from '../hooks/useCharaters'
import { Link } from 'react-router-dom'




function CharactersList() {
    const{loading,data,error}=useCharaters()
    
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
    <div className='character-list'>
        {data?.characters?.results?.map((charcter)=>{
            return(
                <div key={charcter.id}>
                    <Link to={`${charcter.id}`}>
                    <img src={charcter.image} alt={charcter.name}/>
                    <h2>{charcter.name}</h2>
                    </Link>
                    
                    </div>
            )
        })}
    </div>
  )
}

export default CharactersList
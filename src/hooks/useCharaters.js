import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_CHARACTERS = gql`
query {
  characters{
    results{
      id
      name
      image
    }
  }
}
`

const useCharaters = ()=>{
    const {loading,data,error} = useQuery(GET_CHARACTERS)
    return{
        loading,data,error
    }
}

export default useCharaters
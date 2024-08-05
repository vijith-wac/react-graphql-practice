import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_CHARACTER = gql`
    query GetCharcter($id: ID!){
        character(id:$id){
            name
            id
            image
            episode {
            name
            episode
            } 
    }
}
`
const UseCharcter = (id)=>{
    const {loading,data,error} = useQuery(GET_CHARACTER,{
        variables:{
            id
        }
    })
    return{loading,data,error}
}

export default UseCharcter
import React from "react";
import { useQuery, gql } from '@apollo/client'

const GET_PAGE_CONTENT = gql`
    query {
        book {
        author
        pages{
            content
            pageIndex
            tokens {
            position
            value
            }
        }
        title
        }
    }
`

export default function PageContent(){

    const {error, data, loading} = useQuery(GET_PAGE_CONTENT)

    console.log({error, loading, data})

    return <div></div>
}
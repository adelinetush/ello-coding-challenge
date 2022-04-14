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

export const usePageContent = () => {
    const {error, data, loading} = useQuery(GET_PAGE_CONTENT)

    return {
        error,
        data,
        loading,
    }
} 
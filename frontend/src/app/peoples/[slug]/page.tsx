import { components } from '../../../api/schema'
import { apiClient } from '../../../api/client'
import PeopleDetail from '../../../components/PeopleDetail/PeopleDetail'

interface PeoplePageProps {
    params: {
        slug: string
    }
}

export default async function PeoplePage({ params: { slug } }: PeoplePageProps) {
    const response = await apiClient.GET('/api/people/{slug}', {
        params: {
            path: { slug }
        }
    })
    if (response.error) { // TODO: error
        throw new Error('error')
    }

    return (
        <>
            <PeopleDetail data={response.data} />
        </>
    )
}
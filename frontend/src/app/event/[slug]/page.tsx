import { apiClient } from '../../../api/client'
import EventDetail from "../../../components/EventDetail/EventDetail"

interface EventPageProps {
    params: {
        slug: string
    }
}

export default async function EventPage({ params: { slug } }: EventPageProps) {
    const response = await apiClient.GET('/api/event/event/{slug}', {
        params: {
            path: { slug }
        }
    })

    if (response.error) { // TODO: error
        throw new Error('error')
    }

    return (
        <>
            <EventDetail data={response.data} />
        </>
    )
}
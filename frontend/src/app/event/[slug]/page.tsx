import path from 'path'
import { apiClient } from '../../../api/client'
// import EventShow from '../components/EventShow/EventShow'
import EventDetail from "../../../components/EventDetail/EventDetail"

interface EventPageProps {
    params: {
        slug: string
    }
}

export default async function EventPage({ params: { slug } }: EventPageProps) {
    const response = await apiClient.GET('/api/event/{slug}', {
        params: {
            path: { slug }
        }
    })

    if (response.error) { // TODO: error
        throw new Error('qweqwe')
    }

    return (
        <>
            <EventDetail data={response.data} />
        </>
    )
}
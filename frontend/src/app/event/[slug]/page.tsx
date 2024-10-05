// import { apiClient } from '../api/client'
// import EventShow from '../components/EventShow/EventShow'

interface EventPageProps {
    params: {
        slug: string
    }
}

export default async function EventPage({params: {slug}}: EventPageProps) {
    // const response = await apiClient.GET('/api/event_show/list')

    // if (response.error) {
    //     throw new Error('qweqwe')
    // }

    return (
        <>
            {slug}
        </>
    )
}
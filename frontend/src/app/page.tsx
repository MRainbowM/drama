import { apiClient } from '../api/client'
import EventShow from '../components/EventShow/EventShow'

export default async function MainPage() {
    const response = await apiClient.GET('/api/event_show/list')

    if (response.error) {
        throw new Error('qweqwe')
    }

    return (
        <>
            {response.data.map(item => (
                <EventShow key={item.id} data={item} />
            ))}
        </>
    )
}
import { apiClient } from '../api/client'
import EventPreview from '../components/EventPreview/EventPreview'
import Main from '../components/Main/Main'
import '../styles/page.scss'

export default async function MainPage() {
    const response = await apiClient.GET('/api/event/event_show/list')

    if (response.error) {
        throw new Error('qweqwe') //TODO
    }

    return (<>
        <Main/>
        <h2>Афиша</h2>
        {response.data.map(item => (
            <EventPreview key={item.id} data={item} />
        ))}
    </>)
}
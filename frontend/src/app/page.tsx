import { apiClient } from '../api/client'
import EventPreview from '../components/EventPreview/EventPreview'
import MainSection from '../components/MainSection/MainSection'
import '../styles/page.scss'

export default async function MainPage() {
    const currentDate = new Date();

    const response = await apiClient.GET('/api/event/event_show/list', {
        params: {
            query: {
                is_enable: true,
                start_at__gte: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
            }
        }
    });

    if (response.error) {
        console.log(response.error);
        throw new Error('error'); //TODO
    }

    return (<>
        <MainSection />
        <h2>Афиша</h2>
        {response.data.map(item => (
            <EventPreview key={item.id} data={item} />
        ))}
    </>);
}
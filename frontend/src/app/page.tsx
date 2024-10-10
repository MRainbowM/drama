import { apiClient } from '../api/client'
import EventListSection from '../components/EventListSection/EventListSection';
import MainSection from '../components/MainSection/MainSection'
import '../styles/page.scss'

export default async function MainPage() {
    const currentDate = new Date();

    // Спектакли в афише
    const responseEventsByDate = await apiClient.GET('/api/event/event_show/list', {
        params: {
            query: {
                is_enable: true,
                start_at__gte: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
            }
        }
    });

    if (responseEventsByDate.error) {
        console.log(responseEventsByDate.error);
        throw new Error('error'); //TODO
    }

    // Репертуар
    const responseEventsByAbc = await apiClient.GET('/api/event/event/list', {
        params: {
            query: {
                is_enable: true
            }
        }
    });

    if (responseEventsByAbc.error) {
        console.log(responseEventsByAbc.error);
        throw new Error('error'); //TODO
    }

    return (<>
        <MainSection />
        <EventListSection
            eventsByAbc={responseEventsByAbc.data}
            eventsByDate={responseEventsByDate.data}
        />
    </>);
}
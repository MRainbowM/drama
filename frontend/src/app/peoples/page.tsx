import { apiClient } from '../../api/client'
import PeopleListSection from '../../components/PeopleListSection/PeopleListSection';


export default async function PeopleListPage() {
    const response = await apiClient.GET('/api/people/list');

    if (response.error) {
        console.log(response.error);
        throw new Error('error'); //TODO
    }

    // console.log(response.data);

    return (<>
        <PeopleListSection data={response.data} />
    </>);
}
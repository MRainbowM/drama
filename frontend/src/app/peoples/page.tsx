import { apiClient } from '../../api/client'
import PeopleListSection from '../../components/PeopleListSection/PeopleListSection';
import { peopleTagList } from '../../constants/peopleTags';


export default async function PeopleListPage() {
    const response = await apiClient.GET('/api/people/list');

    if (response.error) {
        console.log(response.error);
        throw new Error('error'); //TODO
    }

    let peoples = {};
    peopleTagList.forEach(tag => {
        peoples[tag] = {}
    });

    response.data.forEach(function (people, i, arr) {
        const firstLetter = people.last_name[0].toUpperCase(); //TODO check ln
        if (!peoples[people.tag][firstLetter]) {
            peoples[people.tag][firstLetter] = [];
        }
        peoples[people.tag][firstLetter].push(people);
    });

    return (<>
        <PeopleListSection data={peoples} />
    </>);
}
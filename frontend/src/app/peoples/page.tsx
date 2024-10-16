import { apiClient } from '../../api/client'
import PeopleListSection from '../../components/PeopleListSection/PeopleListSection';


export default async function PeopleListPage() {
    const response = await apiClient.GET('/api/people/list');

    if (response.error) {
        console.log(response.error);
        throw new Error('error'); //TODO
    }

    const peoplesGroupTag = Object.groupBy(response.data, ({ tag }) => tag);

    let peoples = {}

    Object.keys(peoplesGroupTag).forEach(function (item, i, arr) {
        peoples[item] = {};

        let tagList = Object.values(peoplesGroupTag[item]);

        for (let index = 0; index < tagList.length; index++) {
            const peopleData = tagList[index];   
            const firstLetter = peopleData.last_name[0].toUpperCase();

            if (Object.keys(peoples[item]).indexOf(firstLetter) === -1){
                peoples[item][firstLetter] = [];
            }
            peoples[item][firstLetter].push(peopleData);
        }
    });


    return (<>
        <PeopleListSection data={peoples} />
    </>);
}
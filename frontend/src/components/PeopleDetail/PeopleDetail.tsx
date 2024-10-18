import { components } from '../../api/schema'

interface PeopleDetailProps {
    data: components['schemas']['PeopleDetailSchema']
}

export default function PeopleDetail({ data }: PeopleDetailProps) {
    return (<></>);
}
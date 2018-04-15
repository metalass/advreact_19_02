import {StackNavigator, TabNavigator} from 'react-navigation'
import EventMap from './components/screens/event-map'
import SignInScreen from './components/screens/sign-in'
import EventList from './components/screens/event-list'
import PeopleList from './components/screens/people-list'
import PersonPhoto from './components/screens/person-photo'

const ListsNavigator = TabNavigator({
    events: {
        screen: EventList
    },
    people: {
        screen: PeopleList
    }
})

const AppNavigator = StackNavigator({
    auth: {
        screen: SignInScreen
    },
    lists: {
        screen: ListsNavigator
    },
    event: {
        screen: EventMap
    },
    personPhoto: {
        screen: PersonPhoto
    }
})

export default AppNavigator
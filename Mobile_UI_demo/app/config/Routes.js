import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainTab from '../screens/MainTab';
import SecondaryTab from '../screens/SecondaryTab';


const Routes = createMaterialTopTabNavigator(
    {
        MainTab: {
            screen: MainTab,
            navigationOptions: {

            }
        },
        SecondaryTab: {
            screen: SecondaryTab,
            navigationOptions: {

            }
        }
    },
    {
    initialRouteName: 'MainTab'
    }
    );

    export default createAppContainer(Routes);
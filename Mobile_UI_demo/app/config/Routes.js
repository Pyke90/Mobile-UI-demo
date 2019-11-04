import {createMaterialTopTabNavigator} from 'react-navigation';
import MainTab from '../screens/MainTab';

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

    export default Routes
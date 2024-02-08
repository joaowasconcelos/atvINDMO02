import Home from "../pages/Home";
import Cursos from "../pages/Cursos";
import Contato from "../pages/Contatos";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Header } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel:false,
                
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name='home' color={color} size={size}></FontAwesome5>

                    },
                }}
            />

            <Tab.Screen
                name="Cursos"
                component={Cursos}
                options={{

                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name='book' color={color} size={size}></FontAwesome5>
                    },
                }}
            />

            <Tab.Screen
                name="Contato"
                component={Contato}
                options={{

                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name='phone-alt' color={color} size={size}></FontAwesome5>
                    },
                }}
            />
        </Tab.Navigator>
    )
}
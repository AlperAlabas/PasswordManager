import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect,useForceUpdate,useRef }from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Card, FAB, Input } from 'react-native-elements';
import { Avatar ,Button, Overlay} from 'react-native-elements';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as SQLite from "expo-sqlite";
import Home from "./HomeScreen"
import Settings from "./SettingsScreen"
import Login from "./LoginScreen"
import Logout from "./LogoutScreen"
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { collection, addDoc,doc,setDoc,getDocs ,getFirestore, collectionGroup,query,onSnapshot,serverTimestamp} from "firebase/firestore";
import {app} from "./Firebase" 
import { getAuth ,onAuthStateChanged} from 'firebase/auth';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

let apps=[];
let emailUser;
const Tab = createBottomTabNavigator();
const auth = getAuth(app);
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const db = getFirestore(app);
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    emailUser = user.email;
    getDB();
  } else {
    // User is signed out
    // ...
  }
});

async function getDB(){
  try {
    apps=[];
    const q = query(collection(db, emailUser));

    const querySnapshot = await getDocs(q);
      
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      apps.push({"title":doc.id,"password":doc.get("Pass")})
    });
  
  } catch (error) {
    console.error();
  };
  
  
} 

  



async function add(name,pass) {
  // is text empty?
  
try {

  const docRef = await setDoc(doc(db, emailUser,name), {
  
  Pass: pass,
  
});
console.log("Document written with ID: ");

} catch (e) {
console.error("Error adding document: ", e);
}
};
export default function HomeScreen() {
  
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);
  const [DATA, setData] = useState(null);
  const [send, setSend] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  
    
  
    
   
  
  
    //getDB();
    /*
    const q = query(collection(db, emailUser));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
  
      querySnapshot.forEach((doc) => {      
          console.log("user");
          apps.push({
            "title":"totu",
            "password":"Pass"
          });   
      });
      
      
    });
    
    console.log(apps[0]);
    //unsubscribe();
    */
    
    
  
  
  
  const [visible,setVisible]=useState(false);  
  const toggleOverlay = () => {
        setVisible(!visible);
  };
    const renderItem = ({ item }) => (
        <Card wrapperStyle={styling.Card}>
            <Avatar avatarStyle={styling.avatarTitle} source={require("./assets/emptyIcon.png")} size="medium"  activeOpacity={0.6}/>
            <View style={styling.viewRow}>
            <Card.Title>{item.title}</Card.Title>
            <Card.FeaturedSubtitle style={styling.CardSubTitle}>{item.password}</Card.FeaturedSubtitle>
            
            </View>
            <Button containerStyle={styling.cardButton} title="Del" buttonStyle={styling.cardButton}></Button>
        </Card>
        //<Item title={item.title} />
      );

    return (
        <SafeAreaView style={styling.screen}>
            
            <FlatList
            data={apps}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            />
            <FAB style={{position:"absolute",left:(ScreenWidth*75)/100,top:(ScreenHeight*78)/100, padding:10,backgroundColor:"rgba(0,0,0,0)",borderRadius:0}} color="#4D4948" icon={<Icon name="plus" color="#EBD660"></Icon>} onPress={()=>{toggleOverlay();}}></FAB>
            
            <Overlay overlayStyle={styling.overlayStyling} isVisible={visible} onBackdropPress={toggleOverlay}>
              <Input placeholder="Associated App" onChangeText={(text) => setName(text)}
              ></Input>
              <Input placeholder="Password" onChangeText={(text) => setPass(text)} ></Input>                
              <Button style={styling.button} raised={true} title="Submit" onPress={async ()=>{await add(name,pass);
                await getDB();
                setName(null); setPass(null);setVisible(!visible); }}></Button>
            </Overlay>
            
      
        </SafeAreaView>
    );
}

/*
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7',
    title: 'Third Item',
  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d',
    title: 'Third Item',
  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29',
    title: 'Third Item',
  },
];*/

const Item = ({ title }) => (
  <View style={styling.item}>
    <Text style={styling.title}>{title}</Text>
  </View>
);


const styling = StyleSheet.create({
    header:
    {
      backgroundColor:"#4D4948",
      
    },
    headerTitle:
    {
      color:"white"
    },
    screen:
    {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'stretch',
      backgroundColor:"#EBD660"
    },
    button: 
    {
      position:"absolute",
      alignSelf:"center"
    },
    cardButton:
    {
      
      backgroundColor:"red",
      justifyContent:'center',
      alignSelf:"center"
    },
    Card:
    {
        
        flex:1,
        flexDirection: "row" ,
        justifyContent: 'space-between', 
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 28,
    },
    title: {
        fontSize: 32,
    },
    CardSubTitle:
    {
        color:"black"
    },
    viewRow:
    {
        marginHorizontal:20,
        flexDirection: "column"
    },
    avatarTitle:
    {
        flex:1,
        borderRadius:100,
        
        alignItems:"stretch",
        justifyContent:"center",
        
    },
    overlayStyling:
    {
        width:(ScreenWidth*3)/4,
        height:(ScreenHeight*3)/4,
        backgroundColor:"#4D4948"
    }
});


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Switch,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SideMenu from 'react-native-side-menu';
import Menu from './components/menu';

const App: props => React$Node = () => {
  const [switchScreen, setSwitchScreen] = useState(true);
  const [switchTab, setSwitchTab] = useState(true);

  const menu = <Menu navigator={navigator} />;
  const [responsObj, setResponseObj] = useState([]);
  const [selectedObj, setSelectedObj] = useState([]);
  const [favoritesObj, setFavoritesObj] = useState([]);


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    //Request Type
  })
    .then(response => response.json())
    //If response is in json then in success
    .then(responseJson => {
      //Success
      // alert(JSON.stringify(responseJson));
      // alert(typeof(responseJson));

      console.log(responseJson);

      responseJson.forEach(element => {
        // alert(JSON.stringify(element));

        responsObj.push(element);
      });
    })
    //If response is not in json then in error
    .catch(error => {
      //Error
      alert(JSON.stringify(error));

      console.error(error);
    });



  return (
    <>
      <SideMenu menu={menu}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {switchScreen ? (
              <View style={styles.body}>
                <View style={styles.navBox}>
                  <Text style={styles.sectionNavBox}>Posts</Text>
                  <Text style={styles.sectionNavBox} />

                  <Button
                  style={{fontSize: 32}}
                    title="&#9850;"
                    color="#66CD00"
                    onPress={() => {
                      fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'GET',
                        //Request Type
                      })
                        .then(response => response.json())
                        //If response is in json then in success
                        .then(responseJson => {
                          //Success
                          // alert(JSON.stringify(responseJson));
                          // alert(typeof(responseJson));
                    
                          console.log(responseJson);
                          // responsObj = [];
                          responseJson.forEach(element => {
                            // alert(JSON.stringify(element));
                    
                            responsObj.push(element);
                          });
                        })
                        //If response is not in json then in error
                        .catch(error => {
                          //Error
                          alert(JSON.stringify(error));
                    
                          console.error(error);
                        });
                        setSwitchTab(switchTab ? false : true);
                        Alert.alert("Posts Updated :D")
                    }}
                  />
                </View>
                <View style={styles.postBox}>
                  <Button
                    title="ALL"
                    // title={switchTab ? 'on' : 'off'}
                    style={styles.postBoxAll}
                    color="#66CD00"
                    onPress={() => {
                      setSwitchTab(switchTab ? false : true);
                    }}
                  />
                  <Button
                    title="FAVORITES"
                    // title={switchTab ? 'off' : 'on'}
                    color="#66CD00"
                    onPress={() => {
                      setSwitchTab(switchTab ? false : true);
                    }}
                  />
                </View>
                <View style={styles.postBoxLine}>
                  <View
                    style={
                      switchTab
                        ? {backgroundColor: '#66CD00', width: 200}
                        : {
                            backgroundColor: '#ffffff',
                            width: 200,
                            borderRadius: 4,
                            borderColor: Colors.black,
                            opacity: 4,
                          }
                    }
                  />
                  <View
                    style={
                      switchTab
                        ? {
                            backgroundColor: '#ffffff',
                            width: 200,
                            borderRadius: 4,
                            borderColor: Colors.black,
                            opacity: 4,
                          }
                        : {backgroundColor: '#66CD00', width: 200}
                    }>
                    <Text> </Text>
                  </View>
                </View>
                {switchTab == true ? (
                  <View style={styles.sectionContainer}>
                    {favoritesObj.map(item => (
                      <View style={styles.PostsContainer}>
                        <View style={styles.PostButton}>
                          <TouchableHighlight
                            // style={item.id < 21 ? styles.circles : {}}
                            underlayColor="#ccc"
                            onPress={() => {
                              selectedObj.push(item),
                                setSwitchScreen(switchScreen ? false : true);
                            }}>
                            <Text style={{fontSize: 22}}>	&#8902; </Text>
                          </TouchableHighlight>
                        </View>
                        <View style={styles.PostTitle}>
                          <Text style={styles.PostTitleText}>
                            {' '}
                            {item.title}
                          </Text>
                        </View>
                      </View>
                    ))}
                     <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                        position: 'absolute',
                        top: -32,
                        right: 10,
                        height: 70,
                        // backgroundColor: '#FF6347',
                        borderRadius: 100,
                        color: 'ligthgray',
                      }}
                      onPress={() => {
                        
                          setFavoritesObj([]);
                      }}>
                      <Text style={{fontSize: 40}}>&#x1F5D1;</Text>
                    </TouchableOpacity>

                  </View>
                ) : (
                  <View style={styles.sectionContainer}>
                    {responsObj.map(item => (
                      <View style={styles.PostsContainer}>
                        <View style={styles.PostButton}>
                          <TouchableHighlight
                            style={item.id < 21 ? styles.circles : {}}
                            underlayColor="#ccc"
                            onPress={() => {
                              selectedObj.push(item),
                                setSwitchScreen(switchScreen ? false : true);
                            }}>
                            <Text> </Text>
                          </TouchableHighlight>
                        </View>
                        <View style={styles.PostTitle}>
                          <Text style={styles.PostTitleText}>
                            {' '}
                            {item.title}
                          </Text>
                        </View>
                      </View>
                    ))}
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                        position: 'absolute',
                        bottom: -39,
                        right: 10,
                        height: 70,
                        // backgroundColor: '#FF6347',
                        borderRadius: 100,
                        color: 'ligthgray',
                      }}
                      onPress={() => {
                        
                          setResponseObj([]);
                      }}>
                      <Text style={{fontSize: 40}}>&#x1F5D1;</Text>
                    </TouchableOpacity>
   
                  </View>
                )}


              </View>
            ) : (
              <View style={styles.body}>
                <View style={styles.navBox}>
                  <Button
                    title="&#8592;"
                    color="#66CD00"
                    onPress={() => {
                      selectedObj.pop(),
                        setSwitchScreen(switchScreen ? false : true);
                    }}
                  />
                  <Button
                    title="&#9734;"
                    color="#66CD00"
                    onPress={() => {
                      favoritesObj.push(selectedObj[0]);
                      Alert.alert("Added to favorites !")
                    }}
                  />
                </View>

                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Description</Text>
                  {// typeof((responsObj))

                  selectedObj.map(item => (
                    <View style={styles.PostsContainer}>
                      <View style={styles.PostTitle}>
                        <Text style={styles.PostTitleText}> {item.body}</Text>
                      </View>
                    </View>
                  ))}
                  {// typeof((responsObj))

                  selectedObj.map(item => (
                    <View style={styles.PostsContainer}>
                      <Text style={styles.sectionTitle1}>
                        User id {item.userId}
                      </Text>
                    </View>
                  ))}
                  <View style={styles.PostTitle}>
                    <Text style={styles.PostTitleText}>
                      Name - Daniel Alejandro Salgado
                    </Text>
                    <Text style={styles.PostTitleText}>
                      Email - daniel.salgado02@gmail.com
                    </Text>
                    <Text style={styles.PostTitleText}>
                      Phone - + 57 3045648027
                    </Text>
                    <Text style={styles.PostTitleText}>
                      Website - www.codeyourmedia.com
                    </Text>
                  </View>
                  <View style={styles.commentsView}>
                    <Text style={styles.comments}>COMMENTS</Text>
                  </View>

                  <View style={styles.dsfsdfsdf} />
                  {// typeof((responsObj))

                  selectedObj.map(item => (
                    <View style={styles.PostsContainer}>
                      <View style={styles.PostButton}>
                        {/* <Text> but</Text> */}
                        <TouchableHighlight
                          underlayColor="#ccc"
                          onPress={() => {
                            selectedObj.push(item),
                              setSwitchScreen(switchScreen ? false : true);
                          }}>
                          <Text> </Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.PostTitle}>
                        <Text style={styles.PostTitleText}> {item.title}</Text>
                      </View>
                    </View>
                  ))}
                  {// typeof((responsObj))

                  selectedObj.map(item => (
                    <View style={styles.PostsContainer}>
                      <View style={styles.PostButton}>
                        {/* <Text> but</Text> */}
                        <TouchableHighlight
                          underlayColor="#ccc"
                          onPress={() => {
                            selectedObj.push(item),
                              setSwitchScreen(switchScreen ? false : true);
                          }}>
                          <Text> </Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.PostTitle}>
                        <Text style={styles.PostTitleText}> {item.title}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </SideMenu>
    </>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    paddingBottom: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: "Cochin"
  },
  sectionTitle1: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 16,
  },
  sectionNavBox: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
    fontFamily: "Cochin"


  },
  sectionButton: {
    fontSize: 100,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#66CD00',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  navBox: {
    backgroundColor: '#66CD00',
    color: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  postBox: {
    backgroundColor: '#66CD00',
    color: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 14,
    paddingHorizontal: 10,
    paddingBottom: 14,
    

  },
  postBoxLine: {
    height: 4,
    // backgroundColor: '#66CD00',
    // color: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    
  },
  postBoxLineSelected: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  postBoxLineNotSelected: {
    backgroundColor: '#66CD00',
    borderRadius: 4,
  },
  postBoxAll: {
    borderBottomWidth: 0,
    marginHorizontal: 20,

  },
  PostsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginHorizontal: -20,
    
  },
  PostButton: {
    width: 20,
  },
  PostTitle: {
    width: '88%',
    textAlign: 'left',
    // backgroundColor: '#000000'
  },
  PostTitleText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'gray',
    textAlign: 'left',
  },
  circles: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.04,
    height: Dimensions.get('window').width * 0.04,
    backgroundColor: '#0080FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  commentsView: {
    marginTop: 16,
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
    marginHorizontal: -20,
    marginTop: 60,
  },
  comments: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
});

export default App;

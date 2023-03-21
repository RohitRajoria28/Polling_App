import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
 
import axios from 'axios';


type Post = {
   objectID: string;
   title: string;
   url: string;
   created_at: string;
   author: string;
 }
 
 const HomeScreen = () => {
   const [posts, setPosts] = useState<Post[]>([]);
   const navigation = useNavigation();
 
   useEffect(() => {
     const fetchPosts = async () => {
       const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0');
       setPosts(response.data.hits);
     };
 
     const intervalId = setInterval(fetchPosts, 10000);
 
     return () => clearInterval(intervalId);
   }, []);
 
   const renderItem = ({ item }: { item: Post }) => (
     <TouchableOpacity onPress={() => navigation.navigate('Details', { json: item })}>
       <View style={styles.item}>
         <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.url}>{item.url}</Text>
         <Text style={styles.author}>{item.author}</Text>
         <Text style={styles.created_at}>{item.created_at}</Text>
       </View>
     </TouchableOpacity>
   );
 
   return (
     <View style={styles.container}>
       <FlatList
         data={posts}
         renderItem={renderItem}
         keyExtractor={(item) => item.objectID}
       />
     </View>
   );
 };


 
const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#fff',
   },
   item: {
     padding: 16,
     borderBottomWidth: 1,
     borderBottomColor: '#ddd',
   },
   title: {
     fontSize: 16,
     fontWeight: 'bold',
     marginBottom: 8,
   },
   url: {
     color: 'blue',
     marginBottom: 8,
   },
   author: {
     color: '#666',
     marginBottom: 4,
   },
   created_at: {
     color: '#666',
   },
 });


 export default HomeScreen;
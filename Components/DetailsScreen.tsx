import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';



const DetailsScreen = ({ route }: { route: any }) => {
    const { json } = route.params;
  
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(json, null, 2)}</Text>
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
  
  

export default DetailsScreen
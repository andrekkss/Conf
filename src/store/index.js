import { AsyncStorage } from 'react-native';

class Store {
    static storeData = async (key, data) => {
        try {
            return await AsyncStorage.setItem(key,  JSON.stringify(data));
        } catch (err) {
            return err;
        }
    }
    
    static retrieveData = async (key) => {
        let items = [];
        try {
            const keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiGet(keys).then((result) => {
                result.map(req => {
                    if(req[0].includes(key)) items.push(JSON.parse(req[1]));
                });
            });
            return items
        } catch (error) {
            console.log(error)
        }
    };

    static delete = async() =>{
        await AsyncStorage.clear();
    }

    static getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) return JSON.parse(value);
        } catch (error) {
            console.log(error)
        }
      };
}

export default Store;
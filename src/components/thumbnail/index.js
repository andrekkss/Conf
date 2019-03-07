import React from 'react';
import { List, ListItem, Thumbnail, Text, Left, Body, Card, CardItem } from 'native-base';
import Store from '../../store/index';

const ListThumb = ({ data, navigation }) => {
    return (
        <List>
            {data.map(values => {
                return(
                    <Card>
                       <ListItem thumbnail onPress={() => {navigation.navigate('Detail', { data: values }); Store.storeData(`History:${values.Title}`,values) }}>
                                <Left>
                                    <Thumbnail square source={{ uri: values.Poster }} />
                                </Left>
                                <Body>
                                    <Text>{values.Title}</Text>
                                    <Text note>Ano: {values.Year}</Text>
                                    <Text note numberOfLines={2}>{values.Plot}</Text>
                                </Body>                            
                        </ListItem>
                    </Card>
            );
            })}  
        </List>
    );
}

export default ListThumb;
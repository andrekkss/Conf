import React from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

const SearchBar = (props) => {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon  onPress={props.search} name="ios-search" />
            <Input onChangeText={props.handleChange} value={props.value} placeholder="Procurar novo" />
          </Item>       
        </Header>
      </Container>
    );
}

export default SearchBar;
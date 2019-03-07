import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Container, Header, Icon, Button, Body, Title, Right, Text  } from 'native-base';

import ListThumb from '../../components/thumbnail/index';
import Store from '../../store/index';

class Favorite extends Component {
  constructor(props){
    super(props);
    this.state = ({
      data: [],
      loading: true
    });
  }

  async componentDidUpdate(){
    const data = await Store.retrieveData('Rating');
    if(data === undefined || data.length == 0 ){
      return console.log('nothing');
    }else{ this.setState({ data }) }
  }
  
  render(){
  const { data } = this.state;
  let rows = [];
  data.map(values => rows.push(values.data));
  return(
    <Container>
        <Header>
          <Body style={{ flex: 1, marginLeft: 10 }}>
              <Title>Avaliados</Title>
          </Body>
        </Header>
        <View style={{ paddingTop: 10, paddingBottom: 50, paddingLeft: 10, paddingRight: 10 }}>
           <ScrollView>
            <ListThumb data={rows} navigation={this.props.navigation}/>
          </ScrollView>
        </View>
    </Container>
    );
  }
};

Favorite.navigationOptions = {
  title: 'Avaliados',
  tabBarIcon: <Icon type="AntDesign" name='hearto' size={18} color="#999" />
}


export default withNavigationFocus(Favorite);
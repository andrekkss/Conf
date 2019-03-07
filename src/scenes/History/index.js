import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Container, Header, Icon, Button, Body, Title, Right,Text  } from 'native-base';

import ListThumb from '../../components/thumbnail/index';
import Store from '../../store/index';

class History extends Component {
  constructor(props){
    super(props);
    this.state = ({
      data: [],
    });
  }

  async componentDidUpdate(){
    const data = await Store.retrieveData('History');
    if(data === undefined || data.length == 0 ){
      return console.log('nothing');
    }else{ this.setState({ data }) }
  }
  
  render(){
  const { data } = this.state;
  return(
    <Container>
        <Header>
          <Body style={{ flex: 1, marginLeft: 10 }}>
              <Title>Historico</Title>
          </Body>
        </Header>
        <View style={{ paddingTop: 10, paddingBottom: 50, paddingLeft: 10, paddingRight: 10 }}>
           <ScrollView>
            <ListThumb data={data} navigation={this.props.navigation}/>
          </ScrollView>
        </View>
    </Container>
    );
  }
};

History.navigationOptions = {
  title: 'Historico',
  tabBarIcon: <Icon type="MaterialCommunityIcons" name='history' size={18} color="#999" />
}


export default withNavigationFocus(History);
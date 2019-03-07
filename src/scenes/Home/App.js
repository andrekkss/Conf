import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Icon, Spinner } from 'native-base';

import SearchBar from '../../components/search/index';
import ListThumb from '../../components/thumbnail/index';
import AppService from './AppService';

const films = ['exterminator', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'Solo: A Star Wars Story', 'Rogue One: A Star Wars Story', 'The Empire Strikes Back',  'Return of the Jedi','The Force Awakens', 'The Last Jedi'];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: true,
      search: ''
    }
  }

  async componentDidMount(){
    await films.map(values => AppService.getFilm(values).then(data => {
      this.setState({ data: [ ...this.state.data, data ], loading: false });
    }));
  }

  search = () =>{
    this.setState({ loading: true });
    AppService.getFilm(this.state.search).then(data => {
      this.setState({ data: [ ...this.state.data, data ], loading: false });
    });
  }

  handleChange = (search) =>{
    this.setState({ search });
  }

  render() {
    const { data, loading, search } = this.state;
    return (
        <Container>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ width: '100%', height: 50 }}>
                <SearchBar search={this.search} value={search} handleChange={this.handleChange}/>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 50, paddingLeft: 10, paddingRight: 10 }}>
                {loading ? 
                  <Spinner color='blue' />
                  :
                  <ScrollView>
                    <ListThumb data={data} navigation={this.props.navigation}/>
                  </ScrollView>  
              }
              </View>
            </View>
        </Container>
    );
  }
}

App.navigationOptions = {
  tabBarIcon: <Icon type="AntDesign" name='home' size={18} color="#999" />
}

console.disableYellowBox = true;

export default App;
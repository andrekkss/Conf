import React, {Component}from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title } from 'native-base';
import StarRating from 'react-native-star-rating';
import Store from '../../store/index';


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0.0
    };
  }

  async componentDidMount(){
    const data = this.props.navigation.state.params.data;
    const value = await Store.getData(`Rating:${data.Title}`);
    if(value.rating) this.setState({ starCount: value.rating });
  }

  onStarRatingPress(rating, data) {
    const newRating = {
      data: data,
      rating: rating
    }
    Store.storeData(`Rating:${data.Title}`,newRating)
    this.setState({
      starCount: rating
    });
  }

  render(){
  const data = this.props.navigation.state.params.data;
  return(
    <Container>
        <Header>
         <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
         </Left>
        <Body style={{ display: 'flex', justifyContent: 'center',  marginRight: '15%' }}><Title>Detalhe</Title></Body>
        </Header>
        <Content style={{ padding: 20 }}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail square large source={{uri: data.Poster }} />
                <Body>
                  <Text>{data.Title}</Text>
                  <Text note>{data.Released}</Text>
                  <Text note>Director: {data.Director}</Text>
                  <Text note>Actors: {data.Actors}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
                  <Text note style={{ marginLeft: 10, marginRight: 10 }}>{data.Plot}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating, data)}
                />
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
  }
};

Detail.navigationOptions = {
  title: 'Detalhe',
}

export default Detail;
import React from 'react';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import { Input, Menu } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <div className="header-nav">
        <Container>
          <div className="logo-box" style={{textAlign:'center'}}>
            <span className="logo">Market Logo</span>
            <span className="cart-box"><Icon link name='cart'/></span>
          </div>
        </Container>
      </div>

      <Container>
        <div className="product-list">
          <Grid>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Card>
                <Image src='https://dummyimage.com/250x250.png/ff4444/ffffff' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Rp15.000,-</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='cart' />
                    <strong>Add to Cart</strong>
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src='https://dummyimage.com/250x250.png/ff4444/ffffff' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Rp15.000,-</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='cart' />
                    <strong>Add to Cart</strong>
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src='https://dummyimage.com/250x250.png/ff4444/ffffff' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Rp15.000,-</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='cart' />
                    <strong>Add to Cart</strong>
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src='https://dummyimage.com/250x250.png/ff4444/ffffff' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Rp15.000,-</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='cart' />
                    <strong>Add to Cart</strong>
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;

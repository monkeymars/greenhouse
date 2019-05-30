import React from 'react';
import { Card, Grid, Image, Icon } from 'semantic-ui-react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <div style={{marginBottom: '30px;'}}>
                <Grid.Column>
                    <Card>
                        <Image src='https://dummyimage.com/250x250.png/ff4444/ffffff' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Matthew</Card.Header>
                            <Card.Meta><span className='date'>Rp15.000,-</span></Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='cart' />
                                <strong>Add to Cart</strong>
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </div>
        )
    }
}

export default Product;
import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, List, Icon } from 'semantic-ui-react';
import { removeCart } from '../../actions/cartAction';
import Currency from 'react-currency-formatter';

class Cart extends React.Component {

    removeItem = (item, index) => {
        return () => {
            this.props.removeCart(item, index);
            console.log(item, index);

        }
    }

    render() {
        const cartItems = this.props.cart.listProduct;
        return (
            <div className="App">
                <Container style={{width:'800px'}}>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <div>
                                    {cartItems.map((item, index) => {
                                        return (
                                            <List key={index} divided relaxed>
                                                <List.Item>
                                                    <List.Content floated='right'>
                                                        <Currency quantity={item.price} currency="IDR"/>
                                                        <button className="remove-cart_btn" onClick={this.removeItem(item, index)}>
                                                            <Icon name="trash alternate outline"/>
                                                        </button>
                                                    </List.Content>
                                                    <List.Content>
                                                        <List.Header as='a'>{item.product_name}</List.Header>
                                                    </List.Content>
                                                </List.Item>
                                            </List>
                                        )
                                    })}
                                </div>
                            </Grid.Column>
                            <Grid.Column>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (product, index) => {
            dispatch(removeCart(product, index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

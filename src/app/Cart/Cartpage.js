import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, List, Icon, Button } from 'semantic-ui-react';
import { removeCart, clearCart } from '../../actions/cartAction';
import { placeOrder, saveCredential } from '../../actions/userAction';
import Currency from 'react-currency-formatter';
import GoogleLogin from 'react-google-login';


class Cart extends React.Component {

    removeItem = (item, index) => {
        return () => {
            this.props.removeCart(item, index);
        }
    }

    placeOrder = () => {
        return () => {
            this.props.placeOrder(this.props.cart.listProduct);
            this.props.clearCart();
            this.props.history.push(`/order/complete`);
        }
    }

    responseGoogle = (response) => {
        this.props.saveCredential(response.tokenId, response.profileObj.email)
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
                                <div style={{textAlign:'center'}}>
                                    {
                                        !this.props.user.email &&
                                        <div>
                                            <GoogleLogin
                                                clientId="438627225820-cfb456teukq4hsom88pgi9heucgsb7kv.apps.googleusercontent.com"
                                                buttonText="Login to Place Order" onSuccess={this.responseGoogle} onFailure={this.responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                            <br/>
                                        </div>
                                    }

                                    <Button disabled={!this.props.user.isLoggedIn} style={{marginTop:'10px'}}
                                        onClick={this.placeOrder()}
                                        color='red' content='Place Order'
                                    />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (product, index) => {
            dispatch(removeCart(product, index));
        },

        clearCart: () => {
            dispatch(clearCart());
        },

        saveCredential: (token, email) => {
            dispatch(saveCredential(token, email));
        },

        placeOrder: (cart) => {
            dispatch(placeOrder(cart));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

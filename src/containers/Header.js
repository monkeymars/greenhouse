import React from 'react';
import { connect } from 'react-redux';
import { Container, Icon, Popup, Button, List } from 'semantic-ui-react';
import { logout } from '../actions/userAction';
import Currency from 'react-currency-formatter';

class Header extends React.Component {

    cartTotal(items) {
        return items.reduce(function (total, item) {
            return total + item.price;
        }, 0);
    }
    render() {
        const style = {
            borderRadius: 0,
            padding: '2em',
            width: '400px'
        }

        const cartItems = this.props.cart.listProduct;
        const popupTrigger = (<span><Icon link name='cart'/> {cartItems.length}</span>)
        let popupContent = <div></div>;

        if (cartItems.length) {
            popupContent = (
                <div>
                    <List divided relaxed>
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <List.Item key={index}>
                                        <List.Content floated='right'>
                                            <Currency quantity={item.price} currency="IDR"/>
                                        </List.Content>
                                        <List.Content>
                                            <strong>{item.product_name}</strong>
                                        </List.Content>
                                    </List.Item>
                                )
                            })
                        }
                        <List.Item>
                            <List.Content floated='right'>
                                <strong><Currency quantity={this.cartTotal(cartItems)} currency="IDR"/></strong>
                            </List.Content>
                            <List.Content>
                                <strong>{`Total`}</strong>
                            </List.Content>
                        </List.Item>
                    </List>
                    <div style={{textAlign:'center'}}>
                        <Button color='red' href="/cart" content='Checkout' />
                    </div>
                </div>
            )
        }

        return (
            <div className="header-nav">
                <Container>
                    <div className="logo-box" style={{textAlign:'center'}}>
                        <span className="logo"><a href="/" style={{color:'#333'}}>Logo</a></span>
                        <span className="cart-box">
                            <Popup flowing wide
                                offset='0, 10px'
                                trigger={popupTrigger}
                                content={popupContent}
                                position='bottom left'
                                style={style}
                                on='click'
                            />
                        </span>
                        {   this.props.user.email &&
                            <span className="user-box">
                                <strong>{this.props.user.email}</strong>
                            </span>
                        }

                        {   this.props.user.email &&
                            <span className="logout">
                                <a onClick={() => this.props.logout()}>
                                    <small><strong>Logout</strong></small>
                                </a>
                            </span>
                        }
                    </div>
                </Container>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


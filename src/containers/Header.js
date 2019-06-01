import React from 'react';
import { connect } from 'react-redux';
import { Container, Icon } from 'semantic-ui-react';
import { removeCart } from '../actions/cartAction';

class Header extends React.Component {
    render() {
        return (
            <div className="header-nav">
                <Container>
                    <div className="logo-box" style={{textAlign:'center'}}>
                        <span className="logo">Market Logo</span>
                        <span className="cart-box">
                            <Icon link name='cart'/>
                            {this.props.cart.listProduct.length}
                        </span>
                    </div>
                </Container>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCart: (product) => {
            dispatch(removeCart(product));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);


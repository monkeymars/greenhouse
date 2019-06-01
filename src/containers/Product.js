import React from 'react';
import { connect } from 'react-redux';
import { addCart } from '../actions/cartAction';
import { Card, Grid, Image, Icon } from 'semantic-ui-react';

class Product extends React.Component {
    render() {
        return (
            <Grid.Column>
                <div style={{marginBottom: '30px'}}>
                    <Card>
                        <Image src={this.props.product.product_image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{this.props.product.product_name}</Card.Header>
                            <Card.Meta><span className='date'>{this.props.product.price}</span></Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <a onClick={() => this.props.addCart(this.props.product)}>
                                <Icon name='cart'/><strong>Add to Cart</strong>
                            </a>
                        </Card.Content>
                    </Card>
                </div>
            </Grid.Column>
        )
    }
};

const mapStateToProps = (state) => {
    return { cart: state.cart }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (product) => {
            console.log(product);
            dispatch(addCart(product));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Product);
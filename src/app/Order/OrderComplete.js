import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Icon } from 'semantic-ui-react';


class OrderComplete extends React.Component {
    render() {
        return (
            <div className="App">
                <Container style={{width:'800px'}}>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <div style={{textAlign:'center'}}>
                                    <Icon name='check' color='blue' size='large'/>
                                    <h3>Thanks {this.props.user.email}, Order Placed!</h3>
                                    <a href="/"><strong>Home</strong></a>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderComplete);

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

export default class Loading extends React.Component {
    render() {
        return (
            <Container>
                <div className="product-list">
                    <Grid>
                        <Grid.Row columns={1}>
                            <p>{this.props.label}</p>
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
        )
    }
};
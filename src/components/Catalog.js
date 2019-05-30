import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Product from './Product';
class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <Container>
                <div className="product-list">
                    <Grid>
                        <Grid.Row columns={4}>
                            {/*  */}
                            <Product/>
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
        )
    }
}

export default Catalog;
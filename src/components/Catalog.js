import React, { useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Product from './Product';
import { MockData } from '../hooks/http';

const Catalog = props => {

    const loadedCatalog = MockData ?
        MockData:[];

    let content = <p>Loading..</p>;
    if (loadedCatalog) {
        content = (
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
    } else if (
        !loadedCatalog
    ) {
        content = <p>Could not fetch any data.</p>;
    };

    return content;
}

export default Catalog;
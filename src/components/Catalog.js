import React, { useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Product from './Product';
import { useHttp } from '../hooks/http';
const MOCK_DATA = '../MOCK_DATA.json';

const Catalog = props => {

    const [isLoading, fetchData] = useHttp(
        MOCK_DATA,
        []
    );

    const loadedCatalog = fetchData ?
        fetchData:[];

    let content = <p>Loading..</p>;
    if (!isLoading && loadedCatalog) {
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
        !isLoading && !loadedCatalog
    ) {
        content = <p>Could not fetch any data.</p>;
    }

    return content;
}

export default Catalog;
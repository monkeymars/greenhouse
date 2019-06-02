import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Product from './Product';
import Loading from '../components/loading';
import { useHttp } from '../hooks/http';
const MOCK_DATA = window.location.origin + '/MOCK_DATA.json';

const Catalog = props => {

    const [isLoading, fetchData] = useHttp(
        MOCK_DATA,
        []
    );

    const loadedCatalog = fetchData ?
        fetchData.data:[];

    let content = <Loading label="Loading.."/>;
    if (!isLoading && loadedCatalog) {
        content = (
            <Container>
                <div className="product-list">
                    <Grid>
                        <Grid.Row columns={4}>
                            {
                                loadedCatalog.map((product)=>(
                                    <Product key={product.id} product={product}/>
                                ))
                            }
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
        )
    } else if (
        !isLoading && !loadedCatalog
    ) {
        content = <Loading label="Failed to load product"/>;
    }

    return content;
}

export default Catalog;
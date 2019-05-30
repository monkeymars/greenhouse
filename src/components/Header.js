import React from 'react';
import { Container, Icon } from 'semantic-ui-react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <div className="header-nav">
                <Container>
                    <div className="logo-box" style={{textAlign:'center'}}>
                        <span className="logo">Market Logo</span>
                        <span className="cart-box"><Icon link name='cart'/></span>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header;
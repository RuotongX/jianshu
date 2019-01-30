import React,{Component} from 'react';
import{HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from './style';


class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className = 'left active'>Home</NavItem>
                    <NavItem className = 'left'>Download</NavItem>
                    <NavItem className = 'right'>Log on</NavItem>
                    <NavItem className = 'right'>Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className = 'write'>Write</Button>
                    <Button className = 'reg'>Log in</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;
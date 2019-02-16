import React from 'react';
import {connect} from 'react-redux';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import {CSSTransition} from 'react-transition-group';

const Header = (props)=> {
    const{
        focused,
        handleInputFocus,
        handleInputBlur
    } = props;
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Download</NavItem>
                <NavItem className='right'>Log on</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont' : 'iconfont'}>
                        &#xe623;
                    </i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='write'>
                    <i className="iconfont">&#xe615;</i>
                    Write
                </Button>
                <Button className='reg'>Log in</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) =>{
    return{
        focused:state.header.focused
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleInputFocus(){
           const action = {
               type: 'search_focus'
           };
           dispatch(action);
        },
        handleInputBlur(){
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
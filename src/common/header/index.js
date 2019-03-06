import React from 'react';
import {connect} from 'react-redux';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch} from './style';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
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
                    <SearchInfo>
                        <SearchInfoTitle>
                            Hotspot
                            <SearchInfoSwitch>
                                Switch
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                    </SearchInfo>
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
        focused:state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleInputFocus(){
           dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
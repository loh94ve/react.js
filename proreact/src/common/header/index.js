import React ,{ Component }from "react";
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import  { actionCreators }from './store';

import{ 
    HeaderWrapper,Logo ,Nav ,NavItem ,
    NavSearch ,Addition,Button,SearchWrapper,
    SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,
    SearchInfoList,
} from './style'

class Header extends Component{
    getListArea(){
        const { focused , list ,page ,mouseIn,totalPage} = this.props
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for (let i =  (page -1) * 10 ; i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )            
        }
        }
        

        if(focused || mouseIn){
            return(
            <SearchInfo 
            onMouseEnter={this.props.handleMouseEnter}
            onMouseLeave={this.props.handleMouseLeave}>
                <SearchInfoTitle>
                熱門搜索
                    <SearchInfoSwitch onClick={() =>this.props.handleChangePage(page,totalPage)}>
                    
                    換一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                       pageList
                    }
                   
                </SearchInfoList>
            </SearchInfo>
            )
        }

    }


    render(){
        return(
        <HeaderWrapper>
                
            <Logo href="/" />
            <Nav>
                <NavItem className="left active">首頁</NavItem>
                <NavItem className="left">下載App</NavItem>
                <NavItem className="right">登入</NavItem>
                <NavItem className="right">Aa</NavItem>
                <SearchWrapper> 
                <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames='slide'
                >
                <NavSearch 
                className={this.props.focused?'focused':''}
                onClick={()=>this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}
                ></NavSearch> 
                </CSSTransition> 
                    {this.getListArea()}  
                </SearchWrapper>            
                
            </Nav> 
            <Addition>
                <Button className="writting">寫文章</Button>
                <Button className="reg">註冊</Button>
            </Addition>       
        
        </HeaderWrapper>

        )
    }
}




const mapStateToProps = (state) =>{
    return{        
        focused:state.getIn(['header','focused']),
        //focused:state.get('header').get('focused')
        list:state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),

    }
}

const mapDispathToProps = (dispath) => {
    return{
        handleInputFocus(list){    
            console.log(list);
            (list.size === 0)&& dispath(actionCreators.getList());        
            dispath(actionCreators.searchFocus());                        
            
        },
        handleInputBlur(){            
            dispath(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispath(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispath(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage){
            if(page < totalPage ){
            dispath(actionCreators.changePage(page + 1))
            }else{
                dispath(actionCreators.changePage(1))
            }
        }
    }
}

export default  connect(mapStateToProps, mapDispathToProps)(Header);
import { Component } from "react";
import { ListItem ,ListInfo ,LoadMore } from '../style';
import { connect } from "react-redux";
import { getMoreList } from "../store/actionCreators";




class List extends Component{
    render(){
        const{ list,getMoreList } = this.props;
        return(
            <>
            {
                list.map((item) =>{
                    return(
                        <ListItem key={item.get('id')}> 
                            <img alt='' className='pic' src={item.get('imgUrl')}/>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })
            }
                
            
            <LoadMore onClick={getMoreList}>
                更多訊息
            </LoadMore>
            
            </>
        )
    }
}

const mapState = (state) =>({
    list:state.getIn(['home','articleList'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(){
        dispatch(getMoreList());
    }
});



export default connect(mapState,mapDispatch)(List)
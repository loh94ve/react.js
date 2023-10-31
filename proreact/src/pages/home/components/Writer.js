import { Component } from "react";
import { WriterWrapper } from'../style';
import { connect } from "react-redux";

class Writer extends Component{
    render(){
        return(
            <>
            {
                this.props.list.map((item) =>{
                    const imgUrl = item.get('imgUrl');
                    return(
                        <WriterWrapper key={item.get('id')} style={{ backgroundImage: `url(${imgUrl})` }}></WriterWrapper>
                    )
                })
            }
            
            </>
        )
    }
}
const mapState = (state) =>({
    list:state.getIn(['home','writerList'])
})

export default connect(mapState,null)(Writer)
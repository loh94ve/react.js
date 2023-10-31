import { Component } from "react";
import Topic from './components/Topic';
import Recommend  from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import image from '../../statics/02.jpg'; 
import { HomeWrapper,HomeLeft ,HomeRight
 } from './style';

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft><img  alt=''  className='banner-img' src={image}/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;
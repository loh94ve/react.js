import styled from "styled-components";


export const HomeWrapper= styled.div`
    width:960px;
    margin: 0 auto;
    overflow:hidden;

`
export const HomeLeft= styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px;        
    }
`
export const HomeRight= styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    margin-left:-7px;
    margin-right:-20px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    margin-left:9px;
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 10px;

    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        border-radius: 2px; // 修改為小圓角
        overflow: hidden;
    }
`;
export const ListItem  = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .tittle{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }

`;

export const RecommendWrapper =styled.div`
    margin:30px 0;
    width:280px;
    
`;

export const RecommendItem =styled.div`
    width:280px;
    height:50px;
    background-size: cover;
    background-position: center;
`


export const WriterWrapper = styled.div`
    width: 270px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 270px;
    line-height: 300px;
    text-align: center;
    background-size: cover;
`;

export const LoadMore =styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    border-radius:20px;
    margn:30px 0;
    color:#fff;
    background:#a5a5a5;
    cursor:pointer;
`
;
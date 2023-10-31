import { fromJS } from 'immutable';
import img03 from '../../../statics/03.png';
import date from '../../../statics/date.png';
import QR from '../../../statics/QR.png';
import copyright from '../../../statics/copyright.png';
import down from '../../../statics/down.png';
import member from '../../../statics/member.png';
import new01 from '../../../statics/new01.jpg';
import new02 from '../../../statics/new02.jpg';
import new03 from '../../../statics/new03.jpg';
import new04 from '../../../statics/new04.jpg';




// isImmutable.js 不可改變功能

const defaultState = fromJS({
   topicList:[{
     id:1,
     title:'社會熱點',
     imgUrl:'https://image.cache.storm.mg/styles/smg-800x533-fp-wm/s3/media/image/2023/10/30/20231030-113914_U18448_M901973_cb92.jpeg?itok=87OXIpno',     
   },
   {
    id:2,
    title:"手繪",
    imgUrl:img03,     
  }
],
  articleList:[{
    id:1,
    title:'豐原人注意！豐勢路二段與富陽街口 這9小時施工單向車道封閉',
    desc:'豐原人注意！台中工務段今晚8點到明天早上5點，台中市台3線豐勢路二段與富陽街路口將進行路面刨封工程（遇雨天則取消），該路段採半半施工單向封閉調撥車道交通管制，呼籲用路人注意通行。....',
    imgUrl:new01
  },
  {
    id:2,
    title:'不能去畢旅！台中6國三生持槍門口堵同學 「爆三字經毆人」囂張畫面曝',
    desc:'網路上流傳一則疑似校園鬥毆影片，引起民眾恐慌。根據影片內容，疑似台中某所國中一名男同學放學時，竟拿著兩把手槍，口飆三字經在校園門口對同學嗆聲，當場還挑釁其它同學並動手打人，現場其他同學不但沒害怕閃避，竟還現場拍片，警方發現影片後，緊急傳喚鬧事的6人學生到案，並查扣空氣手槍2支，訊後將仍移送少年法庭。....',
    imgUrl:new02
  },
  {
    id:3,
    title:'台中耶誕嘉年華只辦兩周民怨太短了 議員籲延長升級活動',
    desc:'台中耶誕嘉年華已成為城市年度知名活動，去年更拿下網路分析「全台十大必去浪漫聖誕節景點」第二名。民進黨台中市議員黃守達表示，台中耶誕嘉年華活動只有兩周，民眾抱怨太短了，要求未來延長活動並升級規格。台中市新聞局長鄭照新表示，今年台中耶誕嘉年華從12月15日至1月1日，共17天，未來會研議再延長擴大。...',
    imgUrl:new03
  },{
    id:4,
    title:'柯文哲已經贏了！2024劇本曝光　國民黨「恐賠巨大生死代價」',
    desc:'藍白整合昨（30）日進入政黨協商，國民黨主席朱立倫與民眾黨主席柯文哲會後發表4點共同聲明，稱將力拚立委席次最大化，但對於總統搭檔人選仍無共識。資深媒體人黃智賢直言，無論選舉結果如何，柯文哲都大賺特賺，而國民黨將付出「巨大的生死代價」！...',
    imgUrl:new04

  }
],
  recommendList:[{
    id:1,
    imgUrl:date
  },{
    id:2,
    imgUrl:down
  },{
    id:3,
    imgUrl:copyright
  },{
    id:4,
    imgUrl:member
  }],
  writerList:[{
    id:1,
    imgUrl:QR
  }]
});

export default (state = defaultState , action) =>{
    switch(action.type){        
        default:
            return state;
    }


  
    
}
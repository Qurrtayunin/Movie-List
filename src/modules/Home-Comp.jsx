import React , {Component, Fragment} from 'react';
import '../assets/css/Home.css';
import {  Carousel, Typography, Card, Col, Row, Layout} from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;
const cardData = [
  {
    banner : "https://i.pinimg.com/originals/0c/8a/64/0c8a64202094667fcefe38ba9e65f6f4.jpg",
    title : "I Still Belive (2020)",
    category : "category",
    duration : "1 h",
    production : "18 Maret 2020",
    producer : "ajdbwiejfwkaj",
    desc : "dvjah kagsjdb ksdhba akshdja "
  },
  {
    banner : "https://i.pinimg.com/originals/0c/8a/64/0c8a64202094667fcefe38ba9e65f6f4.jpg",
    title : "I Still Belive (2020)",
    category : "category",
    duration : "1 h",
    production : "18 Maret 2020",
    producer : "ajdbwiejfwkaj",
    desc : "dvjah kagsjdb ksdhba akshdja "
  },
  {
    banner : "https://i.pinimg.com/originals/0c/8a/64/0c8a64202094667fcefe38ba9e65f6f4.jpg",
    title : "I Still Belive (2020)",
    category : "category",
    duration : "1 h",
    production : "18 Maret 2020",
    producer : "ajdbwiejfwkaj",
    desc : "dvjah kagsjdb ksdhba akshdja "
  }
]

class HomeComp extends Component {
  render(){
    return (
      <div className="lp">
      <Layout className="layout">
          <Carousel autoplay>
            <div>
              <img src="https://i.pinimg.com/originals/0c/8a/64/0c8a64202094667fcefe38ba9e65f6f4.jpg"></img>
            </div>
            <div>
              <img src="https://www.liveabout.com/thmb/dHRNhNL1lyxK3PhqIr83OmKLwKo=/1080x720/filters:no_upscale():max_bytes(150000):strip_icc()/civil-war-5683c5723df78ccc15cc31c8.jpg" ></img>
            </div>
          </Carousel>

          <Content className="content2"> 
          <p className="titlee" ><b>Movie</b></p>
          {cardData.map(data=>
            <Row className="item">
              <Col span={10}>
                <img src={data.banner} width="400dp"></img>  
              </Col>
              <Col span={14}>
                <p ><b>{data.title}</b></p>
                <p> category : {data.category} </p>
                <p> duration : {data.duration} </p>
                <p> production : {data.production} </p>
                <p> producer : {data.producer} </p>
                <p> Story : {data.desc} </p>
              </Col>
            </Row>
          )}
          </Content>
      </Layout>
    </div> 
      
    );
  }
}

export default HomeComp;

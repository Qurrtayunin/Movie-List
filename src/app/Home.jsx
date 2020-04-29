import React, {Component} from 'react'; 
import HomeComp from '../modules/Home-Comp';

class Home extends Component {
    state ={
        visible: false,
    }

    componentDidMount(){

    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    render(){
        return (
            <HomeComp
                initialData = {this.state} 
                showModal = {this.showModal}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk}
            />
        );
    }
}

export default Home;
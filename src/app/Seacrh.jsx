import React, {Component} from 'react'; 
import SearchComp from '../modules/Search-Comp';

class Search extends Component {
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
            <SearchComp/>
        );
    }
}

export default Search;
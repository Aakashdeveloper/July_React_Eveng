import React, {Component} from 'react';
import {connect} from 'react-redux';
import LatestNews from '../component/home/LatestNews'

class Home extends Component{
    render(){
        return(
            <div>
                <LatestNews/>
            </div>
        )
    }
}

export default connect()(Home);
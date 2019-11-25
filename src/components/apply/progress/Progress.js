import React, { Component } from 'react';
import Header from '../../headerfooter/Header';
import Footer from '../../headerfooter/Footer';
import ProgressComponent from './ProgressComponent';
import Menus from '../Menus';
import {Link} from "react-router-dom";
import {Icon} from "antd";
//import "./blockchain.css";

class Progress extends Component {
  render() {
    return (

      <body className="problem_body">
        <div>
            <Header />
        </div>
        <div className={"proContent"}>
                <span className={"bread"}>
                    <Link to="/Home"> 首页 </Link><Icon type="right" />
                    <Link to="/Problem">理赔中心</Link><Icon type="right" />理赔进度
                </span>
            <div className={"proText"}>
                <div className={"menus"}>
                    <Menus/>
                </div>

                <div className={"progressImg"}>
                    <ProgressComponent />
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>

      </body>
    );
  }
}

export default Progress;
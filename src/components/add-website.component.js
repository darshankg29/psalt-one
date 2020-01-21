import React, { Component } from "react";

export default class AddWebsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: "",
      url: "",
      userName: "",
      pwd: "",
      createdDate: new Date()
    };

    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeWebsite(e) {
    this.setState({
      nickName: e.target.value,
      url: e.target.value,
      userName: e.target.value,
      pwd: e.target.value,
      createdDate: new Date()
    });
  }
componentDidMount(){
    this.setState({
        nickName:'test user',
        url:'test url',
        userName:'test userName',
        pwd:'test pwd',
        createdDate:new Date()

    })
}

  onSubmit(e) {
    e.preventDefault();

    const website = {
      nickName: this.state.nickName,
      url: this.state.url,
      userName: this.state.userName,
      pwd: this.state.pwd,
      createdDate: this.state.createdDate
    };
    console.log(website);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <p>inside AddWebsite</p>
      </div>
    );
  }
}

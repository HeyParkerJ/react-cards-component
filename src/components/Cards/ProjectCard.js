import React, { Component } from 'react';

import styles from './ProjectCard.styl';

export default class ProjectCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    }

    this.selectTab = this.selectTab.bind(this);
    this._renderNavbar = this._renderNavbar.bind(this);
    this._renderCardContent = this._renderCardContent.bind(this);
    this._renderNavbarButton = this._renderNavbarButton.bind(this);
  }

  static get defaultProps() {
    return {
      selected: 'background'
    }
  }

  selectTab(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  _renderNavbarButton(index, name) {
      let defaultClass = styles.card_button
      let activeClass = (this.state.selected === index ? defaultClass+' '+styles.card_button_active : defaultClass)

      return (
        <button className={ activeClass }
        onClick={() => { this.selectTab(index, event) } }>{ name }</button>
      )
    }

  _renderNavbar(project) {
    return (
      <div className={ styles.navbar }>

        { this._renderNavbarButton('background', "Background") }
        { this._renderNavbarButton('tech_stack', "Stack") }
        { this._renderNavbarButton('role', "Role") }

        <a href={ project.github_url }>
          <img src="http://image.flaticon.com/icons/svg/23/23957.svg" alt="Github" className={ styles.icon } />
        </a>
      </div>
    )
  }

  _renderCardContent(project) {
    if (typeof project[this.state.selected] === 'object') {
      let result = project[this.state.selected].map(function(item) {
        return (
          <div>
            { item }
          </div>
        );
      })
      return (
        <div className={ styles.card_content+' '+styles.card_content_active} >
          { result }
        </div>
      )
    }
    else {
      return (
        <div className={ styles.card_content+' '+styles.card_content_active} >
          { project[this.state.selected] }
        </div>
      )
    }
  }

  _renderHeader(project) {
    return (
      <div className={ styles.card_background }>
        <a href={ project.project_url }>
          <h2 className={ styles.card_title }>{ project.title }</h2>
        </a>
      </div>
    )
  }

  render() {
    let data = this.props.data;
    return (
      <div key={ data.id } className={ styles.card }>
        { this._renderHeader(data) }
        { this._renderNavbar(data) }
        { this._renderCardContent(data) }
      </div>
    )
  }
}

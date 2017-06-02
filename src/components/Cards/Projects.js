import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import styles from './Projects.styl';

import data from './ProjectsData';

export default class Projects extends Component {

  render() {
    let projects = data.map(function(project) {
      return (
        <ProjectCard key={ project.id } data={ project } />
      );
    }, this);

    return (
      <div className={ styles.secondaryContainer } >
        <h2 className={ styles.sectionTitle } >Projects</h2>
        <div className={ styles.projectsContainer } >
        { projects }
        </div>
      </div>
    )
  }
}

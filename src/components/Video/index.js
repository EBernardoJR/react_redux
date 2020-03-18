import React from 'react';
import { connect } from 'react-redux'
// import { Container } from './styles';

const Video = ({ activeLesson, activeModule}) => {
    return (
        <div>
            <strong>Módulo: {activeModule.title}</strong>
    <span>Aula: {activeLesson.title}</span>
        </div>
    );
  }

export default connect(state => ({
  //vai pegar so qual a  aula selecionada no store
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video)

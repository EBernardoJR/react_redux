import React from 'react'
//importando os modulos do store
import { connect } from 'react-redux'
import * as CourseActions from '../../store/actions/course'
//vai importar tudo e  renomear como course...



//action
/*
function toggleLesson(lesson, module){
    return {
        type: 'ACTIVE_LESSON', //chave unica
        //quais valores vão para o store
        module,
        lesson
    }
}
*/

//o dispatch dispara actions pro redux

const SideBar = ({ modules, toggleLesson }) =>{


    return(
        <aside>
            { modules.map(module => (
                <div key={module.id}>
                <h2>{module.title}</h2>
                <ul>
                    {
                        module.lessons.map( lesson => (
                            <li key={lesson.id}>{lesson.title}
                            <button onClick={()=> /*dispatch(CourseActions.toggleLesson(lesson, module))*/
                            toggleLesson(module, lesson)
                            } >Selecionar</button>
                            </li>
                        ))
                    }
                </ul>
                </div>
            ))}
        </aside>
    ) 
}

const mapDispatch = dispatch => ({
    //substitui o dispatch dentro do app
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(lesson, module))
})

export default connect(state => ({ modules: state.course.modules }), mapDispatch)(SideBar);
//o primeiro parametro é uma função, na qual vai informar qual dados quer do estado
//a propriedade modules vai receber o estado inteiro (em forma de array)
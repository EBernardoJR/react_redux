export function toggleLesson(lesson, module){
    return {
        type: 'ACTIVE_LESSON', //chave unica
        //quais valores vão para o store
        module,
        lesson
    }
}
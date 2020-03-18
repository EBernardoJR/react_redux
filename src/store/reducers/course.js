const initialState = {
    activeLesson: {},
    activeModule: {},   
    modules: [ 
        { id: 1, 
        title: "Primeiro Modulo", 
        lessons: [
        { id: 1, title: "Primeira Aula"},
        { id: 2, title: "Segunda Aula" }
    ]},
    {
        id: 2,
        title: "Segundo Modulo",
        lessons: [
            { id: 1, title: "Terceira Aula"},
            { id: 2, title: "Quarta Aula"}
        ]
    }
    ]
}
//reducer estado inicial e manipular os estados atraves das actions
//estado anterior à alteração feita pela action
export default function course(state = initialState, action){

    if( action.type === 'ACTIVE_LESSON'){
        //vai sobrepor o estado anterior atualizando os novos dados
        return { ...state, activeLesson: action.lesson, activeModule: action.module }
    }

    return state
}
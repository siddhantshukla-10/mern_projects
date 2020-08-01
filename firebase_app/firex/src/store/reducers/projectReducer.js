const initState = {
  projects: [
    {id: '1',title: 'Study for placements', content: 'Ex commodo sunt laboris ad nisi cupidatat.'},
    {id: '2',title: 'Study for exams', content: 'Ex commodo sunt laboris ad nisi cupidatat.' },
    {id: '3',title: 'Study for JPMC hack', content: 'Ex commodo sunt laboris ad nisi cupidatat.' }
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type){
    case "CREATE_PROJECT":
      console.log('created project');
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log('create project error');
      return state; 
    default:
      return state;
  }
}

export default projectReducer;
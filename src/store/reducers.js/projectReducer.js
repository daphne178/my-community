const initialState = {
  projects: [
    {id: '1', title: 'pet your cat', content: 'treat your kitty like a queen'},
    {id: '2', title: 'walk your dog', content: 'let your doggo feel the grass'},
    {id: '3', title: 'feed your bird', content: 'give your birdy the best nuts'}
  ]
}

const projectReducer = (state = initialState, action) => {
  return state
}

export default projectReducer

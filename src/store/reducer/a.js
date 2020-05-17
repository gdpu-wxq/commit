const initState={
    inputValue:'kkkkkk000000',
    list:[]
};
// reducer可以接收state，但是绝不能修改state，返回的是新的state
export default (state = initState, action)=>{    
    switch (action.type) {
        case 'SET_INPUT':
            return Object.assign({}, initState, { inputValue: action.payload });
        default:
            return state;
    }
}
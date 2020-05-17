const initState={
    kk:'11111111',
    list:[]
};
// reducer可以接收state，但是绝不能修改state，返回的是新的state
export default (state = initState, action)=>{    
    return state;
}
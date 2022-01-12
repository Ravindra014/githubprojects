import axios from 'axios';

export function checkLogin(u){
    return (dispatch)=>{
        alert("in check login");
        dispatch({type:"LOADING_TRUE"});

        axios.post
        ('http://localhost:3000/login-users',u).then((res)=>{
            dispatch({type:"LOADING_FALSE"})
            alert(JSON.stringify(res.data));
            if(res.data.status=="ok")
            {
                dispatch({type:"LOGIN_USER", payload:res.data.data[0]})
                
            }
            else{
                alert("credential are not correct");
            }
        })


    }
}

export default{
    users:[
        {username:"AshenPheonix",id:0,authType:"admin"},
        {username:"Dustin",id:1,authType:"admin"},
        {username:"Brandon Porter", id:2,authType:'helper'},
        {username:"Carlos Hernandez", id:3,authType:'helper'},
        {username:'OmarS',id:4,authType:'user'},
        {username:'Jonathan Erlich', id:5,authType:'user'}
    ],
    tickets:[
        {id:0, type:'login', description: "Can't Login", owner:0, assigned:null},
        {id:1, type:'grade', description:'Grade for Project x not shown', owner:4,assigned:2},
        {id:2, type:'react', description:'create-react-app won\'t work', owner:5, assigned:0}
    ]
}
import {ERROR, GET_CARDS, GET_CARD, EDIT_CARD, FETCHING, DELETE_CARD, FLIP_TICKET, ASSIGN, LIST_MODS, ALTER_PRIVLIDGE, CHANGE_SORT, LOGOUT, FULL_LOAD } from '../actions'
import data from '../dummyData'

const init={
    tickets:[],
    users:[],
    viewed:null,
    editing:null,
    sort:'standard',

    fetching:false,
    error:null,
    username:'',
    authType:null
}

export default (state=init,action)=>{
    switch(action.type){
        //logins
        case ERROR:
            console.log(action.payload);
            return {
                ...state,
                login:false,
                error:action.payload,
                fetching:false
            }
        //card
        case GET_CARDS:
            return {
                ...state,
                fetching:false,
                tickets:action.payload,
                editing:null,
                error:null
            }
        case GET_CARD:
            return {
                ...state,
                viewed:state.tickets.filter(ticket=>ticket.id===Number(action.payload))[0],
                editing:null
            }
        case EDIT_CARD:
            return{
                ...state,
                fetching:false,
                editing:action.payload
            }
        case FETCHING:
            return {
                ...state,
                fetching:true
            }
        case DELETE_CARD:
            return {
                ...state,
                tickets:state.tickets.filter(i=>i.id!==action.payload)
            }
        case FLIP_TICKET:
            return {
                ...state,
                tickets:state.tickets.map(ticket=>ticket.id===action.payload.id?action.payload:ticket),
                fetching:false
            }
        case ASSIGN:
            return{
                ...state,
                tickets:state.tickets.map(ticket=>ticket.id===action.payload.id?action.payload:ticket),
                fetching:false
            }
        //admin
        case LIST_MODS:
            let current=action.payload.filter(user=>Number(localStorage.getItem('userId'))===user.id)[0]
            return{
                ...state,
                users:action.payload,
                username:current.username,
                authType:current.authType,
                id:current.id
            }
        case ALTER_PRIVLIDGE:
            return{
                ...state,
                users:state.users.map(user=>user.id===action.payload.id?{...user,authType:action.payload.authType}:user),
                fetching:false
            }
        case CHANGE_SORT:
            return{
                ...state,
                sort:action.payload
            }
        case LOGOUT:
            return{
                ...state,
                userID:'',
                username:'',
                authType:undefined,
                tickets:[],
                users:[]
            }
        case FULL_LOAD:
            let currentAgain=action.users.filter(user=>Number(localStorage.getItem('userId'))===user.id)[0]
            return {
                ...state,
                fetching:false,
                tickets:action.tickets,
                users:action.users,
                username:currentAgain.username,
                authType:currentAgain.authType,
                id:currentAgain.id
            }
        default:
            return state
    }
}
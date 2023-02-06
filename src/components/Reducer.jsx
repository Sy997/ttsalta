// import React, {useState, useReducer, useRef} from 'react'

// // useReducer
// //initState = 0
// // actions:
// //Reducer
// //Dispatch

// //initState
// //const initState = 0

// //Actions
// //const UP_ACTION = 'up'
// //const DOWN_ACTION = 'down'

// //Reducer
// // const reducer = (state, action) => {
// //     switch(action) {
// //         case UP_ACTION:
// //             return state = state + 1
// //         break;

// //         case DOWN_ACTION:
// //             return state = state - 1
// //         break;

// //         default:
// //             break;
// //     }
// // }
// // initState
// const initState = {
//     job: '',
//     jobs: []
// }

// //2.Actions

// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'

// const setJob = payload => {
//     return {
//         type: SET_JOB,
//         payload
//     }
// }

// const addJob = payload => {
//     return {
//         type: ADD_JOB,
//         payload
//     }
// }

// const deleteJob = payload => {
//     return {
//         type: DELETE_JOB,
//         payload
//     }
// }

// const reducer = (state = [], action) => {

//     console.log("Action", action)
//     console.log("Prev State", state)

//     let newState

//     switch(action.type) {
//         case SET_JOB:
//             newState = {
//                 ...state,
//                 job: action.payload
//             }
//             break;
//         case ADD_JOB:
//             newState = {
//                 ...state,
//                 job: '',
//                 jobs: [...state.jobs, action.payload]
//             }
//             break;
//         case DELETE_JOB:
//             const newJob = [...state.jobs]

//             newJob.splice(action.payload, 1)

//             newState = {
//                 ...state,
//                 job: newJob
//             }
//             break;
//         default:
//             throw new Error('Invalid action.')
//     }

//     console.log("New state", newState)

//     return newState
// }

// const Reducer = () => {

//     const [state, dispatch] = useReducer(reducer, initState)
//     //const [count, dispatch] = useReducer(reducer, initState)

//     const { job, jobs } = state
//     const inputRef = useRef()
//     const handleSubmit = () => {
//         dispatch(addJob(job))
//         dispatch(setJob(''))
//         inputRef.current.focus()
//     }
//     console.log(state)

//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column'}}>
//             {/* <label>Email</label>
//             <input type="text" name="email" placeholder='nhập vào đây...' />
//             <br />
//             <label>Password</label>
//             <input type="password" name="password" placeholder='Nhập vào đây...' /> *
//             {/* <h2>{count}</h2>
//             <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
//             <button onClick={() => dispatch(UP_ACTION)}>up</button> */}
//             <h3>Todo</h3>
//             <input 
//                 ref={inputRef}
//                 onChange={e => {
//                 dispatch(setJob(e.target.value))
//                 }} 
//                 value={job} placeholder='nhập vào nào...' 
//             />
//             <div>
//                 <button onClick={handleSubmit}>Add</button>
//                 <button>Delete</button>
//             </div>
//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>{job} <span style={{cursor: 'pointer'}} onClick={() => dispatch(deleteJob(index))}> &times; </span></li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// //cac hang

// const add_note = "add note"
// const set_note = "set note"
// const delete_note = "delete note"

// //action 

// const addNote = (payload) => {
//     return {
//         type: add_note,
//         payload
//     }
// }

// const setNote = (payload) => {
//     return {
//         type: set_note,
//         payload
//     }
// }

// const deleteNote = (payload) => {
//     return {
//         type: delete_note,
//         payload
//     }
// }

// const reducers = (state = [], actions) => {
//     switch(actions.type) {
//         case set_note:
//             const geneID = new Date().getDate()
//             state = [...state, { id: geneID, payload: actions.payload }]
//             return state
//         case add_note:
//             state = [...state, {}]
        
//         default:
//             break;
//     }
// }

// export default Reducer
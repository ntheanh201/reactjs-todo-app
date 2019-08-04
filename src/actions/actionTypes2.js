// import { createAction } from 'redux-actions';
// import axios from 'axios';

// const serverUrl = 'http://localhost:8123'

// // export const getAllTodos = createAction('GET_ALL_TODOS', () => {
// //     return axios.get(`${serverUrl}/todos`)
// //         .then(res => res.data)
// //         .then(data => {
// //             console.log(data)
// //             return { todos: data }
// //         })
// //         .catch(console.log)
// // })

// export const getAllTodos = createAction('GET_ALL_TODOS', () => console.log('sodnfo'))

// export const addTodo = createAction('ADD_TODO', (name, id) => {
//     return axios.post(`${serverUrl}/todos`, { name, id })
//         .then(res => {
//             console.log(res.config.data)
//         })
//         .catch(console.log)
// })

// // export const toggleAllTodo = createAction('TOGGLE_ALL_TODO', () => {
// //     axios.put(`${serverUrl}/todos/toggleAll`)
// //         .then(res => {
// //             console.log(res.config.data)
// //         })
// //         .catch(console.log)
// //     return {}
// // })

// // export const updateTodo = createAction('UPDATE_TODO', (todo) => {
// //     axios.put(`${serverUrl}/todos`, { todo })
// //         .then(res => {
// //             console.log(res.config.data)
// //         })
// //         .catch(console.log)
// //     return { todo }
// // })

// // export const setFilter = createAction('SET_FILTER', (filter) => {
// //     return { filter }
// // })

// // export const clearCompletedTodo = createAction('CLEAR_COMPLETED_TODO', () => {
// //     axios.delete(`${serverUrl}/todos/completed`)
// //         .then(res => {
// //             console.log(res.data)
// //         })
// //         .catch(console.log)
// //     return {}
// // })
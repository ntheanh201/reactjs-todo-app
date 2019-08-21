import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import InputBar from '../TodoList/components/InputBar';

export const ADD_TODO = gql`
    mutation ($input: TodoInput) {
        addTodo (input: $input){
            id
            isDone
            name
        }
    }
`

const UPDATE_TODO = gql`
mutation ($input: TodoInput) {
    updateTodo (input: $input){
        id
        isDone
        name
    }
}
`

// const DELETE_TODO = gql`
//     mutation($id: String!) {
//         deleteTodo (id: $id){
//             todos {
//                 id
//                 isDone
//                 name
//             }
//         }
//     }
// `

const TOGGLE_ALL_TODOS = gql`
    mutation($toggleStatus: Boolean!) {
        toggleAllTodos (toggleStatus: $toggleStatus){
            id
            isDone
            name
        }
    }
`

const CLEAR_COMPLETED_TODOS = gql`
    mutation($completed: String!) {
        clearCompletedTodos (completed: $completed){
            id
            isDone
            name
        }
    }
`

export const AddTodo = ({ refetch, toggleAllTodos }) => (
    <Mutation mutation={ADD_TODO}>
        {addTodo => (
            <InputBar refetch={refetch} addTodo={addTodo} toggleAllTodos={toggleAllTodos} />
        )}
    </Mutation>
)

export const UpdateTodo = ({ children }) => (
    <Mutation mutation={UPDATE_TODO}>
        {children}
    </Mutation>
)

// export const DeleteTodo = () => (
//     <Mutation mutation={DELETE_TODO}>
//         {(addTodo, { data }) => (
//             <InputBar />
//         )}
//     </Mutation>
// )

export const ToggleAllTodos = ({ children }) => (
    <Mutation mutation={TOGGLE_ALL_TODOS}>
        {toggleAllTodos => {
            return (children(toggleAllTodos))
        }}
    </Mutation>
)

export const ClearCompletedTodos = ({ children }) => (
    <Mutation mutation={CLEAR_COMPLETED_TODOS}>
        {children}
    </Mutation>
)

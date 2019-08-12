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
    addTodo (input: $input){
        id
        isDone
        name
    }
}
`

const DELETE_TODO = gql`
    mutation($id: String!) {
        deleteTodo (id: $id){
            todos {
                id
                isDone
                name
            }
        }
    }
`

const TOGGLE_ALL_TODOS = gql`
    mutation($toggleStatus: Boolean!) {
        updateTodo (toggleStatus: $toggleStatus){
            todos {
                id
                isDone
                name
            }
        }
    }
`

export const AddTodo = ({ refetch }) => (
    <Mutation mutation={ADD_TODO}>
        {addTodo => (
            <InputBar refetch={refetch} addTodo={addTodo} />
        )}
    </Mutation>
)

export const UpdateTodo = ({ id, isDone, name }) => (
    <Mutation mutation={UPDATE_TODO}>
        {(addTodo, { data }) => {
            return addTodo({ id, isDone, name })
        }

        }
    </Mutation>
)

export const DeleteTodo = () => (
    <Mutation mutation={DELETE_TODO}>
        {(addTodo, { data }) => (
            <InputBar />
        )}
    </Mutation>
)

// export const ToggleAllTodos = () => (
//     <Mutation mutation={TOGGLE_ALL_TODOS}>
//         {(addTodo, { data }) => (
//             <InputBar handleSubmit ="" />
//         )}
//     </Mutation>
// )

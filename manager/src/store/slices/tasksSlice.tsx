import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../Screens/Tasks/Tasks'
import { v4 as uuid } from "uuid";

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: uuid(),
      title: "Daily Status Too",
      description:
        "Finest fish and veggies  german specialty! American, raw, meaty. Healthy...and green...Finest fish and veggies  german specialty!Finest fish and veggies  german specialty!",
      date: new Date("2019-01-16"),
    },
    {
      id: uuid(),
      title: "call",
      description: "A german specialty!",
      date: new Date("2019-01-16"),
    },
    {
      id: uuid(),
      title: "BB",
      description: "American, raw, meaty",
      date: new Date("2019-01-16"),
    },
    {
      id: uuid(),
      title: "Green Bowl",
      description: "Healthy...and green...",
      date: new Date("2019-01-16"),
    },
  ]
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    deleteTask: ( state, {payload}: PayloadAction<string>) => {    
            state.tasks = state.tasks.filter((task) => payload !== task.id);    
    },

    addTask: ( state, {payload}: PayloadAction<Task>) =>{
      state.tasks  =  [
            ...state.tasks,
            {
              id: uuid(),
              title:  payload.title,
              description: payload.description,
              date: payload.date,
            },
          ]
    },

    editTask: (state,{payload}: PayloadAction<Task>) => {
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { deleteTask, addTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer
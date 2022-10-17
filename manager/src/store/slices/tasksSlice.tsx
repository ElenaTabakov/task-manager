import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import { Task } from '../../Screens/Tasks/Tasks';
import axiosApi from '../axios';
import { v4 as uuid } from "uuid";

export interface TasksProps {
  tasks: Task[];
}
interface Task {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  dueDate: Date | null;
  duration: number | null;
  status: string;
}

export const fetchTasksByUserId = createAsyncThunk('tasks/fetch', async() => {
  try {
    const response = await axiosApi.get("tasks");
    return response.data.tasks;
  } catch (err: any | undefined) {
    return err.masssage;
  }
});
export const createTasks = createAsyncThunk(
  "tasks/createTasks",
  async (
    { title, description, shortDescription, dueDate, duration, status }: Task,
    thunkAPI
  ) => {
    try {
      const response = await axiosApi.post("tasks", {
        title,
        description,
        shortDescription,
        dueDate,
        duration,
        status,
      });
      thunkAPI.dispatch(fetchTasksByUserId());
      return response.data.tasks;
      //   console.log(response);
    } catch (err: any | undefined) {
      return err.masssage;
    }
  }
);
export const updateTasks = createAsyncThunk(
  "tasks/updateTasks",
  async (
    {
      id,
      title,
      description,
      shortDescription,
      dueDate,
      duration,
      status,
    }: Task,
    thunkAPI
  ) => {
    try {
      const response = await axiosApi.put(`tasks/${id}`, {
        title,
        description,
        shortDescription,
        dueDate,
        duration,
        status,
      });
      thunkAPI.dispatch(fetchTasksByUserId());
      return response.data.tasks;
      //   console.log(response);
    } catch (err: any | undefined) {
      return err.masssage;
    }
  }
);

export const deleteTasks = createAsyncThunk(
  "tasks/deleteTasks",
  async (id: string, thunkAPI) => {
    try {
      const response = await axiosApi.delete(`tasks/${id}`);
      thunkAPI.dispatch(fetchTasksByUserId());
      return response.data.tasks;
      //   console.log(response);
    } catch (err: any | undefined) {
      return err.masssage;
    }
  }
);
interface tasksState {
  tasks: [];
  statusFetch: "loading" | "succeeded" | "failed" | "idle";
  statusUpdate: "loading" | "succeeded" | "failed" | "idle";
  statusDelete: "loading" | "succeeded" | "failed" | "idle";
  statusCreate: "loading" | "succeeded" | "failed" | "idle";
}

const initialState: tasksState = {
  tasks: [],
  statusFetch: "idle",
  statusDelete: "idle",
  statusUpdate: "idle",
  statusCreate: "idle",
};

// const initialState: TasksProps = {
//   tasks: [
//     {
//       id: uuid(),
//       title: "Daily Status Too",
//       description:
//         "Finest fish and veggies  german specialty! American, raw, meaty. Healthy...and green...Finest fish and veggies  german specialty!Finest fish and veggies  german specialty!",
//       date: new Date("2019-01-16"),
//       userId: '1',
//     },
//     {
//       id: uuid(),
//       title: "call",
//       description: "A german specialty!",
//       date: new Date("2019-01-16"),
//       userId: '1',
//     },
//     {
//       id: uuid(),
//       title: "BB",
//       description: "American, raw, meaty",
//       date: new Date("2019-01-16"),
//       userId: '2',
//     },
//     {
//       id: uuid(),
//       title: "Green Bowl",
//       description: "Healthy...and green...",
//       date: new Date("2019-01-16"),
//       userId: '2',
//     },
//   ]
// }

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    // deleteTask: ( state, {payload}: PayloadAction<string>) => {    
    //         state.tasks = state.tasks.filter((task) => payload !== task.id);    
    // },

    // addTask: ( state, {payload}: PayloadAction<Omit<Task,'id'>>) =>{
     
    //   state.tasks  =  [
    //         ...state.tasks,
    //         {
    //           id: uuid(),
    //           title:  payload.title,
    //           description: payload.description,
    //           date: payload.date,
    //           userId: payload.userId,
    //         },
    //       ]

         
    // },

    // editTask: (state, {payload}: PayloadAction<Task>) => {  
     
    //   state.tasks = state.tasks.map((localtask) => {
    //     console.log(payload.id , localtask.id); 
    //     if (localtask.id === payload.id) {         
    //       return {
    //         ...localtask,
    //         title: payload.title,
    //         description: payload.description,
    //         date: payload.date,
    //         userId: payload.userId,
    //       };
    //     }

    //     return localtask;
    //   });

    
    // //  state.tasks = newTasksList
    // },
  },
  extraReducers(builder){
    builder
    .addCase(fetchTasksByUserId.pending, (state, action) => {
      state.statusFetch = "loading";
    })
    .addCase(fetchTasksByUserId.fulfilled, (state, action) => {
      state.statusFetch = "succeeded";
      state.tasks = action.payload;
    })
    .addCase(fetchTasksByUserId.rejected, (state, action) => {
      state.statusFetch = "failed";
    })
    .addCase(deleteTasks.pending, (state, action) => {
      state.statusDelete = "loading";
    })
    .addCase(deleteTasks.fulfilled, (state, action) => {
      state.statusDelete = "succeeded";
    })
    .addCase(deleteTasks.rejected, (state, action) => {
      state.statusDelete = "failed";
    })
    .addCase(updateTasks.pending, (state, action) => {
      state.statusUpdate = "loading";
    })
    .addCase(updateTasks.fulfilled, (state, action) => {
      state.statusUpdate = "succeeded";
    })
    .addCase(updateTasks.rejected, (state, action) => {
      state.statusUpdate = "failed";
    })
    .addCase(createTasks.pending, (state, action) => {
      state.statusCreate = "loading";
    })
    .addCase(createTasks.fulfilled, (state, action) => {
      state.statusCreate = "succeeded";
    })
    .addCase(createTasks.rejected, (state, action) => {
      state.statusCreate = "failed";
      console.log(action);
    });
  }
})

// Action creators are generated for each case reducer function
// export const { deleteTask, addTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer
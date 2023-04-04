import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../axios';
import { formatDate } from "../../store/utils";

export interface TasksProps {
  tasks: Task[];
}
interface Task {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  dueDate: Date | string;
  duration: number | null;
  status: string;
  date: Date;
  // fullDate:Date 
}

export const fetchTasksByUserId = createAsyncThunk('tasks/fetch', async() => {
  try {
    const response = await axiosApi.get("tasks");
    return response.data.tasks;
  } catch (err: any | undefined) {
    return err.masssage;
  }
});
export const fetchTasksDates = createAsyncThunk('tasks/dates', async() => {
  try {
    const response = await axiosApi.get("tasks/dates");
    return response.data.dates;
  } catch (err: any | undefined) {
    return err.masssage;
  }
});
export const fetchTasksByDate = createAsyncThunk('tasks/by-day', async(date: Date, thunkAPI) => {
  try {
    const converDate = formatDate(date);
    const timeZone = new Date(date).getTimezoneOffset();  
    const response = await axiosApi.get(`tasks/tasks-by-day?date=${converDate}&TZOffset=${timeZone}`);
    return response.data.tasks;
  } catch (err: any | undefined) {
    return err.masssage;
  }
});
export const createTasks = createAsyncThunk(
  "tasks/createTasks",
  async (
    { title, description, shortDescription, dueDate, duration, status, date }: Task,
    thunkAPI
  ) => {
    try {
      console.log(dueDate, 'before send');
      const response = await axiosApi.post("tasks", {
        title,
        description,
        shortDescription,
        dueDate,
        duration,
        status,
      });
      thunkAPI.dispatch(fetchTasksByDate(date));
      thunkAPI.dispatch(fetchTasksDates());
      return response.data.tasks;
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
      date
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
      thunkAPI.dispatch(fetchTasksByDate(date));
      return response.data.tasks;
    } catch (err: any | undefined) {
      return err.masssage;
    }
  }
);

export const deleteTasks = createAsyncThunk(
  "tasks/deleteTasks",
  async ({id , date} :{id: string, date: Date}, thunkAPI) => {
    try {
      const response = await axiosApi.delete(`tasks/${id}`);
      thunkAPI.dispatch(fetchTasksByDate(date));
      thunkAPI.dispatch(fetchTasksDates());
      return response.data.tasks;
    } catch (err: any | undefined) {
      return err.masssage;
    }
  }
);
interface tasksState {
  tasks: [];
  dates: string[];
  statusFetch: "loading" | "succeeded" | "failed" | "idle";
  statusFetchDates: "loading" | "succeeded" | "failed" | "idle";
  statusFetchByDate: "loading" | "succeeded" | "failed" | "idle";
  statusUpdate: "loading" | "succeeded" | "failed" | "idle";
  statusDelete: "loading" | "succeeded" | "failed" | "idle";
  statusCreate: "loading" | "succeeded" | "failed" | "idle";
}

const initialState: tasksState = {
  tasks: [],
  dates: [],
  statusFetch: "idle",
  statusFetchDates: 'idle',
  statusFetchByDate: 'idle',
  statusDelete: "idle",
  statusUpdate: "idle",
  statusCreate: "idle",
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
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
    })
    .addCase(fetchTasksDates.pending, (state, action) => {
      state.statusFetchDates = "loading";
    })
    .addCase(fetchTasksDates.fulfilled, (state, action) => {
      state.statusFetchDates = "succeeded";
      state.dates = action.payload;
      console.log(action.payload);
    })
    .addCase(fetchTasksDates.rejected, (state, action) => {
      state.statusFetchDates = "failed";
      console.log(action);
    })
    .addCase(fetchTasksByDate.pending, (state, action) => {
      state.statusFetchByDate = "loading";
    })
    .addCase(fetchTasksByDate.fulfilled, (state, action) => {
      state.statusFetchByDate = "succeeded";
      state.tasks = action.payload;
      console.log(action.payload);
    })
    .addCase(fetchTasksByDate.rejected, (state, action) => {
      state.statusFetchByDate = "failed";
      console.log(action);
    });
  }
})

// Action creators are generated for each case reducer function
// export const { deleteTask, addTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer
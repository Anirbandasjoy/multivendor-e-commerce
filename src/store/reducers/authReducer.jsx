import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk("auth/admin_login", async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await api.post("/admin-login", info, { withCredentials: true });
        localStorage.setItem("accessToken", data.token)
        return fulfillWithValue(data.message)
    } catch (error) {
        return rejectWithValue(error.response.data.error)

    }
})

const authReducer = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        error: "",
        successMessage: "",
        userInfo: ""
    },
    reducers: {
        messageClear: (state) => {
            state.error = "",
                state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(admin_login.pending, (state) => {
            state.isLoading = true;
            state.error = ""
        });
        builder.addCase(admin_login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(admin_login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.successMessage = action.payload
        });
    }
})

export const { messageClear } = authReducer.actions
export default authReducer.reducer
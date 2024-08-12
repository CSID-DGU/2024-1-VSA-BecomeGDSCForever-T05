import {QuestionSummaryState} from "@/interfaces/states/QuestionSummaryState.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {QuestionSummariesState} from "@/interfaces/states/QuestionSummariesState.ts";
import {instance} from "@/apis/base/axios.ts";

const initialState: QuestionSummariesState = {
    data: [],
    loading: false,
    error: null,
}

export const fetchQuestionSummaries = createAsyncThunk(
    "questionSummaries/fetchQuestionSummaries",
    async (date: Date, {rejectWithValue}) => {
        try {
            const response = await instance.get<QuestionSummaryState[]>('/api/question/summaries', {
                params: {
                    date: date.toISOString()
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const questionSummariesSlice = createSlice({
    name: "questionSummariesState",
    initialState,
    reducers: {
        updateQuestionSummariesState: (state, action: PayloadAction<QuestionSummaryState[]>) => {
            state.data.splice(0, state.data.length, ...action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestionSummaries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuestionSummaries.fulfilled, (state, action) => {
                state.data.splice(0, state.data.length, ...action.payload);
                state.loading = false;
            })
            .addCase(fetchQuestionSummaries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const {updateQuestionSummariesState} = questionSummariesSlice.actions;
export default questionSummariesSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";
import {LanguageState} from "@/interfaces/states/global/LanguageState.ts";

const initialState: LanguageState = {
    selectedLanguage: "c",
};

const selectedLanguageSlice = createSlice({
    name: "selectedLanguageState",
    initialState,
    reducers: {
        updateSelectedLanguage(state, action) {
            state.selectedLanguage = action.payload;
        }
    }
})

export const {updateSelectedLanguage} = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IActivateTilePayload {
    tileID: string
    tileCoords: number[]
}

const initialState =  {
    currentTileID: "",
    tileActivated: false,
    tileCoords: [0, 0]
};

type TUIActionsSlice = typeof initialState;

export const uiActionsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        activateTile: (state: TUIActionsSlice, action: PayloadAction<IActivateTilePayload> ) => {
            state.currentTileID = action.payload.tileID;
            state.tileActivated = true;
            state.tileCoords = action.payload.tileCoords;
        },
        deactivateTile: (state: TUIActionsSlice) => {
            state.tileActivated = false;
        }
    }
});

export const { activateTile, deactivateTile } = uiActionsSlice.actions;
export default uiActionsSlice.reducer;


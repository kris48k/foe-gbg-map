import { configureStore } from '@reduxjs/toolkit'
import volcanoReducer, { IMapData } from './volcano.slice';
import uiActionsSlice from './ui-actions.slice';
import { createSelector } from '@reduxjs/toolkit'

export const store =  configureStore({
  reducer: {
    volcano: volcanoReducer,
    uiActions: uiActionsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;

export const selectCurrentTileInfo = createSelector(
    (state:RootState) => state.volcano.value,
    (state:RootState) => state.uiActions.currentTileID,
    (volcanoData:IMapData, currentTileID:string) => {
        if (!currentTileID || !currentTileID.length)
        return null;

        const sector = currentTileID[0];
        const tile = currentTileID.substring(1);
        const sectorData = volcanoData[sector] &&  volcanoData[sector][tile];

        return sectorData;
    }
);
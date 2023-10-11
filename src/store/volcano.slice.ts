import { createSlice } from '@reduxjs/toolkit';


const SECTOR_TILES=["1", '2S', '2T', '3V', '3X', '3X', '3Z', '4A', '4B', '4C', '4D', '4E', '4F', '4G', '4H'];

enum ETileType {
    BASE='BASE',
    SWAP='SWAP',
    HOME='HOME'
}


export interface ITileData {
    name: string;
    camps: number;
    type: ETileType
}

export type TSectorData = {[key: string]: ITileData};

export interface IMapData {[key: string]: TSectorData};


const DATA:IMapData = {
    "A": SECTOR_TILES.reduce((acc: {[key: string]: ITileData}, next: string)=>{
        acc[next] = {name: "A"+next, camps: 1, type: ETileType.SWAP} as ITileData;
        return acc;
    }, {}),
    "B": {
        "1": {
            name: "B1", camps: 1, type: ETileType.SWAP
        }
    },
    "C": {
        "1": {
            name: "C1", camps: 1, type: ETileType.SWAP
        }
    },
    "D": {
        "1": {
            name: "D1", camps: 1, type: ETileType.SWAP
        }
    },
};


export const volcanoSlice = createSlice({
    name: 'counter',
    initialState: {
      value: DATA,
    },
    reducers: {
        changeTile(){

        }
    }
});

export const { changeTile } = volcanoSlice.actions;
export default volcanoSlice.reducer;
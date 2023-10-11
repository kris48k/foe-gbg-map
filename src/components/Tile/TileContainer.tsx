import ReactDOM from "react-dom";
import TileInfo from "./TileInfo";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState, selectCurrentTileInfo } from "../../store/store";
import { ITileData } from "../../store/volcano.slice";

const root = document.querySelector('body');

const TitleContainer = styled.div`
    position: fixed;
`;

export default function TileContainer() {
    const UIActions = useSelector((state: RootState) => state.uiActions);
    const sectorData =  useSelector(selectCurrentTileInfo) as ITileData;
    
    if (!UIActions.tileActivated || 
        !UIActions.currentTileID || 
        !UIActions.currentTileID.length || 
        !root) return (<></>);

    const style = {
        left: UIActions.tileCoords[0] || 0, 
        top: UIActions.tileCoords[1] || 0
    };

    
    return ReactDOM.createPortal(
        (<TitleContainer style={ style }>
            <TileInfo {...sectorData}/>
        </TitleContainer>), 
    root);



}
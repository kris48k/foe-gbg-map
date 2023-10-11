import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { ITileData } from "../../store/volcano.slice";

const TitleInfoContainer = styled.div`
    width: 100px;
    height: 100px;
    border: var(--tile-info--border) solid 1px;
    border-radius: 10%;
    box-shadow: 0px 0px 52px 0px rgba(34, 60, 80, 0.2);
    background: rgba(255, 255, 255, 0.8);
    position: relative;
    padding: 5px;
`;

const CloseButton = styled(MdClose)`
    position: absolute;
    inset: 5px 5px auto auto;
    cursor: pointer; 
`;

const TileHeader = styled.h5`
    margin: 4px 0;
`;

const OtherHeader = styled.label`
    margin: 2px 0;
`;


export default function TileInfo(props: ITileData) {
    return (
        <TitleInfoContainer>
            <CloseButton />
            <TileHeader>{`${props.name}`}</TileHeader>
            <div>
                <OtherHeader>Camps:</OtherHeader>
                <span>{`${props.camps}`}</span>
            </div>
                
            <OtherHeader>{`Type: ${props.type}`}</OtherHeader>
        </TitleInfoContainer>
    );
}
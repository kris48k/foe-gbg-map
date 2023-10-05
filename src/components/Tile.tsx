import styled from "styled-components";


enum ETileType {
    HOME="HOME",
    BASE="BASE",
    SWAP="SWAP"
}

interface ITileProps {
    className?: string,
    name: string,
    camps?: number,
    type?: ETileType,
    guildOwnerId?: number

}
const TileWrapper = styled.div`
    border: 1px solid black;
    position: absolute;
    overflow: hidden;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    } 
`;

export default function Tile(props: ITileProps){
    return (
        <TileWrapper className={props.className}>
            <div className="name">{props.name}</div>
            <div className="camps">{props.camps}</div>
        </TileWrapper>
    );
}
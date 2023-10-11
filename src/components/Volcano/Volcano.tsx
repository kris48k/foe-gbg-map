import { MouseEventHandler, SVGProps, useState } from "react";
import { ITileData, TSectorData } from "../../store/volcano.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TileContainer from "../Tile/TileContainer";
import { activateTile } from "../../store/ui-actions.slice";




interface ITileProps {
    pathProps: Partial<SVGProps<SVGPathElement>>,
    tileData?: ITileData,
}



function Tile1Ring({pathProps}: ITileProps){
    return (
        <path className="tile" d="M 0, 0 L 36 14 L 50 50 L 0 50 Z" stroke="#999999"  {...pathProps} fill="#EEEEEE"/>
    )
}

function Tile2Ring({pathProps, tileData}: ITileProps){
    return (
        <path className="tile" d="M 0 0 L 41 -10 L 80.5 -0.5 L 60 50 L 21 50 Z" transform-origin="100 100" stroke="#999999" {...pathProps}  fill="#EEEEEE"/>
    )
}

function Tile3Ring({pathProps, tileData}: ITileProps){
    return (
        <path className="tile" d="M 0 0 L 30 -5 L 61 0 L 50.5 50 L 9.5 50 Z" transform-origin="100 100" stroke="#999999"  {...pathProps} fill="#EEEEEE"/>
    )
}

function Tile4Ring({pathProps, tileData}: ITileProps){
    return (
        <path className="tile" d="M 0 0 L 20 -1 L 41 0 L 36 50 L 4 50 Z" transform-origin="100 100" stroke="#999999" {...pathProps} fill="#EEEEEE"/>
    )
}

type TSectorProps = {
    sectorData: TSectorData
    rotate: number;
    name: string
} & Partial<SVGProps<SVGGElement>>;

function Sector({rotate, sectorData, name, ...svgProps}: TSectorProps){
    return (
        <g id="sector" {...svgProps}>
            <Tile4Ring pathProps={{id:name+"41", fill:"#887755", transform:"translate(91 -47.5) rotate(5.5)" }} />
            <Tile4Ring pathProps={{id:name+"42", fill:"#349750", transform:"translate(108 -28) rotate(17)" }}/>
            <Tile4Ring pathProps={{id:name+"43", fill:"#337755", transform:"translate(122 -5) rotate(28)" }} />
            <Tile4Ring pathProps={{id:name+"44", fill:"#F47359", transform:"translate(128.5 20.5) rotate(39.5)" }} />
            <Tile4Ring pathProps={{id:name+"45", fill:"#3433E9", transform:"translate(134.5 46) rotate(49.5)" }} />
            <Tile4Ring pathProps={{id:name+"46", fill:"#F433E9", transform:"translate(133 72) rotate(61)" }} />
            <Tile4Ring pathProps={{id:name+"47", fill:"#54F3E9", transform:"translate(124 96.5) rotate(73.5)" }} />
            <Tile4Ring pathProps={{id:name+"47", fill:"#5FF349", transform:"translate(113 120) rotate(84.3)" }} />


            <Tile3Ring pathProps={{id:name+"3X", fill:"#123456", transform:"translate(78.5 12) rotate(11.5)"}} />
            <Tile3Ring pathProps={{id:name+"3Y", fill:"#12AA56", transform:"translate(89 44.5) rotate(33)"}}/>
            <Tile3Ring pathProps={{id:name+"3Z", fill:"#66AA56", transform:"translate(83.8 79) rotate(56)" }}/>
            <Tile3Ring pathProps={{id:name+"3O", fill:"#66AAFF", transform:"translate(65.5 108) rotate(79.1)"}} />
    
            <Tile2Ring pathProps={{id:name+"2T", fill:"brown", transform:"translate(18.5 105) rotate(68.4)" }} />
            <Tile2Ring pathProps={{id:name+"2S", fill:"purple", transform:"translate(53.5 76) rotate(22.5)"}}  />

            <Tile1Ring pathProps={{id:name+"1", transform:"translate(100 100)", fill:"pink"}} tileData={sectorData["1"]}/>
        </g>
    );
}

type ITitleNotation = ITileData & Partial<SVGProps<SVGGElement>>;
function TileNotation(props: ITitleNotation){
    return (
        <g className="tile-text-container" width="20" height="20" textAnchor="middle" {...props}>
            <text className="tile-text" y="10" >{props.name}</text>
            <text className="camps-text" y="25" >{props.camps}</text>
        </g>
    );
}

function SectorA(){
    const DATA = useSelector((state: RootState) => state.volcano.value);
    
    return (
        <>
            <Sector rotate={0} sectorData={DATA["A"]} id="A" name="A"/>
            <TileNotation {...DATA["A"]['1']} transform="translate(115 115)"/>
            <TileNotation {...DATA["A"]['2S']} transform="translate(125 64)"/>
            <TileNotation {...DATA["A"]['2T']} transform="translate(170 112)"/>
        </>
    );
}

function VolcanoMap(){
    const DATA = useSelector((state: RootState) => state.volcano.value);
    const dispatch = useDispatch();
    const onClick = (event:  React.MouseEvent<SVGGElement, MouseEvent>)=>{
        const tile = (event.target as Element).id;
        console.log("tile", tile, event);
        dispatch(activateTile({tileID: tile, tileCoords: [event.clientX, event.clientY]}));
    }

    return (
        <svg width="470px" height="470px" viewBox="-100 -60 400 420" version="1.1" id="volcano-svg" onClick={onClick}>
            <SectorA />
            <Sector rotate={90} sectorData={DATA["B"]} id="B" name="B" transform="translate(50 50) rotate(90)" transform-origin="100 100" />
            <Sector rotate={180} sectorData={DATA["C"]} id="B" name="B" transform="translate(0 100) rotate(180)" transform-origin="100 100" />
            <Sector rotate={270} sectorData={DATA["D"]} id="B" name="B" transform="translate(-50 50) rotate(270)" transform-origin="100 100" />
        </svg>
    );

}

export default function Volcano(){
    return (
        <div>
            <VolcanoMap />
            <TileContainer />
        </div>
    );

}


export default function Volcano(){
    return (
        <svg width="600px"
        height="600px"
        viewBox="-100 -100 500 500"
        version="1.1"
        id="svg1">

        
        <defs>
            <path id="ring-1" d="M 0, 0 L 35 15 L 50 50 L 0 50 Z "/>
            <path id="ring-2" d="M 0 0 L 41 -8 L 80.5 -0.5 L 61 50 L 21 50 Z "/>
            <path id="ring-3" d="M 0 0 L 30 -7 L 61 0 L 51 50 L 9 50 Z "/>
            <path id="ring-4" d="M 0 0 L 20 -5 L 40 0 L 35 50 L 5 50 Z "/>
            <g id="a-sector">
                <path id="A41" d="M 0 0 L 20 -5 L 40 0 L 35 50 L 5 50 Z "  fill="#887755" transform="translate(93 -48) rotate(4.8)" transform-origin="100 100" stroke="gray" />
                <path id="A42" d="M 0 0 L 20 -5 L 40 0 L 35 50 L 5 50 Z "  fill="#349750" transform="translate(105 -25) rotate(19)" transform-origin="100 100" stroke="gray" />
                <path id="A43" d="M 0 0 L 20 -5 L 40 0 L 35 50 L 5 50 Z "  fill="#337755" transform="translate(120 -5) rotate(28)" transform-origin="100 100" stroke="gray" />
                <path id="A44" d="M 0 0 L 20 -5 L 40 0 L 35 50 L 5 50 Z "  fill="#F47359" transform="translate(127 20) rotate(40)" transform-origin="100 100" stroke="gray" />

                <path id="A3X" d="M 0 0 L 30 -5 L 61 0 L 51 50 L 9 50 Z " fill="#123456" transform="translate(78.5 12.2) rotate(12)" transform-origin="100 100" stroke="gray" />
                <path id="A3Y" d="M 0 0 L 30 -5 L 61 0 L 51 50 L 9 50 Z " fill="#12AA56" transform="translate(89 44.5) rotate(33)" transform-origin="100 100" stroke="gray" />
                <path id="A3Z" d="M 0 0 L 30 -5 L 61 0 L 51 50 L 9 50 Z " fill="#66AA56" transform="translate(83.8 79) rotate(56)" transform-origin="100 100" stroke="gray" />
                <path id="A3O" d="M 0 0 L 30 -5 L 61 0 L 51 50 L 9 50 Z " fill="#66AAFF" transform="translate(65.5 108) rotate(79.1)" transform-origin="100 100" stroke="gray" />
        
                <path id="A2S" d="M 0 0 L 41 -8 L 80.5 -0.5 L 60 50 L 21 50 Z " fill="purple" transform="translate(52.5 76.5) rotate(23.2)" transform-origin="100 100" stroke="gray" />
                <path id="A2T" d="M 0 0 L 41 -8 L 80.5 -0.5 L 60 50 L 21 50 Z " fill="brown" transform=" translate(20 107) rotate(67.5)" transform-origin="100 100" stroke="gray" />
                
                <path id="A1" d="M 0, 0 L 35 15 L 50 50 L 0 50 Z" transform="translate(100 100)" fill="pink" stroke="gray" /> 
                
            </g>
        </defs> 
        <defs>
        
        </defs>

        <use href="#a-sector" id="A" />
        <use href="#a-sector" id="B" transform="translate(50 50) rotate(90)" transform-origin="100 100"/>
        <use href="#a-sector" id="C" transform="translate(0 100) rotate(180)" transform-origin="100 100"/>
        <use href="#a-sector" id="D" transform="translate(-50 50) rotate(270)" transform-origin="100 100"/>
        
        </svg>
    );

}
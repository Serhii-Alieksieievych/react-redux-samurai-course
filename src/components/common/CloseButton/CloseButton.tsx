import React from "react";
import { JsxFragment } from "typescript";
type PropsType = {
    size: string,
    color: string,
    onClick: ()=> void
}
const CloseButton: React.FC<PropsType> = ({size="40px", color='#fff', onClick}) => {
    return(
        <div onClick={onClick}>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width={size} height={size} viewBox="0 0 512 512">
                <g>
                    <polygon
                        fill={color}
                        points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256
                        154.188,335.188 176.812,357.812 256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812"
                    />
                    <path
                        fill={color}
                        d="M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256
                            C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                    />
                </g>
            </svg>
        </div> 
    )
}

export default CloseButton;
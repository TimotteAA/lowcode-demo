import React from "react";

interface Cmp {
    key: string;
    style: React.CSSProperties;
    value: any;
    onClick?: Function;
}

const Cmp: React.FC<Cmp> = ({ style, value, onClick}) => {
    return <div style={{...style, cursor: "pointer"}} onClick={() => onClick && onClick()}>{value}</div>
}

export default Cmp;

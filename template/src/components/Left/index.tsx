import React, {ReactNode} from "react";
import styles from "./index.module.less";
import LeftList from "./LeftList";

export interface ILeft {
    children: ReactNode;
}


const Left: React.FC<{}> = (props) => {
    return <div className={styles.left}>
        <LeftList />
    </div>
}

export default Left;

import React, {ReactNode} from "react";
import styles from "./index.module.less";

export interface ILayout {
    children: ReactNode[];
}

const Layout: React.FC<ILayout> = (props) => {
    const { children } = props;
    return <div className={styles.layout}>
        {children[0]}
        {children[1]}
        {children[2]}
    </div>
}

export default Layout;

import React, {useEffect, useReducer} from "react";
import styles from "./index.module.less";
import { getContext } from "../../store/hooks"
import Cmp from "../Cmp";
// 画布中存储各个组件的数据

const Middle: React.FC<{}> = (props) => {
    const canvas = getContext();
    const cmps = canvas.getCanvasCmps();
    const [_, forceUpdate] = useReducer(x => x + 1, 0);
    console.log(cmps, "画布");
    useEffect(() => {
        const ubsubscribe = canvas.addListener(forceUpdate);
        return () => {
            ubsubscribe();
        }
    }, [])

    return <div className={styles.middle}>
        <div className={styles.draw}>
            {
                cmps.map((cmp, idx) => {
                    return <Cmp key={idx + ""} style={cmp.style} value={cmp.value} />
                })
            }
        </div>
    </div>
}

export default Middle;

import React, {useEffect, useMemo, useState} from "react";
import styles from "./index.module.less"
import keysToCmps from "../Materials/index";
import { Keys, keys } from "../Materials/index";
import Cmp from "../../Cmp";
import { getContext } from "../../../store/hooks"

const LeftList: React.FC<{}>= () => {
    const [key, setKey] = useState<Keys>("title");
    const Cmps: any[] = useMemo(() => {
        // @ts-ignore
        return keysToCmps[key];
    }, [key])

    const addCmp = (c: any) => {
        canvas.addCmp({ ...c, style: {...c.style, position: "absolute"}});
    }

    const canvas = getContext();

    return <ul className={styles.leftList}>
        {
            keys.map((k) => {
                return <li className={styles.listItem} key={k} onClick={() => {setKey(k)}} onMouseOver={() => setKey(k)}>{k}</li>
            })
        }
       <div className={styles.leftCmps}>
           <div className={styles.leftItems}>
               {
                   Cmps && Cmps.length > 0 && Cmps.map((c, idx)=> {
                       return <Cmp style={c.style} value={c.value} key={""+idx} onClick={() => addCmp(c)}/>
                   })
               }
           </div>
       </div>
    </ul>
}

export default LeftList;
1

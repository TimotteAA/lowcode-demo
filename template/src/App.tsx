import styles from "./index.module.less";
import Header from "./components/Header";
import Layout from "./Layout";
import Left from "./components/Left";
import Right from "./components/Right";
import Middle from "./components/Middle";
import { useCanvas } from "./store/hooks";
import canvasContext from "./store/context";

function App() {
    const canvas = useCanvas();

    return (
        <div className={styles.container}>
            <Header />
            <canvasContext.Provider value={canvas}>
                <Layout>
                        <Left />
                        <Middle/>
                        <Right />
                </Layout>
            </canvasContext.Provider>
        </div>
    )
}

export default App

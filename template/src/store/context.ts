import { createContext } from "react";
import Canvas, { initialCanvas} from "./canvas"

const canvasContext = createContext<Canvas>({} as Canvas)

export default canvasContext;

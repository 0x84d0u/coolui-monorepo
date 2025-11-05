import { useContext } from "react"
import { AppStateContext } from "./AppStateContext"

export const useAppState = () => {
    const ctx = useContext(AppStateContext);
    if (!ctx) {
        throw new Error("useApplication must be wrapped by Application")
    }
    return ctx
}
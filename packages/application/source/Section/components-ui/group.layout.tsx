import React from "react"



export const Layout = (props: { children?: React.ReactNode }) => {
    return <div className="flex-1 flex flex-col">
        {props.children}
    </div>
}

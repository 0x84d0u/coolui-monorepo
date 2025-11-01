"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export function Providers({ data = [], children }) {
    return (_jsx(_Fragment, { children: data.reduceRight((acc, { provider: Provider, props }) => {
            return _jsx(Provider, { ...props, children: acc });
        }, children) }));
}

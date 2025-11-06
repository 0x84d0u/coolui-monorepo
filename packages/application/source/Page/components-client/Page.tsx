"use client";

import { Page as ServerPage, type PageProps as ServerPageProps } from '../components-server/Page'
import { TocItem } from '../lib/types';
import { Nav } from './Nav';

export type PageProps = ServerPageProps & {
    nav?: TocItem[]
}

export const Page = ({
    nav,
    sidebar,
    ...rest
}: PageProps) => {
    return <ServerPage
        sidebar={<>
            <Nav items={nav} />
            {sidebar}
        </>}
        {...rest}

    />
}
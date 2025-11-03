"use client";

import { useRootLayout } from '@/client';
import * as Layout from '../../ui/layout/layout';
import React from 'react';
import { Logo } from '../../ui/logo/Logo';

type Params = NonNullable<Layout.Props['params']>

export type RootLayoutProps = {
    classNames?: Layout.Props['classNames']
    children?: React.ReactNode

    asBody?: Params['asBody']
    container?: Params['containerSize']
}


export const RootLayout = ({
    children,
    classNames,

    asBody,
    container,
}: RootLayoutProps) => {
    const ctx = useRootLayout();

    const logo = <Logo
        wordmark='Cool UI'
    />

    return <Layout.SLot
        params={{
            asBody,
            containerSize: container,
            closeSidebar: ctx.sidebar.close,
            isSidebarOpen: ctx.sidebar.isOpen,
            isHeaderScrolled: ctx.header.scrolled
        }}
        children={{
            page: children,
            header: {
                actions: undefined,
                branding: logo,
                toolbar: <>

                </>,
            },
            sidebar: {
                branding: logo,
                cta: undefined,
                navigation: <p> Navigation </p>
            },
            footer: "Made with love and whiskey"
        }}
        classNames={classNames}


    />
}
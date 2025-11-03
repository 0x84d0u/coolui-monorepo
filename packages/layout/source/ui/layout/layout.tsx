import * as Root from "@/ui/layout/root.slot"
import * as Content from "@/ui/layout/content.slot"
import * as Page from "@/ui/layout/page.slot"

import * as SidebarLayout from "../sidebar/layout"
import * as FooterLayout from "../footer/layout"
import * as HeaderLayout from "../header/layout"


import type { RootLayoutContextType } from "@/context/LayoutContext"
import type { ContainerProps } from "@/server"

export type Props = {
  classNames?: {
    root?: Root.Props['className']
    content?: Content.Props['className']
    page?: Page.Props['className']
    
    sidebar?: SidebarLayout.Props['classNames']
    header?: HeaderLayout.Props['classNames']
    footer?: FooterLayout.Props['classNames']
  }
  children?: {
    page?: React.ReactNode

    sidebar?: SidebarLayout.Props['children'],
    header?: HeaderLayout.Props['children'],
    footer?: FooterLayout.Props['children'],
  }
  params?: {
    asBody?: Root.Props['asBody']

    isSidebarOpen?: RootLayoutContextType['sidebar']['isOpen']
    isHeaderScrolled?: RootLayoutContextType['header']['scrolled']
    closeSidebar?: RootLayoutContextType['sidebar']['close']
    containerSize?: ContainerProps['size']
  }
}

export const SLot = ({
  classNames,
  children,
  params,
}: Props) => {
  const rootProps: Root.Props = { asBody: params?.asBody, className: classNames?.root }
  const pageProps: Page.Props = { children: children?.page, className: classNames?.page }
  const contentProps: Content.Props = { className: classNames?.content }

  const sidebarLayoutProps: SidebarLayout.Props = {
    classNames: classNames?.sidebar,
    children: children?.sidebar,
    params: {
      isOpen: params?.isSidebarOpen,
      close : params?.closeSidebar,
    }
  }

  const footerLayoutProps : FooterLayout.Props = {
    classNames: classNames?.footer,
    children: children?.footer,
    params: {
      containerSize: params?.containerSize
    }
  }

  const headerLayoutProps: HeaderLayout.Props = {
    classNames: classNames?.header,
    children: children?.header,
    params: {
      containerSize: params?.containerSize,
      isScrolled: params?.isHeaderScrolled
    }
  }

  return <Root.Slot {...rootProps}>
    <SidebarLayout.Slot {...sidebarLayoutProps} />
    <Content.Slot {...contentProps}>
      <HeaderLayout.Slot {...headerLayoutProps}/>
      <Page.Slot {...pageProps} />
      <FooterLayout.Slot {...footerLayoutProps}/>
    </Content.Slot>
  </Root.Slot>
}
"use client";

import { useLayout } from "@/client";

import * as Root from "@/slots/layout/root.slot"
import * as Content from "@/slots/layout/content.slot"
import * as Header from "@/slots/layout/header.slot"
import * as Main from "@/slots/layout/main.slot"
import * as Footer from "@/slots/layout/footer.slot"

import { Sidebar, SidebarProps } from "./Sidebar";
import { LogoProps } from "./Logo";



export type LayoutProps = {
  className?: {
    root?: Root.Props['className']
    sidebar?: SidebarProps['className'],
    content?: Content.Props['className']
    header?: Header.Props['className'],
    main?: Main.Props['className']
    footer?: Footer.Props['className']
  }

  asBody?: Root.OwnProps['asBody']

  menu?: React.ReactNode
  // menuItems?: SidebarProps['menuItems']
  // menuWithSearch?: SidebarProps['menuWithSearch']


  header?: React.ReactNode
  logo?: LogoProps
  children?: React.ReactNode
  footer?: React.ReactNode

}

export const Layout = ({
  className,

  asBody,

  menu,
  // menuItems,
  // menuWithSearch,

  header,
  logo,
  children,
  footer
}: LayoutProps) => {

  const ctx = useLayout();

  const isSidebarOpen = ctx.sidebar.isOpen;
  const isHeaderScrolled = ctx.header.scrolled;
  const closeSidebar = ctx.sidebar.close;

  const rootProps: Root.Props = { asBody, className: className?.root }
  const sidebarProps: SidebarProps = {
    isOpen: isSidebarOpen, close: closeSidebar, logo, menu,
    // menuItems, menuWithSearch,
    className: className?.sidebar
  }
  const contentProps: Content.Props = { className: className?.content }
  const headerProps: Header.Props = { isScrolled: isHeaderScrolled, className: className?.header, logo, children: header }
  const mainProps: Main.Props = { children: children, className: className?.main }
  const footerProps: Footer.Props = { children: footer, className: className?.footer }

  return <Root.Slot {...rootProps}>
    <Sidebar {...sidebarProps} />
    <Content.Slot {...contentProps}>
      <Header.Slot {...headerProps} />
      <Main.Slot {...mainProps} />
      <Footer.Slot {...footerProps} />
    </Content.Slot>
  </Root.Slot>
}
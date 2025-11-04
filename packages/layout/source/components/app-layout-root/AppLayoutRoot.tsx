import * as Root from "./root.slot"
import * as Content from "./content.slot"
import * as Page from "./page.slot"

export type AppLayoutRootProps = {
  classNames?: {
    root?: Root.Props['className']
    content?: Content.Props['className']
    page?: Page.Props['className']
  }
  children?: {
    page?: React.ReactNode
    sidebar?: React.ReactNode,
    header?: React.ReactNode,
    footer?: React.ReactNode,
  }
  asBody?: Root.Props['asBody']
}

export const AppLayoutRoot = ({
  classNames,
  children,
  asBody,
}: AppLayoutRootProps) => {
  const rootProps: Root.Props = { asBody, className: classNames?.root }
  const pageProps: Page.Props = { children: children?.page, className: classNames?.page }
  const contentProps: Content.Props = { className: classNames?.content }

  return <Root.Slot {...rootProps}>
    {children?.sidebar}
    <Content.Slot {...contentProps}>
      {children?.header}
      <Page.Slot {...pageProps} />
      {children?.footer}
    </Content.Slot>
  </Root.Slot>
}
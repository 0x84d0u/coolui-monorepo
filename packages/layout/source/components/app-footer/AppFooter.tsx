import * as Root from './root.slot'
import * as Container from './container.slot'

export type AppFooterProps = {
    classNames?: {
        root?: Root.Props['className'],
        container?: Container.Props['className'],
    }
    params?: {
        containerSize?: Container.Props['size']
    }
    children?:  Container.Props['children']
}

export const AppFooter = ({
    classNames,
    children,
    params,
}: AppFooterProps) => {

    return <Root.Slot className={classNames?.root}>
        <Container.Slot className={classNames?.container} size={params?.containerSize}>
                {children}
        </Container.Slot>
    </Root.Slot>
}
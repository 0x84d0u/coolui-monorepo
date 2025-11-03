import * as Typography from "@/slots/typography.slot"


export const Display = (props: Typography.Props) => <Typography.Slot
    family='display'
    weight='semibold'
    size='display'
    tagname='h1'
    {...props}
/>

export const H1 = (props: Typography.Props) => <Typography.Slot
    family='display'
    weight='semibold'
    size='h1'
    tagname='h1'
    {...props}
/>

export const H2 = (props: Typography.Props) => <Typography.Slot
    family='display'
    weight='semibold'
    size='h2'
    tagname='h2'
    {...props}
/>

export const H3 = (props: Typography.Props) => <Typography.Slot
    family='display'
    weight='medium'
    size='h3'
    tagname='h3'
    {...props}
/>

export const H4 = (props: Typography.Props) => <Typography.Slot
    family='display'
    weight='medium'
    size='h4'
    tagname='h4'
    {...props}
/>

export const H5 = (props: Typography.Props) => <Typography.Slot
    family='display'
    weight='medium'
    size='h5'
    tagname='h5'
    {...props}
/>

export const H6 = (props: Typography.Props) => <Typography.Slot
    family='display'
    weight='medium'
    size='h6'
    tagname='h6'
    uppercase
    {...props}
/>

export const Body = (props: Typography.Props) => <Typography.Slot
    family='body'
    size='base'
    {...props}
/>

export const Small = (props: Typography.Props) => <Typography.Slot
    family='body'
    size='sm'
    {...props}
/>

export const Code = (props: Typography.Props) => <Typography.Slot
    family='code'
    size='sm'
    {...props}
/>

export const Caption = (props: Typography.Props) => <Typography.Slot
    family='body'
    size='xs'
    uppercase
    {...props}
/>

export const Label = (props: Typography.Props) => <Typography.Slot weight='medium' size='sm' {...props} />
export const Button = (props: Typography.Props) => <Typography.Slot weight='semibold' size='sm' {...props} />
export const Input = (props: Typography.Props) => <Typography.Slot {...props} />



export const Logo = (props: Typography.Props) => <Typography.Slot
    family='display'
    size='logo'
    weight='semibold'
    {...props}
/>
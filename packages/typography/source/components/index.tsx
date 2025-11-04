import * as Root from "@/components/root.slot"


export const Display = (props: Root.Props) => <Root.Slot
    family='display'
    weight='semibold'
    size='display'
    tagname='h1'
    {...props}
/>

export const H1 = (props: Root.Props) => <Root.Slot
    family='display'
    weight='semibold'
    size='h1'
    
    tagname='h1'
    {...props}
/>

export const H2 = (props: Root.Props) => <Root.Slot
    family='display'
    weight='semibold'
    size='h2'
    tagname='h2'
    {...props}
/>

export const H3 = (props: Root.Props) => <Root.Slot
    family='display'
    weight='medium'
    size='h3'
    tagname='h3'
    {...props}
/>

export const H4 = (props: Root.Props) => <Root.Slot
    family='display'
    weight='medium'
    size='h4'
    tagname='h4'
    {...props}
/>

export const H5 = (props: Root.Props) => <Root.Slot
    family='display'
    weight='medium'
    size='h5'
    tagname='h5'
    {...props}
/>

export const H6 = (props: Root.Props) => <Root.Slot
    family='display'
    weight='medium'
    size='h6'
    tagname='h6'
    uppercase
    {...props}
/>

export const Body = (props: Root.Props) => <Root.Slot
    family='body'
    size='base'
    {...props}
/>

export const Small = (props: Root.Props) => <Root.Slot
    family='body'
    size='sm'
    {...props}
/>

export const Code = (props: Root.Props) => <Root.Slot
    family='code'
    size='sm'
    {...props}
/>

export const Caption = (props: Root.Props) => <Root.Slot
    family='body'
    size='xs'
    uppercase
    {...props}
/>

export const Label = (props: Root.Props) => <Root.Slot weight='medium' size='sm' {...props} />
export const Button = (props: Root.Props) => <Root.Slot weight='semibold' size='sm' {...props} />
export const Input = (props: Root.Props) => <Root.Slot {...props} />



export const Logo = (props: Root.Props) => <Root.Slot
    family='display'
    size='logo'
    weight='semibold'
    {...props}
/>
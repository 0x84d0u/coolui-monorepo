import { Page, Section, } from "@coolui/application";
import { PageToc } from "@coolui/application/client";
import type { PageConfig, PageContent } from "@coolui/application";

const pageConfig: PageConfig = {
    alternateSections: true,
    enableSidebar: true,
    sidebarPosition: 'right',
    toc: [
        { id: 'one', title: "One" },
        { id: 'two', title: "Two" },
        { id: 'three', title: "Three" },
        { id: 'four', title: "Four" },
    ]
}

const pageContent: PageContent = {
    title: "Page title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at.",
}


export default function ServerPage() {

    return <Page {...pageConfig} {...pageContent} >
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large" title="One" id='one' colorTheme="secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large" title="Two" id='two' colorTheme="secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large" title="Three" id="three" colorTheme="secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large" title="Four" id="four" colorTheme="secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section spacing="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
    </Page>
}
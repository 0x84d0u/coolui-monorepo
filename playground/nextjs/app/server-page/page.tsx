import { Page, Section } from "@coolui/application";
import type { PageConfig, PageContent } from "@coolui/application";

const pageConfig: PageConfig = {
    alternateSections: true,
    enableSidebar: true,
    sidebarPosition: 'right',
}

const pageContent: PageContent = {
    title: "Page title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at.",
    sidebar: <div> This is a custom sidebar </div>
}


export default function ServerPage() {

    return <Page {...pageConfig} {...pageContent} >
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
        <Section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus doloremque repudiandae at. Maxime reprehenderit modi quod ex deleniti minima rem dolores? Corporis sit illo eveniet quo, accusantium sint ducimus!</Section>
    </Page>
}

import { Section } from "@coolui/application"
import { Page } from "@coolui/application/client"


export default function ServerPage() {

    return <Page
        title="Client page demo"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        sidebar={<div> Custom sidebar </div>}
        nav={[
            { id: 'one', title: "One" },
            { id: 'two', title: "Two" },
            { id: 'three', title: "Three" },
            { id: 'four', title: "Four" },
        ]}
    >
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
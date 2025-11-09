import { PageSection, PageSections } from "@coolui/application";
import { Page } from "@coolui/application/client";


const content = <div> page content </div>


export default function NextPage() {

  return <Page
    sidebarContent={content}
    footerContent={content}

    title="Page title"
    description="Page description"

    sidebarPosition="left"
    tocItems={[
      { id: "1", title: "One"},
      { id: "2", title: "Two"},
      { id: "3", title: "Three"},
    ]}
  >
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection id="1" title="One">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection id="2" title="Two">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection id="3" title="Three">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
    <PageSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam animi ullam, ut at, incidunt necessitatibus nesciunt mollitia ex eligendi corporis laudantium iusto exercitationem explicabo totam aut quam, qui dolor.
    </PageSection>
  </Page>

}
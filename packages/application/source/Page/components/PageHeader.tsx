import { PageHeaderProps } from "./types";
import { Description, Title, Wrapper } from "../lib/header.slots";

export const PageHeader = ({ content }: PageHeaderProps) => {
  const title = content?.title;
  const description = content?.description;

  if (!title && !description) return null

  return <Wrapper>
    <Title title={title} />
    <Description description={description} />
  </Wrapper>
}



import { PageHeaderProps } from "./types";
import { Description, Title, Wrapper } from "../lib/header.slots";

export const PageHeader = ({ description, title  }: PageHeaderProps) => {
  if (!title && !description) return null

  return <Wrapper>
    <Title title={title} />
    <Description description={description} />
  </Wrapper>
}



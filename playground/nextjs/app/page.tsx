import { Button, Card, SuccessAlert, ThemePreview, ThemeSelector } from "@coolui/theme/client";

export default function Page() {
  return <>
    <div> Hello </div>

    <ThemeSelector />

    <ThemePreview />

    <Card> Card </Card>

    <Button> Button </Button>

    <SuccessAlert message="Well done broda" />

  </>
}
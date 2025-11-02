import { Button, Card, SuccessAlert, ThemePreview, ThemeSelector } from "@coolui/theme/client";
import { cn } from "@coolui/core";

export default function Page() {
  return <>
    <div className={cn("text-amber-500")}> Hello </div>

    <ThemeSelector />

    <ThemePreview />

    <Card> Card </Card>

    <Button> Button </Button>

    <SuccessAlert message="Well done broda" />

  </>
}
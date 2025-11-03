// "use client";

// import { Button, Card, SuccessAlert, ThemePreview, ThemeSelector } from "@coolui/theme/client";
import { cn } from "@coolui/core";
import { Button, Card, ThemeSelector } from "@coolui/theme/client";
import { Text } from "@coolui/typography";

export default function Page() {
  return <>
    <Text.Display> Hello </Text.Display>

    <div className={cn("")}>
      Core package
    </div>


    <ThemeSelector />
    <Card> card </Card>
    <Button> Button </Button>
    {/* 

    <ThemePreview />

    <Card> Card </Card>


    <SuccessAlert message="Well done broda" /> */}

  </>
}
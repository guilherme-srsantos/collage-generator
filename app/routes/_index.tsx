import type { MetaFunction } from "@remix-run/node";
import InputForm from "~/components/InputForm";
import Page from "~/components/Page";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Page></Page>
  );
}

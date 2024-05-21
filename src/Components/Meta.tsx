import { Component, JSXElement } from "solid-js";
import { MetaProvider, Title } from "@solidjs/meta";

export const Meta: Component<{ children: JSXElement }> = (props) => {
  return (
    <MetaProvider>
      <Title>{props.children} | Suphakit P.</Title>
    </MetaProvider>
  );
};

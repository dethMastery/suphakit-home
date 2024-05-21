import { Component, JSXElement } from "solid-js";

const Template: Component<{ children: JSXElement }> = (props) => {
  return (
    <div class="w-full min-h-screen bg-jet text-whitesmoke">
      {props.children}
    </div>
  );
};

export default Template;

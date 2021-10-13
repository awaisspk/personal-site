import { styled } from "@stitchesConfig";
import Hightlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/nightOwl";

const exampleCode = `
 (function someDemo() {
   var test = "Hello World!";
  console.log(test);
 })();

return () => <App />;
`;

export const CodeBlock = () => {
  return (
    <Hightlight
      {...defaultProps}
      code={exampleCode}
      language="jsx"
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre
          className={className}
          style={{
            ...style,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            borderRadius: "10px",
            padding: "4px 20px",
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Hightlight>
  );
};

const Pre = styled("pre", {
  fontFamily: "fira Code",
  fontWeight: "bold",
});

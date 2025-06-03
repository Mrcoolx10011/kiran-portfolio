// Use it in your JSX
export default function Example() {
  return <Textarea placeholder="Type here..." />;
}

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`border rounded px-3 py-2 w-full resize-none ${props.className || ""}`}
    />
  );
}



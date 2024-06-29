
export interface ICommonCompoProps {
  title: string;
}

export default function TestComponent (props: ICommonCompoProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      ben common compo
    </div>
  );
}

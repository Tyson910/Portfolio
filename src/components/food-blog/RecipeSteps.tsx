export interface Props {
  steps: string[];
}
export function RecipeSteps({ steps }: Props): JSX.Element {
  return (
    <>
      <ol>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ol>
    </>
  );
}

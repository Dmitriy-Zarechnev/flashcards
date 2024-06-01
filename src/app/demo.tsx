interface DemoProps {
  setShown?: (isShown: boolean) => void
}

// Use the DemoProps interface to type the component's props
export const Demo = ({ setShown }: DemoProps) => {
  return (
    <div>
      <div>123</div>
      <button onClick={() => setShown && setShown(false)}>Close Dialog</button>
    </div>
  )
}

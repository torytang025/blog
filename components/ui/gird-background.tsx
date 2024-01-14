export default function GridBackground(props: { children?: React.ReactNode }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 h-dvh w-dvw select-none bg-white bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2]">
      {props.children}
    </div>
  );
}

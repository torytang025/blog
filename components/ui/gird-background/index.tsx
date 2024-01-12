export default function GridBackground(props: { children: React.ReactNode }) {
  return (
    <div className="h-dvh w-dvw bg-white bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2]">
      {props.children}
    </div>
  );
}

const blobs = [
  { size: 200, top: 50, left: 30 },
  { size: 300, top: 100, left: 200 },
  { size: 180, top: 220, left: 120 },
  { size: 250, top: 40, left: 400 },
  { size: 160, top: 180, left: 350 },
];

export default function BlobBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      aria-hidden="true"
    >
      {blobs.map(({ size, top, left }, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/10 dark:bg-primary/10 opacity-50"
          style={{
            width: size,
            height: size,
            top,
            left,
          }}
        />
      ))}
    </div>
  );
}
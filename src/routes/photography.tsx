import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/photography")({
  component: Photography,
});

function Photography() {
  return (
    <div className="p-2">
      <h3>Welcome to my photography page!</h3>
    </div>
  );
}

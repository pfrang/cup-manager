import { Button } from "../button";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white p-4">
      <div className="flex w-full gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Cup manager!</h1>
        <Button>Go to Studio</Button>
      </div>
    </header>
  );
}

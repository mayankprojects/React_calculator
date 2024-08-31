export default function Display({value}) {
  return (
    <>
      <div className="input">
        <input
          type="text"
          className="h-12 w-64 p-4 font-mono text-lg border-2 border-gray-900 rounded-lg"
          value={value}
        />
      </div>
    </>
  );
}

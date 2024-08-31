export default function Buttons({ btn, buttonClicked }) {
  return (
    <>
      {/* Not putting the {} in map resolves the error */}
      {btn.map((item, index) => (
        <div
          key={index}
          className="box flex justify-center items-center w-12 h-12 border-2 border-gray-800 bg-gray-300 rounded-lg hover:bg-gray-500 cursor-pointer"
          onClick={() => {buttonClicked(item)}}
        >
          {item}
        </div>
      ))}
    </>
  );
}

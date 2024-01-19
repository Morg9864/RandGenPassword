export default function App() {
  return (
    <>
      <h1 className="mt-6 flex justify-center text-3xl font-bold underline">
        Random Password
      </h1>
      <h1 className=" mt-2 flex justify-center text-3xl font-bold underline">
        Generator
      </h1>

      <div className="m-5 p-3 bg-white rounded-md">
        <div className="flex justify-center mt-6">
          <div className="flex flex-col">
            <label className="text-center font-bold">Password Length</label>
            <input
              className="w-48 px-3 py-2 border border-gray-300 rounded mt-1"
              type="number"
              placeholder="16"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex justify-center mt-6">
            <div className="flex flex-col">
              <label className="text-center font-bold">Include Symbols</label>
              <input
                className="w-48 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex flex-col">
              <label className="text-center font-bold">Include Numbers</label>
              <input
                className="w-48 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex justify-center mt-2">
            <div className="flex flex-col">
              <label className="text-center font-bold">Include Lowercase</label>
              <input
                className="w-48 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
              />
            </div>
          </div>

          <div className="flex justify-center mt-2">
            <div className="flex flex-col">
              <label className="text-center font-bold">Include Uppercase</label>
              <input
                className="w-48 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded">
            Generate Password
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex flex-col">
            <label className="text-center font-bold">Your Secure Password</label>
            <input
              className="w-48 px-3 py-2 border border-gray-300 rounded mt-1"
              type="text"
              value="sdfjksdfjksdf"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded">
            Copy Password
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded">
            Reset
          </button>
        </div>
      </div>
    </>
  )
}
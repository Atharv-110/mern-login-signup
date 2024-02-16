import { useState } from "react";
import FInput from "../ui/FInput";
import FTypography from "../ui/FTypography";
import FButton from "../ui/FButton";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <div className="card">
        <img src="/logo.png" alt="logo image" className="logo" />
        <div>
          <FTypography variant="heading" text="Login" />
          <FTypography
            variant="sub-heading"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, nam."
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <FInput
              label="email"
              place="Enter your email"
              variant="email"
              val={form.email}
              setVal={(value) => handleInputChange("email", value)}
            />
            <FInput
              label="password"
              place="Enter your password"
              variant="password"
              val={form.password}
              setVal={(value) => handleInputChange("password", value)}
            />
          </div>

          <div className="mt-6">
            <FButton variant="filled" text="Login" type="submit" />
          </div>
        </form>
        <p className="sub-title text-center">
          Do not have an account?{" "}
          <span>
            <Link className="text-violet-600 font-medium" to={"/signup"}>
              Register
            </Link>
          </span>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;

import { useState } from "react";
import FInput from "../ui/FInput";
import FTypography from "../ui/FTypography";
import FButton from "../ui/FButton";
import { Link } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: 0,
    password: "",
  });

  // console.log(form);

  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", form)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="card">
        <img src="/logo.png" alt="logo image" className="logo" />
        <div>
          <FTypography variant="heading" text="Sign up" />
          <FTypography
            variant="sub-heading"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, nam."
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FInput
              label="name"
              place="Enter your name"
              variant="text"
              val={form.name}
              setVal={(value) => handleInputChange("name", value)}
            />
            <FInput
              label="email"
              place="Enter your email"
              variant="email"
              val={form.email}
              setVal={(value) => handleInputChange("email", value)}
            />
            <FInput
              label="number"
              place="Enter your number"
              variant="number"
              val={form.number}
              setVal={(value) => handleInputChange("number", value)}
            />
            <FInput
              label="password"
              place="Enter your password"
              variant="password"
              val={form.password}
              setVal={(value) => handleInputChange("password", value)}
            />
          </div>

          <div className="mt-6 flex flex-col-reverse md:flex-row items-center gap-4">
            <FButton variant="bordered" text="Cancel" />
            <FButton variant="filled" text="Confirm" type="submit" />
          </div>
        </form>
        <p className="sub-title text-center">
          Already have an account?{" "}
          <span>
            <Link className="text-violet-600 font-medium" to={"/"}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </main>
  );
};

export default SignupPage;

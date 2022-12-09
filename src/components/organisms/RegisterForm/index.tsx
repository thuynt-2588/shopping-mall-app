import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { auth, registerWithEmailAndPassword } from "../../../firebase";
import "./index.scss";
import clsx from "clsx";
import {
  isValidEmail,
  isValidFirstName,
  isValidPassword,
} from "../../../utilities/validator";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import routesName from "../../../routes/enum.routes";
import { useDispatch } from "react-redux";
import { changeSelectedTab } from "../../../slices/tabs/tabSlice";

type Props = {
  className?: string;
};

const RegisterForm: React.FC<Props> = ({ className }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const changeTab = (tabId: string | number) => {
    dispatch(changeSelectedTab(tabId));
  };

  const validateRegisterForm = () => {
    const { firstName, email, password } = values;
    const validations = { firstName: "", email: "", password: "" };
    let isValid = true;

    if (!firstName) {
      validations.firstName = "First name is required";
      isValid = false;
    }

    if (firstName && isValidFirstName(firstName)) {
      validations.firstName =
        "First name must contain between 3 and 50 characters";
      isValid = true;
    }

    if (!email) {
      validations.email = "Email is required";
      isValid = false;
    }

    if (email && !isValidEmail(email)) {
      validations.email = "Email format must be as example@mail.com";
      isValid = false;
    }

    if (!password) {
      validations.password = "Password is required";
      isValid = false;
    }

    if (password && !isValidPassword(password)) {
      validations.password =
        "Please enter secure and strong password: 8 characters long, 1 number, 1 uppercase & 1 lowercase character";
      isValid = false;
    }

    if (!isValid) {
      setError(validations);
    }

    return isValid;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleRegister = (e: any) => {
    e.preventDefault();

    if (!validateRegisterForm()) {
      return false;
    }

    registerWithEmailAndPassword(firstName, email, password);
    setValues({ firstName: "", email: "", password: "" });
    setError({ firstName: "", email: "", password: "" });
    changeTab(1);
  };

  const { firstName, email, password } = values;

  const {
    firstName: firstNameError,
    email: emailError,
    password: passwordError,
  } = error;

  useEffect(() => {}, []);

  return (
    <form className={clsx("form-register__box", className)}>
      <Input
        type="text"
        label="Tên"
        required
        name="firstName"
        placeholder="Nhập Tên"
        value={firstName}
        onChange={handleChange}
        errors={firstNameError}
      />
      <Input
        type="text"
        label="Email"
        required
        name="email"
        placeholder="Nhập Địa chỉ Email"
        value={email}
        onChange={handleChange}
        errors={emailError}
      />
      <Input
        type="password"
        label="Mật khẩu"
        required
        name="password"
        placeholder="Nhập Mật khẩu"
        value={password}
        onChange={handleChange}
        errors={passwordError}
      />
      <Button className="btn btn-primary btn-register" onClick={handleRegister}>
        Tạo tài khoản
      </Button>
    </form>
  );
};

export default RegisterForm;

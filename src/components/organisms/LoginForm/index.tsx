import React, { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Link from "../../atoms/Link";
import {
  auth,
  logInWithEmailAndPassword,
} from "../../../firebase";
import "./index.scss";
import clsx from "clsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
}

const LoginForm: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        navigate("/");
        toast.success("Đăng nhập thành công !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        if(error) {
          toast.error("Bạn đã sai email hoặc password !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        
      });
  };

  return (
    <form className={clsx("form-login__box", className)}>
      <Input
        type="text"
        label="Email"
        required
        name="email"
        placeholder="Nhập Địa chỉ Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        label="Mật khẩu"
        required
        name="password"
        placeholder="Nhập Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="txt-forget">
        <Link href="#" onClick={() => console.log("first")}>
          Quên mật khẩu?
        </Link>
      </div>
      <Button className="btn btn-primary btn-login" onClick={handleLogin}>
        Đăng nhập
      </Button>
      <ToastContainer />
      <p className="txt-notes">
        Evo Milana cam kết bảo mật và sẽ không bao giờ đăng <br /> hay chia sẻ
        thông tin mà chưa có được sự đồng ý của bạn.
      </p>
    </form>
  );
};

export default LoginForm;

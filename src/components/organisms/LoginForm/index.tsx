import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Link from "../../atoms/Link";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../../firebase";
import "./index.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

    return (
      <div className="form-login__wrapper">
        <form className="form-login__box">
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
          <Button
            className="btn btn-primary btn-login"
            onClick={() => logInWithEmailAndPassword(auth, email, password)}
          >
            Đăng nhập
          </Button>
          <p className="txt-notes">
            Evo Milana cam kết bảo mật và sẽ không bao giờ đăng <br /> hay chia
            sẻ thông tin mà chưa có được sự đồng ý của bạn.
          </p>
        </form>
        <div className="form-login__break-line">
          <span>hoặc đăng nhập qua</span>
        </div>

        <ul className="form-login__social-list">
          <li className="form-login__social-item">
            <a href="https://www.facebook.com/" rel="noopener">
              <img
                src={require("../../../assets/icons/fb-icon.svg").default}
                alt=""
              />
            </a>
          </li>

          <li className="form-login__social-item" onClick={signInWithGoogle}>
            <a href="https://accounts.google.com/" rel="noopener">
              <img
                src={require("../../../assets/icons/gg-icon.svg").default}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    );
}
 
export default LoginForm;

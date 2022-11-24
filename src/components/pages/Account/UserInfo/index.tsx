type Props = {
  userInfo: {};
};
const UserInfo: React.FC<Props> = ({ userInfo }) => {
  return (
    <div className="account__wrap">
      <div className="account__userinfo">
        <h1 className="account__userinfo-heading">Thông tin tài khoản</h1>
        <div className="account__userinfo-content"></div>
      </div>
    </div>
  );
};

export default UserInfo;

import { NavLink } from "react-router-dom";
import "../shop/Shopuser.css";
const NavbarAdmin = () => {
  return (
    <div>
      <div className="shop_left shop_left1">
        <div style={{ paddingTop: 30 }}>
          <div className="option_shop">
            <div className="option_shop1" style={{ marginRight: 10 }}>
              <img src="../assets/shop/2.png" alt="" width={20} />
            </div>
            <div>
              <NavLink to={"/admin/users"} style={{ textDecoration: "none" }}>
                {" "}
                <h4>Quản Lý Người Dùng</h4>
              </NavLink>
            </div>
          </div>
          <div className="option_shop">
            <div className="option_shop1" style={{ marginRight: 10 }}>
              <img src="../assets/shop/1.png" alt="" width={20} />
            </div>
            <div>
              <NavLink
                to={"/admin/products"}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <h4>Quản Lý Sản Phẩm</h4>
              </NavLink>
            </div>
          </div>
          <div className="option_shop">
            <div className="option_shop1" style={{ marginRight: 10 }}>
              <img src="../assets/shop/3.png" alt="" width={20} />
            </div>
            <div>
              <NavLink to={"/admin/shop"} style={{ textDecoration: "none" }}>
                <h4>Quản Lý Shop</h4>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;

import "./topbar.css";

export default function topbar() {
  return (
    <div className="top">
      <div className="top-left"></div>

      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">Home</li>
          <li className="top-list-item">About</li>
          <li className="top-list-item">Contact</li>
          <li className="top-list-item">Write</li>
          <li className="top-list-item">Logout</li>
        </ul>
      </div>

      <div className="top-right">
        <img
          className="navbar-img"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGV4uHsbpVOLw/profile-displayphoto-shrink_800_800/0/1658782810985?e=1670457600&v=beta&t=71IBtgvFeHZDAd7TLDdibSwoQdwpROan5FnYdexX4qo"
          alt="profile img"
        />
        <i className="fa-solid fa-magnifying-glass top-search-icon"></i>
      </div>
    </div>
  );
}

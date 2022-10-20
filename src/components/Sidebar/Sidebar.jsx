import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          className="sidebarProfilePic"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGV4uHsbpVOLw/profile-displayphoto-shrink_800_800/0/1658782810985?e=1670457600&v=beta&t=71IBtgvFeHZDAd7TLDdibSwoQdwpROan5FnYdexX4qo"
          alt="author image"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          qui laboriosam dolore perferendis velit cum quisquam similique animi
          illo assumenda! Officiis vitae libero molestias itaque exercitationem.
          Earum iste molestias reiciendis?
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Easy</li>
            <li className="sidebarListItem">Medium</li>
            <li className="sidebarListItem">Hard</li>
            <li className="sidebarListItem">Array</li>
            <li className="sidebarListItem">Binary</li>
            <li className="sidebarListItem">String</li>
          </ul>
          <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME!</span>
            <div className="sidebarSocial">
              <i className="sidebarIcons fa-brands fa-github"></i>
              <i className="sidebarIcons fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

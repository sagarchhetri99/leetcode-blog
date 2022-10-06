import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-sm">Blog my</span>
        <span className="header-title-lg">Leetcode</span>
      </div>
      <img
        className="header-img"
        src="https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=1060&t=st=1665014813~exp=1665015413~hmac=994f0b2279ccbdf16dff504f439a8a4a3bdb31e5fdd151750629a2e415aa0607"
        alt="header image"
      />
    </div>
  );
}

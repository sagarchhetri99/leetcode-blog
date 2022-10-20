import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="post image"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Easy</span>
          <span className="postCat">String</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          provident unde autem nostrum, illum ad nulla quas totam quisquam earum
          architecto sapiente suscipit ipsam eligendi, cum asperiores obcaecati
          possimus! Ut. Reiciendis molestias dolorum velit hic eligendi illum,
          tempora saepe voluptates quo deserunt laboriosam sit nam minima quasi
          at libero nisi debitis reprehenderit dolorem quibusdam doloribus.
          Quaerat neque quae labore dicta.Reiciendis molestias dolorum velit hic
          eligendi illum, tempora saepe voluptates quo deserunt laboriosam sit
          nam minima quasi at libero nisi debitis reprehenderit dolorem
          quibusdam doloribus. Quaerat neque quae labore dicta.
        </p>
      </div>
    </div>
  );
}

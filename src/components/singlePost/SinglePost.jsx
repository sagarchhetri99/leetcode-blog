import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          Placeholder Title
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="image of code"
              className="singlePostImg"
            />
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sagar</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          molestiae asperiores aperiam excepturi sequi amet, voluptates fugiat
          labore! Suscipit saepe repudiandae itaque cupiditate distinctio
          quaerat quasi dolores modi reiciendis voluptatum? Vero aspernatur,
          eius ex quas similique nesciunt unde fuga quos culpa, atque ad alias
          quam perferendis. Quos ipsa sequi dolorem expedita autem mollitia
          dignissimos quibusdam ab! Id quas ullam explicabo! Incidunt dolorem
          hic expedita voluptatum ex perferendis aut, nemo alias ducimus
          consequatur aliquam tempore. Molestias, officia quis magnam tenetur
          omnis laborum deleniti eveniet adipisci tempore reiciendis quos
          fugiat, suscipit recusandae! Accusamus qui ipsum expedita ad minima
          nisi deleniti, adipisci eveniet totam, tempore in incidunt magni eaque
          vel omnis, laborum reiciendis quia facilis assumenda recusandae dolore
          quisquam illum. Nulla, rem debitis. Quo nesciunt nostrum odio.
          Cupiditate nihil explicabo cum a optio nostrum doloremque
          perspiciatis, earum officia aliquam commodi praesentium. Iure
          voluptatem eum dolor magnam provident corporis ipsam explicabo vel
          cupiditate blanditiis.
        </p>
      </div>
    </div>
  );
}

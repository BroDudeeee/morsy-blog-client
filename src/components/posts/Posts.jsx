import SinglePost from "../singlePost/SinglePost";
import "./Posts.css";

const posts = [
  {
    id: 1,
    title: `My TEST ${1} post `,
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat reiciendis sint vel maiores officiis, accusantium voluptatem velit placeat hic nihil! Animi, veritatis molestiae. Asperiores ab recusandae nemo accusamus ipsa error!",
  },
  {
    id: 2,
    title: `My TEST ${2} post`,
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat reiciendis sint vel maiores officiis, accusantium voluptatem velit placeat hic nihil! Animi, veritatis molestiae. Asperiores ab recusandae nemo accusamus ipsa error!",
  },
  {
    id: 3,
    title: `My TEST ${3} post`,
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat reiciendis sint vel maiores officiis, accusantium voluptatem velit placeat hic nihil! Animi, veritatis molestiae. Asperiores ab recusandae nemo accusamus ipsa error!",
  },
  {
    id: 4,
    title: `My TEST ${4} post`,
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat reiciendis sint vel maiores officiis, accusantium voluptatem velit placeat hic nihil! Animi, veritatis molestiae. Asperiores ab recusandae nemo accusamus ipsa error!",
  },
];

const Posts = () => {
  return (
    <section className="posts">
      {posts.map((post) => (
        <SinglePost key={post.id} {...post} />
      ))}
    </section>
  );
};

export default Posts;

import { useState } from "react";
import { DefaultTemplate } from "./components/DefaultTemplate"
import { Formulary } from "./components/Formulary"
import { List } from "./components/List";
import "./styles/index.scss"

function App() {
  const [postList, setPostList] = useState([]);

  const addPost = (post) => {
    setPostList([...postList, post]);
  }

  const deletePost = (postId) => {
      const postFiltered = postList.filter((post) => post.id !== postId);
      setPostList(postFiltered);
  }

  // console.log(postList);

  return (
    <DefaultTemplate>
      <Formulary addPost={addPost}/>
      <List postList={postList} deletePost={deletePost} />
    </DefaultTemplate>
  )
}

export default App
import { createContext, useContext, useState } from "react";

const PostContext = createContext(null);

export const PostContextProvider = ({ children }) => {
  const [postDetail, setPostDetail] = useState(null);

  console.log(postDetail?.name + "😭😭😭😭😭😭😭😭😭😭😭😭😭😭"); // Use the optional chaining operator to avoid errors when postDetail is null

  return (
    <PostContext.Provider value={{ SetPostDetail: setPostDetail, postDetail }}>
      {children}
    </PostContext.Provider>
  );
}

export function Post() {
  return useContext(PostContext);
}

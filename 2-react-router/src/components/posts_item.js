import React from 'react';


const PostsItem=({match})=>{
  return <div>ITEM {match.params.id}</div>
}

export default PostsItem;

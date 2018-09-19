import React from 'react';
import NewsListItem from './news_list_item'


const newsList=(props)=>{
  const items= props.news.map(item=>{
    return(
      <NewsListItem key={item.id} item={item} />
    )
  })
  return(
    <div className="row">
      {items}
    </div>
  )
}

export default newsList;

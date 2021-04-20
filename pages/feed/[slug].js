import styles from '../../styles/feed.module.css'
export const Feed = ({pageNumber,articles})=>{
    console.log(articles,pageNumber);
    return (
   <div className={styles.main}>
       {articles.filter((e)=> !e.title.toLowerCase().includes("watch") ).map((e,i)=>
       <div key={i} className={styles.post}>
        <h1>{e.title}</h1>
        <p>{e.description}</p>
        {!e.urlToImage ?<img src="https://media.gettyimages.com/photos/tunisian-president-zine-elabidine-ben-ali-is-pictured-in-his-palace-picture-id108120822?s=612x612"/> :<img src={e.urlToImage}/>}
       </div>)}
   </div>
    )
};
export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;
  
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
      return {
        props: {
          articles: [],
          pageNumber: 1,
        },
      };
    }
  
    const apiResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        },
      },
    ).then(res => res.json());
  
    const { articles } = apiResponse;
  
    return {
      props: {
        articles: articles,
        pageNumber: Number.parseInt(pageNumber),
      },
    };
  };

export default Feed;
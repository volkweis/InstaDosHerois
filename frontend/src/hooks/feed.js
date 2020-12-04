import { useQuery } from 'react-query';
import api from '../services';

const useFeed = () => {
  const feedInfo = ['posts', 'comments', 'likes', 'bestFriends'];

  const { isLoading, error, isError, data } = useQuery('feed', () => {
    const promises = [];
    feedInfo.forEach((item) => promises.push(api.get(`/${item}`)));
    return Promise.allSettled(promises).then((results) => {
      const finalData = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          const { config, data } = result.value;
          const key = config.url.split('/')[1];
          finalData[key] = data;
        }
      });

      const filteredData = [];

      finalData.posts.forEach((post) => {
        const postData = { ...post, comments: [], likes: []};
        finalData.comments.forEach((comment) => {
          if (comment.postId === post.id) {
            postData.comments.push(comment);
          }
        });
        finalData.likes.forEach((like) => {
          if (like.postId === post.id) {
            postData.likes.push(like);
          }
        })
        filteredData.push(postData);
      });

      return {posts: [...filteredData], bestFriends: finalData.bestFriends};
    });
  });

  return { isLoading, isError, error, data };
};



export { useFeed };

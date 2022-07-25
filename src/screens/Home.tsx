import {useState, useEffect, useMemo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {SortType} from '../api/types';
import useQueryPosts from '../api/useQueryPosts';
import Card from '../components/Card';
import Loading from '../components/Loading';

const Page = styled(ScrollView)`
  background-color: #ffffff;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {getPosts, loading} = useQueryPosts();
  const [sort, setSort] = useState<SortType>('hot');

  const cards = useMemo(
    () =>
      posts
        ? posts.map((post, index) => <Card key={index} postData={post} />)
        : null,
    [posts]
  );

  useEffect(() => {
    const init = async () => {
      const posts = await getPosts({sort: 'new'});
      setPosts(posts);
    };
    void init();
  }, []);

  if (loading) return <Loading />;

  return <Page>{cards}</Page>;
}

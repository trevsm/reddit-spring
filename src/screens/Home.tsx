import {useState, useEffect, useMemo} from 'react';
import {Button, Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {SortType} from '../api/types';
import useQueryPosts from '../api/useQueryPosts';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Page from '../components/Page';

const Top = styled(View)`
  padding: 20px;
  background-color: white;
  border-color: #e0e0e0;
  border-bottom-width: 1px;
  margin-bottom: 10px;
`;
const Title = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;
const SortButton = styled(Text)`
  font-size: 20px;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {getPosts, loading} = useQueryPosts();

  const [value, setValue] = useState<SortType>(SortType.Hot);

  const cards = useMemo(
    () =>
      posts
        ? posts.map((post, index) => <Card key={index} postData={post} />)
        : null,
    [posts]
  );

  const init = async () => {
    const posts = await getPosts({value});
    setPosts(posts);
  };

  useEffect(() => {
    void init();
  }, [value]);

  if (loading) return <Loading />;

  return (
    <Page>
      {/* <Dropdown value={value} /> */}
      <ScrollView>
        <Top>
          <Title>Popular</Title>
          <Text>asdf</Text>
        </Top>
        {cards}
      </ScrollView>
    </Page>
  );
}

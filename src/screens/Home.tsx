import {useCallback} from 'react';
import {useState, useEffect, useMemo} from 'react';
import {RefreshControl} from 'react-native';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {SortType} from '../api/types';
import useQueryPosts from '../api/useQueryPosts';
import Card from '../components/Card';
import Page from '../components/Page';
import {useLoading} from '../stores/useLoading';
import {usePopup} from '../stores/usePopup';
import {wait} from '../tools';

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

const TextHeader = styled(Text)`
  font-size: 15px;
  border-bottom-width: 1px;
  border-color: #a5a4a4;
  padding: 10px 0;
  margin-bottom: 20px;
  color: grey;
`;

const SortOption = styled(Text)`
  font-size: 20px;
  margin-bottom: 15px;
  padding: 5px;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {getPosts} = useQueryPosts();
  const {loading, setLoading} = useLoading();
  const {setVisibility, setElement} = usePopup();

  const [sort, setSort] = useState<SortType>(SortType.New);

  const cards = useMemo(
    () =>
      posts
        ? posts.map((post, index) => <Card key={index} postData={post} />)
        : null,
    [posts]
  );

  const init = useCallback(async () => {
    const posts = await getPosts({sort});
    setPosts(posts);
  }, [sort, posts]);

  const handleSortPopup = () => {
    setElement(
      <View>
        <TextHeader>Pick a sort type:</TextHeader>
        {Object.keys(SortType).map((key, index) => (
          <SortOption
            key={index}
            onPress={() => {
              setVisibility(false);
              setSort(SortType[key as keyof typeof SortType]);
            }}
          >
            {key}
          </SortOption>
        ))}
      </View>
    );
    setVisibility(true);
  };

  const handleRefresh = useCallback(async () => {
    setLoading(true);
    await wait(1000);
    init();
  }, [posts, sort]);

  useEffect(() => {
    setLoading(true);
    void init();
  }, [sort]);

  return (
    <Page>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
      >
        <Top>
          <Title>Popular</Title>
          <Text onPress={handleSortPopup}>{sort}</Text>
        </Top>
        {cards}
      </ScrollView>
    </Page>
  );
}

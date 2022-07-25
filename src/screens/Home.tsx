import {useState, useEffect, useMemo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native';
import {SortType} from '../api/types';
import useQueryPosts from '../api/useQueryPosts';
import Card from '../components/Card';
import Loading from '../components/Loading';

const Page = styled(View)`
  background-color: #ffffff;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {getPosts, loading} = useQueryPosts();

  const [sort, setSort] = useState<SortType>(SortType.Hot);
  const [open, setOpen] = useState(false);

  const cards = useMemo(
    () =>
      posts
        ? posts.map((post, index) => <Card key={index} postData={post} />)
        : null,
    [posts]
  );

  const init = async () => {
    const posts = await getPosts({sort});
    setPosts(posts);
  };

  useEffect(() => {
    void init();
  }, [sort]);

  if (loading) return <Loading />;

  return (
    <Page>
      <View
        style={{
          zIndex: 9999,
          padding: 10,
          paddingBottom: 20,
          borderBottomWidth: 1,
        }}
      >
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={sort}
          setValue={setSort}
          items={Object.keys(SortType).map((key) => ({
            value: key,
            label: key,
          }))}
          containerStyle={{height: 40}}
          listItemContainerStyle={{padding: 10}}
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
      <ScrollView>
        <Text></Text>
        {cards}
        <Text></Text>
      </ScrollView>
    </Page>
  );
}

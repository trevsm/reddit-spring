import {View, Text, Button, Image} from 'react-native';
import styled from 'styled-components/native';
import {Post} from '../api/types';
import {fixIconUrl} from '../tools';
import {urls} from '../urls';

const Container = styled(View)`
  padding: 15px;
  margin-bottom: 10px;
  background-color: white;
  border-color: #e0e0e0;
  border-bottom-width: 1px;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: 500;
`;

const Prefix = styled(Text)`
  font-size: 16px;
  font-weight: 500;
`;

const SubredditIcon = styled(Image)`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  margin-right: 10px;
`;

const Thumbnail = styled(Image)`
  width: 100px;
  height: 70px;
`;

const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export default function Card({postData}: {postData: Post}) {
  const {title, subreddit_name_prefixed, thumbnail} = postData.data;
  const {icon_img, community_icon} = postData.data.sr_detail;

  const subredditIcon =
    icon_img || community_icon || urls.web.defaultSubredditIcon;

  return (
    <Container>
      <Header>
        <SubredditIcon
          source={{
            uri: fixIconUrl(subredditIcon),
          }}
        />
        <Prefix>{subreddit_name_prefixed}</Prefix>
      </Header>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Title
          style={{
            width: thumbnail ? '70%' : '100%',
          }}
        >
          {title}
        </Title>
        {thumbnail && <Thumbnail source={{uri: fixIconUrl(thumbnail)}} />}
      </View>
    </Container>
  );
}

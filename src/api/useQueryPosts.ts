import {useState, useEffect} from 'react';
import {useLoading} from '../stores/useLoading';
import {objectToQueryString} from '../tools';
import {urls} from '../urls';
import {Post, SortType, TimeType} from './types';

export default function useQueryPosts() {
  const {setLoading} = useLoading();
  const [error, setError] = useState(null);

  const getPosts = async ({
    time = TimeType.Hour,
    sort = SortType.New,
    withAds = false,
    limit = 25,
  }: {
    time?: TimeType;
    sort?: SortType;
    withAds?: boolean;
    limit?: number;
  }) => {
    const params = {
      sort,
      t: time,
      withAds,
      limit,
      feature: 'link_preview',
      sr_detail: 'true',
      allow_over18: 'true',
      obey_over18: 'true',
    };

    const queryString = objectToQueryString(params);
    try {
      const response = await fetch(
        urls.api.base + '/' + sort.toLocaleLowerCase() + '.json' + queryString
      );
      const data = await response.json();
      const postsWithoutAds = data.data.children.filter(
        (post: Post) => !post.data.promoted
      );
      setLoading(false);
      return postsWithoutAds;
    } catch (error: any) {
      setError(error);
    }
  };

  return {getPosts, error};
}

import {useState, useEffect} from 'react';
import {objectToQueryString} from '../tools';
import {urls} from '../urls';
import {Post, SortType, TimeType} from './types';

export default function useQueryPosts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = async ({
    time = TimeType.All,
    value = SortType.Top,
    withAds = false,
    limit = 25,
  }: {
    time?: TimeType;
    value?: SortType;
    withAds?: boolean;
    limit?: number;
  }) => {
    const params = {
      value,
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
        urls.api.base + '/' + value.toLocaleLowerCase() + '.json' + queryString
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

  return {getPosts, loading, error};
}

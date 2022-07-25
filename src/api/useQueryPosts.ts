import {useState, useEffect} from 'react';
import {objectToQueryString} from '../tools';
import {urls} from '../urls';
import {Post, SortType, TimeType} from './types';

export default function useQueryPosts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = async ({
    time = 'month',
    sort = 'top',
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
        urls.api.base + '/' + sort + '.json' + queryString
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

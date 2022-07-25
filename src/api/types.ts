export interface ApiResponse {
  data: {
    after: string;
    before: string | null;
    children: Post[];
    dist: number;
    geo_filter: string;
    modhash: string;
  };
  kind: string;
}

export interface Post {
  data: {
    all_awardings: any[];
    allow_live_comments: boolean;
    approved_at_utc: string | null;
    approved_by: string | null;
    archived: boolean;
    author: string;
    author_flair_background_color: string | null;
    author_flair_css_class: string | null;
    author_flair_richtext: any[];
    author_flair_template_id: string | null;
    author_flair_text: string | null;
    author_flair_text_color: string | null;
    author_flair_type: string;
    author_fullname: string;
    author_is_blocked: boolean;
    author_patreon_flair: boolean;
    author_premium: boolean;
    awarders: any[];
    banned_at_utc: string | null;
    banned_by: string | null;
    can_gild: boolean;
    can_mod_post: boolean;
    category: string | null;
    clicked: boolean;
    content_categories: string | null;
    contest_mode: boolean;
    created: number;
    created_utc: number;
    distinguished: string | null;
    domain: string;
    downs: number;
    edited: boolean;
    gilded: number;
    gildings: {
      gid_1: number;
      gid_2: number;
      gid_3: number;
    };
    hidden: boolean;
    hide_score: boolean;
    id: string;
    is_created_from_ads: boolean;
    is_crosspostable: boolean;
    is_meta: boolean;
    is_original_content: boolean;
    is_reddit_media_domain: boolean;
    is_robot_indexable: boolean;
    is_self: boolean;
    is_video: boolean;
    likes: string | null;
    link_flair_background_color: string | null;
    link_flair_css_class: string | null;
    link_flair_richtext: any[];
    link_flair_template_id: string | null;
    link_flair_text: string | null;
    link_flair_text_color: string | null;
    link_flair_type: string;
    locked: boolean;
    media: {
      reddit_video: Video;
    } | null;
    media_embed: {
      content: string;
      rendered: string;
    } | null;
    media_only: boolean;
    mod_note: string | null;
    mod_reason_by: string | null;
    mod_reason_title: string | null;
    mod_reports: any[];
    name: string;
    no_follow: boolean;
    num_comments: number;
    num_crossposts: number;
    num_reports: number | null;
    over_18: boolean;
    parent_whitelist_status: string;
    permalink: string;
    pinned: boolean;
    post_hint: string;
    preview: {
      images: Image[];
      enabled: boolean;
    } | null;
    pwls: number;
    promoted: boolean;
    quarantine: boolean;
    removal_reason: string | null;
    removed_by: string | null;
    removed_by_category: string | null;
    report_reasons: string | null;
    saved: boolean;
    score: number;
    secure_media: {
      reddit_video: Video;
    } | null;
    secure_media_embed: {
      content: string;
      rendered: string;
    } | null;
    selftext: string;
    selftext_html: string;
    send_replies: boolean;
    spoiler: boolean;
    sr_detail: SrDetail;
    stickied: boolean;
    subreddit: string;
    subreddit_id: string;
    subreddit_name_prefixed: string;
    subreddit_subscribers: number;
    subreddit_type: string;
    suggested_sort: string | null;
    thumbnail: string | null;
    thumbnail_height: number | null;
    thumbnail_width: number | null;
    title: string;
    top_awarded_type: string | null;
    total_awards_received: number;
    treatment_tags: any[];
    ups: number;
    upvote_ratio: number;
    url: string;
    url_overridden_by_dest: string | null;
    user_reports: any[];
    view_count: number | null;
    visited: boolean;
    whitelist_status: string;
    wls: number;
  };
  kind: string;
}

export interface SrDetail {
  accept_followers: boolean;
  allowed_media_in_comments: string[];
  banner_img: string;
  banner_size: [number, number];
  community_icon: string;
  created: number;
  created_utc: number;
  default_set: boolean;
  description: string;
  disable_contributor_requests: boolean;
  display_name: string;
  display_name_prefixed: string;
  free_form_reports: boolean;
  header_img: string;
  header_size: [number, number];
  icon_color: string;
  icon_img: string;
  icon_size: [number, number];
  key_color: string;
  link_flair_enabled: boolean;
  link_flair_position: string;
  name: string;
  over18: boolean;
  previous_names: string[];
  primary_color: string;
  public_description: string;
  quarantine: boolean;
  restrict_commenting: boolean;
  restrict_posting: boolean;
  show_media: boolean;
  submit_link_label: string;
  submit_text_label: string;
  subreddit_type: string;
  subscribers: number;
  title: string;
  url: string;
  user_is_banned: boolean;
  user_is_contributor: boolean;
  user_is_moderator: boolean;
  user_is_subscriber: boolean;
}

export interface Image {
  source: {
    id: string;
    resolutions: {
      url: string;
      width: number;
      height: number;
    }[];
  };
}

export interface Video {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export type SortType = 'new' | 'top' | 'hot' | 'controversial' | 'rising';
export type TimeType = 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';

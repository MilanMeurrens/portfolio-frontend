export type Project = {
  id: string;
  title: string;
  description_short: string;
  description_long?: string;
  header_img: string;
  tags: Array<string>;
  source_code_url: string;
  visit_url: string;
};

export type TimelineElement = {
  id: string;
  title: string;
  date: string;
  description: string;
};

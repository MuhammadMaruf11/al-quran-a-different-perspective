import { Verses } from "./ayah";

export type Topic = {
  id: number;
  topicName: string;
};

export type TopicsData = {
  title: string;
  data: Topic[];
};

export type SubTopicsData = {
  title: string;
  data: Verses[];
};

export type Params = {
  topicId: string;
  subTopicId: string;
};

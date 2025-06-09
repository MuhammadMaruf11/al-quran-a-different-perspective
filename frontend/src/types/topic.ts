export type Topic = {
  id: number;
  topicName: string;
};

export type topicSlug = {
  params: {
    topicId: string;
    subTopicId: string;
  };
};

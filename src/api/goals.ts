export const API_RESPONSE_GOALS = [
  {
    id: 1,
    data: {
      name: "main goal",
      children: [
        {
          name: "first level children 1",
          importance: 0.8,
          children: [
            {
              name: "second level children 1",
              children: [
                { name: "third level 1", progress: 0.5, importance: 0.8 },
                { name: "third level 2", importance: 0.1, progress: 1 },
                { name: "third level 3", importance: 0.1 },
              ],
            },
          ],
        },
        {
          name: "first level children 2",
          progress: 0.5,
          importance: 0.2,
        },
      ],
    },
  },
  {
    id: 2,
    data: {
      name: "test goal for feature",
      importance: 1,
      progress: 1,
    },
  },
];

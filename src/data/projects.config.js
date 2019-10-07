export default [
  {
    title: 'Custom Lodash Array',
    items: [
      {
        label: 'chunk',
        hash: 'chunk',
        info: {
          title: 'chunk(array, [size=1])',
          description:
            "Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.",
          arguments: `
            array (Array): The array to process.r.
            [size=1] (number): The length of each chunk
          `,
          returns: '(Array): Returns the new array of chunks.',
          examples:
            "chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]"
        },
        src: 'abbbxGL'
      }
    ]
  }
]

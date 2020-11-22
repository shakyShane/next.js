async function resolve(pathname) {
  return {
    newUrl: '/product',
    parsedDestination: {
      pathname: '/product',
      query: {
        id: 12,
        pathname: 'sofas',
      },
      hash: '',
      href: '/product',
    },
  }
}

module.exports = resolve;

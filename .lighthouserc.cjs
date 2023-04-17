module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      startserverCommand: 'npm run preview',
      url: ['http://localhost:4173'],
      numberofRuns: 3,
    },
  },
};

module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      startserverCommand: 'npm run dev',
      url: ['http://localhost:5173'],
      numberofRuns: 3,
    },
  },
};

export const mockLocalStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
};

global.localStorage = mockLocalStorage;

// export { localStorage };

// const localStorage {
//     setItem: jest.fn((key, value) => (localStorage[key] = value)),
//     getItem: jest.fn((key) => localStorage[key] || null),
//     removeItem: jest.fn((key) => delete localStorage[key]),
// };

import { logout } from "./logout";

import { mockLocalStorage } from "./localStorage.mock";

describe("the logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("clears token from localStorage", async () => {
    logout();

    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("token");
  });
});

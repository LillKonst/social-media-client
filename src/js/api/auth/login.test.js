import { login } from "./login";

import { mockLocalStorage } from "./localStorage.mock";

describe("stores the token in login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("saves token to localStorage", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({ accessToken: "mockToken" }),
    });

    await login("noemail@gmail.com", "password");

    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("mockToken"),
    );
  });
});

class Services {
  async handlePasswordRestore(password, passwordConfirm) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get("code");

    const body = {
      password: password,
      passwordConfirmation: passwordConfirm,
      code: token,
    };

    await fetch(
      "https://www.staging.rangosemfila.com.br/v2/auth/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  }
}

export { Services };

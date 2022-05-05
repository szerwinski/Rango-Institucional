import axios from "axios";

class Services {
  async handlePasswordRestore(password, passwordConfirm, token) {
    const body = {
      password: password,
      passwordConfirmation: passwordConfirm,
      code: token,
    };

    console.log(`corpo request api: ${JSON.stringify(body)}`);

    try {
      const response = await axios({
        url: "https://www.api.rangosemfila.com.br/v2/auth/reset-password",
        method: "post",
        type: "Application/JSON",
        data: body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(`response chamada api: ${response}`);
    } catch (e) {
      console.error(`erro chamada api: ${e}`);
    }
  }

  async handleFormSubmit(data) {
    const response = await axios({
      url: "https://www.api.rangosemfila.com.br/v2/sendFormMail",
      method: "post",
      type: "Application/JSON",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  timeout(f) {
    setTimeout(f, 3000);
  }


}

export { Services };

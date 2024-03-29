import axios from "axios";

class Services {
  async handlePasswordRestore(body) {
    const response = await axios({
      url: "https://www.api.rangosemfila.com.br/v2/auth/reset-password",
      method: "post",
      type: "Application/JSON",
      data: body,
    });

    console.log(response);
    return response;
  }

  async handleFormSubmit(data) {
    const response = await axios.post(
      "https://www.api.rangosemfila.com.br/v2/sendFormMail",
      data
    );

    console.log(response);
  }

  timeout(f) {
    setTimeout(f, 3000);
  }
}

export { Services };

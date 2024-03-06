import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const getDataFromServer = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("responsedata").innerHTML = JSON.stringify(
      response.data
    );
  };

  const data = {
    name: "John",
    age: 30,
  };

  // post data to server
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/post", { data });
    console.log(response.data);
    document.getElementById("postdata").innerHTML = JSON.stringify(
      response.data
    );
  };
  //post form data to server
  const [formData, setFormData] = useState("");

  const postFormDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/postForm", {
      formData,
    });
    console.log(response.data);
  };
  return (
    <div className="App">
      <button onClick={getDataFromServer}>Get Data</button>
      <p id="responsedata"></p>

      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="postdata"></p>

      <form onSubmit={postFormDataFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <input type="submit" value="Test Form" />
      </form>
    </div>
  );
};

export default App;

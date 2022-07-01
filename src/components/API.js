import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8083/actuator`
});

// import React from "react";

// const API = (uri) => {
//   axios.create({
//     baseURL: `http://localhost:8083/actuator`,
//   });
// };

// export default API;

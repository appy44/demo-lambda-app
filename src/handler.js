import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export const handler = async () => {
  const id = uuidv4();

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      requestId: id,
      title: _.startCase(response.data.title)
    })
  };
};

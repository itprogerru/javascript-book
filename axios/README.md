example multi endpoint axios 

```javascript
const interseptorRequest = () => {}
const interseptorResponse = () => {}

const fun1 = () => {
  const instance = axios.create({ baseURL: "test" });
  instance.defaults.headers.post["Content-Type"] =
    "application/json; charset=UTF-8";
  instance.interceptors.request.use(interseptorRequest());
  instance.interceptors.response.use(interseptorResponse());
  return instance;
};

const fun2 = () => {
    const instance = axios.create({ baseURL: "test2" });
    instance.defaults.headers.post["Content-Type"] =
        "application/json; charset=UTF-8";
    instance.interceptors.request.use(interseptorRequest());
    instance.interceptors.response.use(interseptorResponse());
    return instance;
};

const request = {
  endPoint1: fun1(),
  endPoint2: fun1()
};
```

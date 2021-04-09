const urlSearchParams = (url) => {
    const data = {};
    Object.defineProperty(data, 'add', {
        value(key, value) {
            data[key] = value;
            return data;
        }
    });
    Object.defineProperty(data, 'toString', {
        value() {
            return data;
        }
    });
    Object.defineProperty(data, 'has', {
        value(key) {
            return data.hasOwnProperty(key);
        }
    });
    Object.defineProperty(data, 'parse', {
        enumerable: false,
        value(string) {

        }
    });
    return data;

}
const url = urlSearchParams();
url.add("key", "temp")
console.log(url);
console.log(url.has("key"));
console.log(url.toString());

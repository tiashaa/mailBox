import axios from "axios";

const DummyApi = axios.create({
    baseURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/311743/dummy-emails.json'
});

const getMails = () => {
    let data;

    DummyApi.get("")
        .then((response) => {
            data = response.data;
            let id = 0;
            for (let email of data) {
                email.id = id++;
            }
            console.log(data);
        })
    return data;
};

export {getMails};
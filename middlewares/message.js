const service_id = "ncp:sms:kr:298986463964:scentre";
const secret_key = "e8yamUhDIqkxwWnf8pgml3JYu3zwQ9O6aLSeDHwG";
const access_key = "yb0LkDouQU6ocwDnvBic";

const uri = "https://sens.apigw.ntruss.com/sms/v2/services/ncp:sms:kr:298986463964:scentre/messages"
const uri2 = `/sms/v2/services/${service_id}/messages`;

const newLine = '\n';
const space = ' ';

const request = require("request");
const crypto = require("crypto-js");

exports.send_message = (password, name, ph_number) => {
    const auth = crypto.algo.HMAC.create(crypto.algo.SHA256, secret_key);
    const date = Date.now().toString();

    auth.update("POST");
    auth.update(space);
    auth.update(uri2);
    auth.update(newLine);
    auth.update(date);
    auth.update(newLine);
    auth.update(access_key);

    const hash = auth.finalize();
    const signature = hash.toString(crypto.enc.Base64);

    let options = {
        uri: uri,
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=utf-8",
            "x-ncp-apigw-timestamp": date,
            "x-ncp-iam-access-key": access_key,
            "x-ncp-apigw-signature-v2": signature
        },
        body: {
            type: "SMS",
            countryCode: "82",
            from: "01027847006",
            content: `변경된 비밀번호는 다음과 같습니다: ${password}`,
            messages: [
                { to: `${ph_number}` }
            ]
        }
    }
    
    request.post(options, (err, res, data) => {
        if (err)
            return 0;
        if (res)
            return data;
    });
}
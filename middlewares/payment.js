const secret_key = "7xpD2OOyui";
const client_id = "2Gh7o4TBc7qEiNzWQaZ1";

const merc_number = "";

const uri = "https://dev.apis.naver.com/naverpay-partner/naverpay/payments/v2/reserve";

const request = require("request");

exports.naver_pay = async (req) => {
    let options = {
        uri: uri,
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=utf-8",
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": secret_key
        },
        body: {
            "modelVersion": "2",
            "merchantPayKey": merc_number,
            "productName": req.product_name,
            "productCount": req.number_of_stocks,
            "totalPayAmount": req.amount,
            "deliveryFee": req.fee,
            "taxScopeAmount": req.taxScopeAmount,
            "taxExScopeAmount": req.taxExScopeAmount,
            "returnUrl": "https://scento.co.kr/api/v1/payment_naver",
            "productItem": {
                "categoryType": "ETC",
                "categoryId": "ETC",
                "uid": req.product_code,
                "name": req.product_name,
                "count": req.number_of_stocks
            }
        }
    }

    request.post(options, (err, res, data) => {
        if (err)
            return 0;
        if (res)
            return data.body.reserveId;
    });
}
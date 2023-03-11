const scentre = require("./mg_collection");

//////////// test dataset ///////////////

/*
    @params user data
*/
let test_user_data = new scentre.scentre_user_data({
    type: 0,
    id: "test",
    name: "test_user",
    set_date: Date.now(),
    gender: "남성",
    ph_number: "01012345678",
    bs_number: "test1234",
    bs_type: "test",
    address: "시군구",
    addr_detail: "123",
    email: "test@test.com",
    point: 0,
    times_of_order: 0,
    status: 0,
    register_date: Date.now(),
    time_login: Date.now(),
    time_logout: Date.now()
})

let test_user_t_data = new scentre.scentre_user_data({
    type: 1,
    id: "test1",
    name: "test_user1",
    set_date: Date.now(),
    gender: "여성",
    ph_number: "01012345678",
    bs_number: "test1234",
    bs_type: "test",
    address: "시군구",
    addr_detail: "123",
    email: "test@test.com",
    point: 0,
    times_of_order: 0,
    status: 0,
    register_date: Date.now(),
    time_login: Date.now(),
    time_logout: Date.now()
})

test_user_data.save((err, data) => {
    if (!err)
        console.log("save complete - test user data");
    else
        console.log(err);
})

test_user_t_data.save((err, data) => {
    if (!err)
        console.log("save complete - second test user data");
})

/*
    @params sns data
*/
let test_sns_url = new scentre.scentre_sns_url({
    kakao: "url",
    youtube: "url",
    instagram: "url"
})

let test_sns_url_s = new scentre.scentre_sns_url({
    kakao: "url2",
    youtube: "url2",
    instagram: "url2"
})

test_sns_url.save((err, data) => {
    if (!err)
        console.log("save complete - test sns url data");
    else
        console.log(err);
})

test_sns_url_s.save((err, data) => {
    if (!err)
        console.log("save complete - second sns data");
    else
        console.log(err);
})





/*
    @params faq data
*/
let test_faq = new scentre.scentre_faq({
    index: 1,
    title: "test",
    content: "urls",
    files: []
})

let test_faq_s = new scentre.scentre_faq({
    index: 2,
    title: "test2",
    content: "urls23",
    files: []
})


test_faq.save((err, data) => {
    if (!err)
        console.log("save complete - test faq datas");
    else
        console.log(err);
})

test_faq_s.save((err, data) => {
    if (!err)
        console.log("save complete - test faq_s datas");
    else
        console.log(err);
})


/*
    @params perfume data
*/
let test_perfume_datas = scentre.scentre_perfume_recommend(
    {
        best: [ 
            "product_code1", "product_code2",
            "product_code3", "product_code4",
            "product_code5"  
        ],
        recommend: [ 
            "product_code8" 
        ]
    }
)

test_perfume_datas.save((err, data) => {
    if (!err)
        console.log("save complete - test perfume datas");
    else
        console.log(err);
})


/*
    @params qna data
*/
let test_qna = scentre.scentre_qna({
    index: 1,
    title: "test",
    content: "test",
    user_id: "test",
    reply_status: false
})

let test_qna_s = scentre.scentre_qna({
    index: 2,
    title: "test2",
    content: "test2",
    user_id: "test2",
    reply_status: false
})

test_qna.save((err, data) => {
    if (!err)
        console.log("save complete - test data");
    else
        console.log(err);                                 
})

test_qna_s.save((err, data) => {
    if (!err)
        console.log("save complete - test data");
    else
        console.log(err);                                 
})

let test_banner = new scentre.scentre_mainpage({
    banner: [
        { bannerLink: "https://test1.com" },
        { bannerLink: "https://test2.com" },
        { bannerLink: "https://test3.com" },
        { bannerLink: "https://test4.com" }
    ]
})

test_banner.save((err, data) => {
    if (!err)
        console.log("save complete - banner datas");
    else
        console.log(err);
})

/*
    brand
*/
let test_brand = scentre.scentre_brand({
    br_code: "0",
    br_name: "test",
    br_logo: "test",
    br_detail: "test",
    br_web_bg: "test",
    br_app_bg: "test",
    br_perfumer_list: [
        { 
            'name': 'test',
            'id': "test",
            "thumbnail": "test",
            "detail": "test"
        }
    ],
    br_stocks: [
        {
            "name": "test",
            "code": "123",
            "consumer_price": "10000",
            "order_price": "10000",
            "perfumer_code": "test"
        }
    ],
    product_count: 0,
    product_amount: 0,
    payment_detail: "test",
    payment_method: "test"
})

let test_brand_s = scentre.scentre_brand({
    br_code: "1",
    br_name: "test2",
    br_logo: "test2",
    br_detail: "test2",
    br_web_bg: "test2",
    br_app_bg: "test2",
    br_perfumer_list: [
        { 
            'name': 'test2',
            'id': "test2",
            "thumbnail": "test2",
            "detail": "test2"
        }
    ],
    br_stocks: [
        {
            "name": "test2",
            "code": "123",
            "consumer_price": "10000",
            "order_price": "10000",
            "perfumer_code": "test2"
        }
    ],
    product_count: 0,
    product_amount: 0,
    payment_detail: "test2",
    payment_method: "test2"
})

test_brand.save((err, data) => {
    if (!err)
        console.log("save complete - brand datas");
    else
        console.log(err);
})

test_brand_s.save((err, data) => {
    if (!err)
        console.log("save complete - brand datas");
    else
        console.log(err);
})

/*
    order datas
*/
let test_order_data = scentre.scentre_order_data({
    state: "0",
    previousState: "0",
    order_date: "test",
    payment_date: "test",
    product_number: "test",
    user_id: "test",
    logis: "test",
    extra_number: "test",
    recallInvoice: "test",
    recallDeliveryCharge:"test",
    options: "test",
    quantity: "test",
    productName: "test",
    brand: "test",
    perfumer: "test",
    orderNum: "test",
    paymentMethod: "test",
    usedPoint: 0,
    paidAmount: 0,
    stock: 0,
    to: "test",
    deliveryCharge: "test",
    number: 0,
    address: "test",
    specAddress: "test",
    memo: "test",
    refundAmount: 0,
    orderProductNum: "test",
    productPrice: "test",
    bank: "test",
    cost: 0,
    profit: "test",
    depositAmount: 0,
    process: "test",
    paymentScheduled: "test",
    imputation: "test",
    reason: "test"
})

let test_order_data_s = scentre.scentre_order_data({
    state: "0",
    previousState: "0",
    order_date: "test",
    payment_date: "test",
    product_number: "test1",
    user_id: "test2",
    logis: "test",
    extra_number: "test",
    recallInvoice: "test",
    recallDeliveryCharge:"test",
    options: "test",
    quantity: "test",
    productName: "test2",
    brand: "tes2t",
    perfumer: "test2",
    orderNum: "test2",
    paymentMethod: "test",
    usedPoint: 0,
    paidAmount: 0,
    stock: 0,
    to: "test",
    deliveryCharge: "test",
    number: 0,
    address: "test",
    specAddress: "test",
    memo: "test",
    refundAmount: 0,
    orderProductNum: "test",
    productPrice: "test",
    bank: "test",
    cost: 0,
    profit: "test",
    depositAmount: 0,
    process: "test",
    paymentScheduled: "test",
    imputation: "test",
    reason: "test"
})

test_order_data.save((err, data) => {
    if (!err)
        console.log("save complete - test order datas");
    else
        console.log(err);
})

test_order_data_s.save((err, data) => {
    if (!err)
        console.log("save complete - test order datas");
    else
        console.log(err);
})

let test_product = scentre.scentre_product({
    name: "test",
    tag: "test",
    prod_short: "test",
    search_tag: "test",
    model_name: "test",
    product_code: "test",
    perfumer_name: "test",
    detail: "test",
    expected_date: "test",
    court: "test",
    out_of_stock: "1",
    status: "test",
    price: 0,
    amount_saved: 0,
    amount_delivery: "test",
    item_option: [],
    item_option_price: 0,
    item_image: "test",
    item_image_sub: "test",
    item_image_detail: [],
    item_note: "test",
    product_detail: "test",
    event_data: "None"
})

let test_product_s = scentre.scentre_product({
    name: "test2",
    tag: "test2",
    prod_short: "test2",
    search_tag: "test2",
    model_name: "test2",
    product_code: "test2",
    perfumer_name: "test2",
    detail: "test2",
    expected_date: "test2",
    court: "test2",
    out_of_stock: "0",
    status: "test2",
    price: 0,
    amount_saved: 0,
    amount_delivery: "test2",
    item_option: [],
    item_option_price: 0,
    item_image: "test2",
    item_image_sub: "test2",
    item_image_detail: [],
    item_note: "test2",
    product_detail: "test2",
    event_data: "None"
})

test_product.save((err, data) => {
    if (!err)
        console.log("save complete - test product datas");
    else
        console.log(err);
})

test_product_s.save((err, data) => {
    if (!err)
        console.log("save complete - test product datas");
    else
        console.log(err);
})

let test_servey = scentre.scentre_servey({
    index: 0,
    duplicate: false,
    answer: [
        {
           "str": "test",
           "note": "test",
           "destination": "test"
        }
    ],
    subQuestion: [
        {
            "index": 0,
            "duplicate": false,
            "image": "test",
            "answer":[
                {
                    "str": "test",
                    "note": "test",
                    "destination": "test"
                }
            ]
        }
    ]
})

let test_servey_s = scentre.scentre_servey({
    index: 1,
    duplicate: false,
    answer: [
        {
           "str": "tes1t",
           "note": "test1",
           "destination": "test1"
        }
    ],
    subQuestion: [
        {
            "index": 0,
            "duplicate": false,
            "image": "test1",
            "answer":[
                {
                    "str": "test1",
                    "note": "test1",
                    "destination": "test1"
                }
            ]
        }
    ]
})

test_servey.save((err, data) => {
    if (!err)
        console.log("save complete - test servey datas");
    else
        console.log(err);
})

test_servey_s.save((err, data) => {
    if (!err)
        console.log("save complete - test servey datas");
    else
        console.log(err);
})

let test_user_survey_data = new scentre.scentre_serveydata({
    userid: "test",
    qna: [
        {
            question: "test",
            answer: "test",
            note: "test",
            direction: "test"
        }
    ]
})

test_user_survey_data.save((err, data) => {
    if (!err)
        console.log("save complete - test user servey datas");
    else
        console.log(err);
})


let test_fee = new scentre.scentre_adjustment_list(
    {
        br_number: "1",
        total_amount: 0,
        fee: 0,
        calc_amount: 0,
        none_calc_amount: 0
    }
)

let test_fee_s = new scentre.scentre_adjustment_list(
    {
        br_number: "0",
        total_amount: 0,
        fee: 1000,
        calc_amount: 0,
        none_calc_amount: 0
    }
)

test_fee.save((err, data) => {
    if (!err)
        console.log("save complete - test servey datas");
    else
        console.log(err);
})

test_fee_s.save((err, data) => {
    if (!err)
        console.log("save complete - test servey datas");
    else
        console.log(err);
})

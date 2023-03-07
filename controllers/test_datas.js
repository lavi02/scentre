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

test_user_data.save((err, data) => {
    if (!err)
        console.log("save complete - test user data");
    else
        console.log(err);
})

/*
    @params sns data
*/
let test_sns_url = new scentre.scentre_sns_url({
    kakao: "url",
    youtube: "url",
    instagram: "url"
})

test_sns_url.save((err, data) => {
    if (!err)
        console.log("save complete - test sns url data");
    else
        console.log(err);
})


/*
    @params faq data
*/
let test_faq = new scentre.scentre_faq({
    index: 1,
    title: "test",
    content: "urls"
})

test_faq.save((err, data) => {
    if (!err)
        console.log("save complete - test faq datas");
    else
        console.log(err);
})


/*
    @params perfume data
*/
let test_perfume_datas = scentre.scentre_perfume_recommend(
    {
        best: [ "product_code1", "product_code2" ],
        recommend: [ "product_code1", "product_code2" ]
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
    content: "test"
})

test_qna.save((err, data) => {
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
    code_number: 0,
    brand_name: "test",
    logo: "test",
    brand_detail: "test",
    image_web: "test",
    image_app: "test",
    perfumer_data: "['test']",
    product_data: "['test']",
    product_count: 0,
    product_amount: 0,
    payment_detail: "test",
    payment_method: "test"
})

test_brand.save((err, data) => {
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

test_order_data.save((err, data) => {
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
    out_of_stock: "test",
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

test_product.save((err, data) => {
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
            "index": 0,
            "duplicate": "false",
            "image": ["test"],
            "answer": [],
            "question": [],
            "subQuestion": []
        }
    ]
})

test_servey.save((err, data) => {
    if (!err)
        console.log("save complete - test servey datas");
    else
        console.log(err);
})

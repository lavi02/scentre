const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const { Collection } = require('mongodb');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localplayer01:senkawa020504@3.38.11.171:27017/scentre_db?authSource=admin'
)
let test = mongoose.connection;
test.on('error', console.error.bind(console, 'conection error: '));
test.once('open', () => { 
    console.log("h");
    gfs = Grid('mongodb://localplayer01:senkawa020504@3.38.11.171:27017/scentre_db?authSource=admin', mongoose.mongo);  
    //gfs.collection('uploads');
});

const user_token = new mongoose.Schema(
    {

    }, { collection: 'user_token' }
)

const user_data = new mongoose.Schema(
    {
        type: {
            type: String,
            default: '',
            required: true
        },
        id: {
            type: String,
            default: '',
            required: true
        },
        name: {
            type: String,
            default: ''
        },
        password: {
            type: String
        },
        set_date: {
            type: String,
            default: "00000000"
        },
        gender: {
            type: String
        },
        ph_number: {
            type: String,
            default: ''
        },
        bs_number: {
            type: String,
            default: ''
        },
        address: {
            type: String,
            default: '',
            required: true
        },
        addr_detail: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: '',
            required: true
        },
        point: {
            type: String,
            default: '0'
        },
        times_of_order: {
            type: Number,
            default: 0
        },
        status: {
            type: Number,
            required: true
        },
        register_date: {
            type: Date,
            default: Date.now(),
            required: true
        },
        time_login: {
            type: String
        },
        time_logout: {
            type: String
        },
        token: {
            type: String,
            default: "Null"
        }
    }, { collection: 'user_data' }
)

const sns_url = new mongoose.Schema(
    {
        kakao: {
            type: String,
        },
        youtube: {
            type: String
        },
        instagram: {
            type: String
        }
    }, { collection: 'sns_url' }
)

const faq = new mongoose.Schema(
    {
        index: {
            type: Number,
        },
        title: {
            type: String
        },
        content: {
            type: String
        },
        files: {
            type: Array
        }
    }, { collection: 'faq' }
)

const mainpage = new mongoose.Schema(
    {
        banner: [
            new mongoose.Schema({bannerLink: String})
        ]
    }, { collection: 'mainpage' }
)

const perfume_recommend = new mongoose.Schema(
    {
        best: {
            type: Array
        },
        recommend: {
            type: Array
        }
    }, { collection: 'perfume_recommend' }
)

const qna = new mongoose.Schema(
    {
        index: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            default: ''
        },
        files: {
            type: Array,
            default: []
        },
        reply_status: {
            type: Boolean
        }
    }, { collection: 'qna' }
)

const brand = new mongoose.Schema(
    {
        br_code: {
            type: String,
            required: true
        },
        br_name: {
            type: String,
            required: true
        },
        br_logo: {
            type: String,
            required: true
        },
        br_detail: {
            type: String,
            required: true
        },
        br_web_bg: {
            type: String,
            required: true
        },
        br_app_bg: {
            type: String,
            required: true
        },
        br_perfumer_list: {
            type: Array
        },
        br_stocks: {
            type: Array
        },
        product_count: {
            type: Number,
            default: 0
        },
        product_amount: {
            type: Number,
            default: 0
        },
        payment_detail: {
            type: String,
            default: 0
        },
        payment_method: {
            type: String
        }
    }, { collection: 'brand_data' }
)

const delivery_data = new mongoose.Schema(
    {
        product_status: {
            type: String,
            required: true
        },
        order_date: {
            type: String,
            required: true
        },
        payment_date: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            required: true
        },
        product_name: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
        product_amount: {
            type: Number,
            required: true
        },
        payment_detail: {
            type: String,
            required: true
        },
        payment_method: {
            type: String,
            required: true
        },
        delivery_comp: {
            type: String
        }
    }, { collection: "delivery_data" }
)

const order_data = new mongoose.Schema(
    {
        state: String,
        previousState: String,
        order_date: String,
        payment_date: String,
        product_number: String,
        user_id: String,
        logis: String,
        extra_number: String,
        recallInvoice: String,
        recallDeliveryCharge: String,
        options: String,
        quantity: String,
        productName: String,
        brand: String,
        perfumer: String,
        orderNum: String,
        paymentMethod: String,
        usedPoint: Number,
        paidAmount: Number,
        stock: String,
        to: String,
        deliveryCharge: String,
        number: Number,
        address: String,
        specAddress: String,
        memo: String,
        refundAmount: Number,
        orderProductNum: String,
        productPrice: String,
        bank: String,
        cost: Number,
        profit: String,
        depositAmount: Number,
        process: String,
        paymentScheduled: String,
        imputation: String,
        reason: String
    }, { collection: "order_data" }
)

const product = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            required: true
        },
        prod_short: {
            type: String,
            required: true
        },
        search_tag: {
            type: String,
            required: true
        },
        model_name: {
            type: String,
            required: true
        },
        product_code: {
            type: String,
            required: true
        },
        perfumer_name: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        expected_date: {
            type: String,
            required: true
        },
        court: {
            type: String,
            required: true
        },
        out_of_stock: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        amount_saved: {
            type: Number,
            required: true
        },
        amount_delivery: {
            type: String,
            required: true
        },
        item_option: {
            type: Array
        },
        item_option_price: {
            type: Number,
            required: true
        },
        item_image: {
            type: String,
            required: true
        },
        item_image_sub: {
            type: String,
            required: true
        },
        item_image_detail: {
            type: Array
        },
        item_note: {
            type: String,
            required: true
        },
        product_detail: {
            type: String,
            required: true
        },
        event_data: {
            type: String,
            required: true
        },
        sales_volume: {
            type: Number,
            default: 0
        }
    }, { collection: 'product' }
)

const adjustment_list = new mongoose.Schema(
    {
        br_number: {
            type: String,
            required: true
        },
        total_amount: {
            type: Number,
            required: true
        },
        fee: {
            type: Number,
            required: true
        },
        calc_amount: {
            type: Number,
            required: true
        },
        none_calc_amount: {
            type: Number,
            required: true
        }
    }, { collection: 'adjustment_list' }
)

const calc_log = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            required: true
        },
        calc_date: {
            type: String,
            required: true
        },
        calc_amount: {
            type: Number,
            required: true
        },
        settlement_of_amount: {
            type: String,
            required: true
        },
        tax_amount: {
            type: Number,
            required: true
        },
        tax_amount_date: {
            type: String,
            required: true
        }
    }, { collection: 'calc_log' }
)

const product_detail = new mongoose.Schema(
    {
        brand_name: {
            type: String,
            required: true
        },
        marketing_number: {
            type: String,
            required: true
        },
        br_number: {
            type: String,
            required: true
        },
        br_location: {
            type: String,
            required: true
        },
        br_owner: {
            type: String,
            required: true
        },
        custom_service: {
            type: String,
            required: true
        },
        capacity: {
            type: String,
            required: true
        },
        item_date: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        service_number: {
            type: String,
            required: true
        },
        maker_name: {
            type: String,
            required: true
        },
        manager_name: {
            type: String,
            required: true
        },
        delivery_detail: {
            type: String,
            required: true
        },
        delivery_req_detail: {
            type: String,
            required: true
        },
        delivery_req_date: {
            type: String,
            required: true
        }
    }, { collection: 'product_detail' }
)

const servey = new mongoose.Schema(
    {
        index: {
            type: String,
            required: true
        },
        duplicate: {
            type: Boolean,
            required: true
        },
        image: String,
        answer: {
            type: Array
        },
        subQuestion: {
            type: Array
        }
    }, { collection: "servey" }
)

const servey_data = new mongoose.Schema(
    {
        userid: String,
        qna: []
    }, { collection: "servey_data" }
)

const file_upload = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        user_name: {
            type: String,
            required: true
        },

        path: {
            type: String,
            required: true
        }
    }, { collection: "file_upload" }
);
const review = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        name_of_stock: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }, { collection: 'review' }
)

exports.scentre_user_data = mongoose.model('user_data', user_data);
exports.scentre_sns_url = mongoose.model('sns_url', sns_url);
exports.scentre_faq = mongoose.model('faq', faq);
exports.scentre_qna = mongoose.model('qna', qna);
exports.scentre_mainpage = mongoose.model('mainpage', mainpage);
exports.scentre_brand = mongoose.model('brand', brand);
exports.scentre_delivery_data = mongoose.model('delivery_data', delivery_data);
exports.scentre_order_data = mongoose.model('order_data', order_data);
exports.scentre_product = mongoose.model('product', product);
exports.scentre_adjustment_list = mongoose.model('adjustment_list', adjustment_list);
exports.scentre_calc_log = mongoose.model('calc_log', calc_log);
exports.scentre_product_detail = mongoose.model('product_detail', product_detail);
exports.scentre_review = mongoose.model('review', review);
exports.scentre_perfume_recommend = mongoose.model('perfume-recommend', perfume_recommend);
exports.scentre_servey = mongoose.model('servey', servey);
exports.scentre_serveydata = mongoose.model('servey_data', servey_data);
exports.scentre_file_upload = mongoose.model("file_upload", file_upload);

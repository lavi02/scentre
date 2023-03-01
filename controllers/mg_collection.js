const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localplayer01:senkawa020504@3.38.11.171:27017/scentre_db?authSource=admin'
)
let test = mongoose.connection;
test.on('error', console.error.bind(console, 'conection error: '));
test.once('open', () => { console.log("h") });

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
        }
    }, { collection: 'user_data' }
)

const order_detail = new mongoose.Schema(
    {
        owner_id: {
            type: String,
            required: true,
            default: ''
        },
        client_id: {
            type: String,
            required: true,
            default: ''
        },
        name: {
            type: String,       
            required: true,
            default: ''
        },
        order_id: {
            type: String,
            required: true,
            default: ''
        },
        ph_number: {
            type: String,
            required: true,
            default: ''
        },
        address: {
            type: String,
            required: true,
            default: ''
        },
        addr_detail: {
            type: String,
            required: true,
            default: ''
        },
        product_name: {
            type: String,
            required: true,
            default: ''
        },
        option: {
            type: String,
            required: true,
            default: ''
        },
        count: {
            type: Number,
            required: true,
            default: 0
        },
        common_price: {
            type: Number,
            required: true,
            default: 0
        },
        payment_price: {
            type: Number,
            required: true,
            default: 0
        },
        used_point: {
            type: Number,
            required: true,
            default: 0
        },
        left_point: {
            type: Number,
            required: true,
            default: 0
        },
        payment_date: {
            type: Date
        },
        delivery_date: {
            type: Date
        },
        deli_date_detail: {
            type: Date
        }
    }, { collection: 'order_detail' }
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
    }
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
            required: true,
            default: ''
        },
        files: {
            type: String,
            required: true,
            default: ''
        },
        reply_status: {
            type: Boolean
        }
    }, { collection: 'qna' }
)

const brand = new mongoose.Schema(
    {
        code_number: {
            type: Number,
            required: true
        },
        brand_name: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        brand_detail: {
            type: String,
            required: true
        },
        image_web: {
            type: String,
            required: true
        },
        image_app: {
            type: String,
            required: true
        },
        perfumer_data: {
            type: String
        },
        product_data: {
            type: String,
            required: true,
            default: ''
        },
        product_count: {
            type: Number,
            required: true,
            default: 0
        },
        product_amount: {
            type: Number,
            required: true,
            default: 0
        },
        payment_detail: {
            type: Number,
            required: true,
            default: 0
        },
        payment_method: {
            type: String,
            required: true
        }
    }, { collection: 'delivery_data' }
)

const preorder_data = new mongoose.Schema(
    {
        order_date: {
            type: String,
            required: true,
            default: '0000-00-00'
        },
        payment_date: {
            type: String,
            required: true,
            default: '0000-00-00'
        },
        order_number: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            required: true,
            default: ''
        },
        product_data: {
            type: String,
            required: true,
            default: ''
        },
        bank_acc: {
            type: String,
            required: true,
            default: ''
        },
        payment_status: {
            type: String,
            required: true,
            default: ''
        },
        payment_detail: {
            type: String,
            required: true
        },
        brand_name: {
            type: String,
            required: true,
            default: ''
        }
    }, { collection: 'delivery_data' }
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
        checkState: String,
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
        usedPoint: String,
        paidAmount: String,
        stock: String,
        to: String,
        deliveryCharge: String,
        number: String,
        address: String,
        specAddress: String,
        memo: String,
        refundAmount: String,
        orderProductNum: String,
        productPrice: String,
        bank: String,
        cost: String,
        profit: String,
        depositAmount: String,
        process: String,
        paymentScheduled: String,
        imputation: String,
        reason: String
    }, { collection: "order_data" }
)

const order_detail_data = new mongoose.Schema(
    {
        order_date: {
            type: String,
            required: true
        },
        extra_date: {
            type: String,
            required: true
        },
        order_number: {
            type: String,
            required: true
        },
        extra_number: {
            type: String,
            required: true
        },
        user_name: {
            type: String,
            required: true
        },
        brand_name: {
            type: String,
            required: true
        },
        perfumer_name: {
            type: String,
            required: true
        },
        product_data: {
            type: String,
            required: true
        },
        product_count: {
            type: Number,
            required: true
        },
        product_amount: {
            type: String,
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
        logis: {
            type: String,
            required: true
        }
    }, { collection: "order_detail_data" }
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
            type: String,
            required: true
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
            type: String,
            required: true
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

const imageSchema = new mongoose.Schema(
    {
        image_name: String,
        image: String
    }, { collection: 'images' }
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

const delivery_detail = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        return_amount: {
            type: Number,
            required: true
        },
        exchange_amount: {
            type: Number,
            required: true
        },
        place: {
            type: String,
            required: true
        }
    }, { collection: 'delivery_detail' }
)

const servey = new mongoose.Schema(
    {
        duplicate: {
            type: Boolean,
            required: true
        },
        answer: {
            type: Array,
            required: true
        } 
    }, { collection: "servey" }
)
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
exports.scentre_order_detail = mongoose.model('order_detail', order_detail);
exports.scentre_sns_url = mongoose.model('sns_url', sns_url);
exports.scentre_faq = mongoose.model('faq', faq);
exports.scentre_qna = mongoose.model('qna', qna);
exports.scentre_mainpage = mongoose.model('mainpage', mainpage);
exports.scentre_brand = mongoose.model('brand', brand);
exports.scentre_delivery_data = mongoose.model('delivery_data', delivery_data);
exports.scentre_preorder_data = mongoose.model('preorder_data', preorder_data);
exports.scentre_order_data = mongoose.model('order_data', order_data);
exports.scentre_order_detail_data = mongoose.model('order_detail_data', order_detail_data);
exports.scentre_product = mongoose.model('product', product);
exports.scentre_adjustment_list = mongoose.model('adjustment_list', adjustment_list);
exports.scentre_calc_log = mongoose.model('calc_log', calc_log);
exports.scentre_product_detail = mongoose.model('product_detail', product_detail);
exports.scentre_delivery_detail = mongoose.model('delivery_detail', delivery_detail);
exports.scentre_review = mongoose.model('review', review);
exports.scentre_perfume_recommend = mongoose.model('perfume-recommend', perfume_recommend);
exports.scentre_servey = mongoose.model('servey', servey);
exports.scentre_image = mongoose.model('images', imageSchema);

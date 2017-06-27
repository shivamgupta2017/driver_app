angular.module('starter')

.constant('Dict', {
	"en" : {
		// Home Page
		TXT_VIEW_ALL: 'View All',
		TXT_FEATURED_PRODUCTS: 'Featured products',
		TXT_DEALS_OF_THE_DAY: 'Deal of the day',
		TXT_DEALS_OF_THE_DAY_MSG: 'Great savings Everyday!',
		TXT_LOGIN: 'Login',
		TXT_USERNAME: 'Username',
		TXT_PASSWORD: 'Password',
		TXT_OR: 'OR',
		TXT_CREATE_ACCOUNT: 'Create an Account',
		TXT_LOGIN_SIGNUP: 'Login / Signup',
		TXT_LOGOUT: 'Logout',
		TXT_COLLECTIONS: 'Collections',
		TXT_LETS_SHOPPING: 'LET\'S SHOPPING',
		TXT_CANCEL: 'Cancel',
		TXT_SEARCH: 'Search',
		TXT_TYPE_SEARCH: 'Type your search',
		TXT_SEARCH_RERSULT: 'Search Results',
		TXT_COUNTRY: 'Country',
		TXT_CLOSE: 'Close',
		TXT_LOADING: 'Loading',
		TXT_SHOP: 'Shop',
		TXT_RATE: 'Rate',
		TXT_SUBTOTAL: 'Subtotal',
		TXT_TOTAL: 'TOTAL',
		TXT_SHIPPING_METHOD: 'SHIPPING METHOD',
		TXT_PAYMENT_METHOD: 'PAYMENT METHOD',
		TXT_ADD_TO_CART: 'Add to Cart',
		TXT_SOLD: 'Sold Out',
		TXT_SHARE: 'Share',
		TXT_OFF: 'Off',
		TXT_YES: 'Yes',
		TXT_NO: 'No',
		TXT_EXIT: 'Are you sure want to exit',
		TXT_CHECK_CONNECT: 'Error, please check your connection!',
		TXT_SAVE: 'Save',
		TXT_FIRSTNAME: 'First name',
		TXT_LASTNAME: 'Last name',
		TXT_EMAIL: 'Email',
		TXT_PHONE: 'Phone',
		TXT_STREET: 'Street address',
		TXT_STATE: 'State',
		TXT_ZIP: 'Zipcode',
		TXT_TOWN: 'Town/city',
		TXT_NOTE: 'Note',
		TXT_ADDRESS2: 'Apartment, suit, unit etc. (optional)',
		TXT_STATUS: 'Status',
		TXT_PAY: 'PAY',
		TXT_COUPON: 'Coupon Code (optional)',
		TXT_COUPON_INPUT: 'Input your coupon code',
		TXT_SUBMIT: 'Submit',
		TXT_COUPON_DISC: 'Coupon Discount',
		TXT_COUPON_CANCEL: 'Cancel Coupon',
		TXT_COUPON_NOT_SUPPORT: 'Currently not supported from app',

		// ERROR / INVALID
		TXT_CANT_EMPTY: ' can not be empty',
		TXT_INVALID: ' is not valid',
		TXT_NOTMATCH: ' is not match',
		TXT_MUST_ALPHA: 'must be alphanumeric',
		TXT_MUST_5_CHARACTERS: 'must be >= 5 characters',
		TXT_COUPON_EXP: 'Coupon has been expired',
		TXT_COUPON_MIN_MAX: 'Order must be ',

		// HOME
		HOME_LATEST: 'Latest Product',

		// CART
		CART_TITLE: 'Cart',		
		CART_CHECKOUT: 'CHECKOUT',
		CART_EMPTY: 'Cart is empty',

		// CHECKOUT
		CHECKOUT_TITLE: 'Checkout',
		CHECKOUT_SHIPPING_ADDRESS: 'SHIPPING ADDRESS',
		CHECKOUT_CONFIRM: 'Confirm',


		// CONFIRM
		CONFIRM_TITLE: 'Confirmation',
		CONFIRM_SUMMARY: 'Summary',
		CONFIRM_SHIPCOST: 'Shipping Cost',
		CONFIRM_POLICY: 'Payment Policy',

		// MY ACCOUNT
		ACCOUNT_TITLE: 'My Account',
		ACCOUNT_BILLING: 'Edit Billing Address',
		ACCOUNT_SHIPPING: 'Edit Shipping Address',
		EDIT_ACCOUNT_TITLE: 'Edit Account',

		//EDIT BILLING / SHIPPING
		EDIT_BILLING_TITLE: 'Edit Billing',
		EDIT_SHIPPING_TITLE: 'Edit Shipping',

		// MY ORDER
		ORDER_TITLE: 'My Order',
		ORDER_EMPTY: 'Order is empty',

		// BLOG
		BLOG_TITLE: 'Blog',
		BLOG_DETAIL_TITLE: 'Blog Detail',
		BLOG_EMPTY: 'Blog is empty',

		// WISH
		WISH_TITLE: 'Wishlist',
		WISH_EMPTY: 'Wishlist is empty',
		WISH_PRODUCT_DETAIL: 'Product Detail',
		WISH_REMOVE: 'Product has been removed from Wishlist',

		// PRODUCT
		PRODUCT_TITLE: 'Product',
		PRODUCT_VARIATIONS: 'Product Variations',
		PRODUCT_DESC: 'Product Description',
		PRODUCT_ADDED: 'Product added successfully',

		// CONTACT
		CONTACT_TITLE: 'Contact',
		CONTACT_CALL_US: 'Call Us',
		CONTACT_SEND_EMAIL: 'Send Email',

		// FAQ
		FAQ: 'FAQ',

		// ABOUT
		ABOUT_TITLE: 'About',
		ABOUT_ADDRESS: 'Address',

		// SETTINGS
		SETTINGS_TITLE: 'Settings',
		SETTINGS_SUBTITLE: 'language',

		THANKS_TITLE: 'Thanks',
		THANKS_SUCCESS: 'Congratulations!. <br> Your order is successfull',
		THANKS_ID_ORDER: 'Your id order is',
		THANKS_TOTAL_ORDER: 'Your total order is',
		THANKS_PAID: 'You have paid this order using',
		THANKS_GOTO: 'Manage Orders'
	},
	"hi": {
		// पाठ
		TXT_VIEW_ALL: 'सभी देखें',
		TXT_LOGIN: 'लॉग इन',
		TXT_USERNAME: 'नाम',
		TXT_PASSWORD: 'पासवर्ड',
		TXT_OR: 'या',
		TXT_CREATE_ACCOUNT: 'एक खाता बनाएँ',
		TXT_LOGIN_SIGNUP: 'लॉगइन / पंजीकरण',
		TXT_LOGOUT: 'लॉगआउट',
		TXT_COLLECTIONS: 'संग्रह',
		TXT_LETS_SHOPPING: 'लश्करs एस शॉपिंग ',
		TXT_CANCEL: 'रद्द करें',
		TXT_SEARCH: 'खोज',
		TXT_TYPE_SEARCH: 'अपनी खोज टाइप',
		TXT_SEARCH_RERSULT: 'खोज परिणाम',
		TXT_COUNTRY: 'देश',
		TXT_CLOSE: 'बंद',
		TXT_LOADING: 'लोड हो रहा है',
		TXT_SHOP: 'दुकान',
		TXT_RATE: 'दर',
		TXT_SUBTOTAL: 'आधा',
		TXT_TOTAL: 'कुल',
		TXT_SHIPPING_METHOD: 'शिपिंग विधि',
		TXT_PAYMENT_METHOD: 'भुगतान विधि',
		TXT_ADD_TO_CART: 'गाड़ी में जोड़ें',
		TXT_SOLD: 'बिक',
		TXT_SHARE: 'शेयर',
		TXT_OFF: 'बंद',
		TXT_YES: 'हाँ',
		TXT_NO: 'नहीं',
		TXT_EXIT: 'क्या आप यकीन है कि बाहर निकलने के लिए चाहते हैं',
		TXT_CHECK_CONNECT: 'त्रुटि, अपने कनेक्शन की जाँच करें!',
		TXT_SAVE: 'बचाओ',
		TXT_FIRSTNAME: 'प्रथम नाम',
		TXT_LASTNAME: 'अंतिम नाम',
		TXT_EMAIL: 'ईमेल',
		TXT_PHONE: 'फोन',
		TXT_STREET: 'स्ट्रीट पता',
		TXT_STATE: 'राज्य',
		TXT_ZIP: 'ZIPCODE',
		TXT_TOWN: 'टाउन / शहर',
		TXT_NOTE: 'नोट',
		TXT_ADDRESS2: 'अपार्टमेंट, सूट, आदि इकाई (वैकल्पिक)',
		TXT_STATUS: 'स्थिति',
		TXT_PAY: 'भुगतान',
		TXT_COUPON: 'कूपन कोड (वैकल्पिक)',
		TXT_COUPON_INPUT: 'इनपुट अपने कूपन कोड',
		TXT_SUBMIT: 'सबमिट',
		TXT_COUPON_DISC: 'कूपन डिस्काउंट',
		TXT_COUPON_CANCEL: 'रद्द कूपन',
		TXT_COUPON_NOT_SUPPORT: 'वर्तमान में app से समर्थित नहीं',

		// त्रुटि / अमान्य
		TXT_CANT_EMPTY: 'खाली नहीं हो सकता',
		TXT_INVALID: 'मान्य नहीं है',
		TXT_NOTMATCH: 'मेल नहीं है',
		TXT_MUST_ALPHA: 'अल्फान्यूमेरिक होना चाहिए',
		TXT_MUST_5_CHARACTERS: '> = 5 अक्षरों का होना चाहिए',

		// घर
		HOME_LATEST: 'नवीनतम उत्पाद',

		// डालिए
		Cart_title: 'गाड़ी',
		CART_CHECKOUT: 'Checkout',
		CART_EMPTY: 'कार्ट खाली है',

		// चेक आउट
		CHECKOUT_TITLE: 'चेकआउट',
		CHECKOUT_SHIPPING_ADDRESS: 'शिपिंग पता',
		CHECKOUT_CONFIRM: 'पुष्टि',

		// पुष्टि करें
		CONFIRM_TITLE: 'पुष्टि',
		CONFIRM_SUMMARY: 'सारांश',
		CONFIRM_SHIPCOST: 'नौवहन लागत',
		CONFIRM_POLICY: 'भुगतान नीति',

		// मेरा खाता
		ACCOUNT_TITLE: 'मेरा खाता',
		ACCOUNT_BILLING: 'संपादन बिलिंग पता',
		ACCOUNT_SHIPPING: 'संपादन शिपिंग पता',
		EDIT_ACCOUNT_TITLE: 'संपादन खाता',

		// बिलिंग संपादित करें / शिपिंग
		EDIT_BILLING_TITLE: 'बिलिंग संपादित करें',
		EDIT_SHIPPING_TITLE: 'संपादन शिपिंग',

		// मेरा आदेश
		ORDER_TITLE: 'मेरे आदेश',
		ORDER_EMPTY: 'आदेश खाली है',

		// ब्लॉग
		BLOG_TITLE: 'ब्लॉग',
		BLOG_DETAIL_TITLE: 'ब्लॉग विस्तार',
		BLOG_EMPTY: 'ब्लॉग खाली है',

		// तमन्ना
		WISH_TITLE: 'कार्ट',
		WISH_EMPTY: 'कार्ट खाली है',
		WISH_PRODUCT_DETAIL: 'उत्पाद विवरण',
		WISH_REMOVE: 'उत्पाद कार्ट से हटा दिया गया है',

		// उत्पाद
		PRODUCT_TITLE: 'उत्पाद',
		PRODUCT_VARIATIONS: 'उत्पाद बदलाव',
		PRODUCT_DESC: 'उत्पाद विवरण',
		PRODUCT_ADDED: 'इस उत्पाद को सफलतापूर्वक जोड़ा',

		// संपर्क करें
		CONTACT_TITLE: 'संपर्क',
		CONTACT_CALL_US: 'हमें फोन',
		CONTACT_SEND_EMAIL: 'ईमेल भेजें',

		// सामान्य प्रश्न
		FAQ: 'सामान्य प्रश्न',

		// के बारे में
		ABOUT_TITLE: 'के बारे में',
		ABOUT_ADDRESS: 'पता',

		// सेटिंग्स
		SETTINGS_TITLE: 'सेटिंग',
		SETTINGS_SUBTITLE: 'भाषा',

		THANKS_TITLE: 'धन्यवाद',
		THANKS_SUCCESS: 'बधाई !. <br> आपका आदेश सफल है ',
		THANKS_ID_ORDER: 'अपना आईडी आदेश है',
		THANKS_TOTAL_ORDER: 'अपने कुल आदेश है',
		THANKS_PAID: 'आप का उपयोग कर इस आदेश का भुगतान किया है',
		THANKS_GOTO: 'आदेश का प्रबंधन'
	}
});

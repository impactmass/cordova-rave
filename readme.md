# Cordova Rave

> A Cordova extension to add [Rave](https://www.flutterwave.com) Pay Button into your hybrid apps builds.

This module helps you easily integrate Rave into your Cordova builds. Rave lets you receive payments locally and internationally with no hassles and zero set up fees. Read more about Rave [here](https://www.flutterwave.com). 

### Installation
In your app directory:

`git clone https://github.com/impactmass/cordova-rave.git`

### Setup 
Two steps:

First, `cd cordova-rave && npm start`

This will prompt you for a few config values which you should get from your Rave dashboard. After which it creates a config file in the directory.
You can modify this file later if you need to.

Second, `npm run build`
This ultimately creates a `rave.js` file into your `www` directory. Link to this file in your root index template. 

### Usage
Completing the setup above exposes a `initRavePay` function for you to call to tigger the payment modal.

Basic Usage: `initRavePay(customer_email, amount, onclose, callback)`

The fields you pass here gets merged (with preference) on your app-wide setup done above.
This final config is then passed Rave. See below the full Rave options.

```
PBFPubKey - (Required) Public key of the merchant
txref - (Required) (Unique) Reference
amount - (Required) Amount to charge
currency - (Optional, defaults to NGN) Currency to charge the card in
country - (Optional, defaults to NG)
customer_email - (Required if customer_phone is not passed) Email of the customer
customer_firstname - (Required if customer_email is not passed) Phone number of the customer
customer_lastname -(Optional) Full name of the customer
pay_button_text - (Optional) Text to be displayed on the pay button
custom_title - (Optional) Text to be displayed as the title of the payment modal
custom_description - (Optional) Text to be displayed as a short modal description
redirect_url - (Optional) URL to redirect to when transaction is completed
custom_logo - (Optional) Link to the Logo image
meta-[custom_param] - (Optional) Any other custom data you wish to pass (Without the square braces)
```

### Support :

* For any bugs about this module, please feel free to report here.
* And you are welcome to fork and submit pull requests.

### License :

The code is available under MIT license.



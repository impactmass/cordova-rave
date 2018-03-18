# Cordova Rave

> A Cordova extension to add [Rave](https://www.flutterwave.com) Pay Button into your hybrid apps builds.

This module helps you easily integrate Rave into your Cordova builds. Rave lets you receive payments locally and internationally with no hassles and zero set up fees. Read more about Rave [here](https://www.flutterwave.com).

![e.g](https://cloud.githubusercontent.com/assets/5229321/21958475/be1763c2-daaf-11e6-8df0-75f2e4f0168e.gif)

## Important Issue
[OTP Modal Issue](https://github.com/impactmass/cordova-rave/issues/19): Transactions requiring OTP confirmation opens up in a browser window that leaves the app's context. This is due to the way this package is structured to use only the web layer. A big re-write effort is [in-progress](https://github.com/impactmass/cordova-rave2) to resolve this issue. Please ensure you review this short-coming before using this package.

### Installation
In your app directory:

`npm install cordova-rave`

### Setup
Two steps:

First, `cd node_modules/cordova-rave && npm start`

**NB: If you get a warning of outdated npm dependency/DOS issue, please [read this](https://github.com/impactmass/cordova-rave/issues/11#issuecomment-293965034)**

This step will prompt you for a few config values which you should get from your Rave dashboard; except the last prompt (liveMode).
The liveMode value either `y` or `n` used to change the Rave script used in your build from test url to live url. If you've signed up
here `https://ravepay.co`, enter `y` for this option.

Completing this step creates a config file in the directory. You can modify this file later if you need to.

Second, `npm run build`
This ultimately creates a `rave.js` file into your `www` directory. Link to this file in your root index template.
If you modify your config.json at anytime, you need to run the build again.

### Usage
Completing the setup above exposes a `initRavePay` function for you to call to tigger the payment modal.

Basic Usage: `initRavePay(options)`
* options.customer_email - (Required if customer_phone is not passed) Email of the customer
* txref - Transaction Reference (Required) (Unique per transaction)
* options.amount (if not passed, the Rave modal shows amount input)
* options.onclose (function) - Set behaviour onclose of the modal
* options.callback (function) - Set how you want to respond after payment is done

The fields you pass here gets merged (with preference) on your app-wide setup done above.
This final config is then passed Rave. See below more Rave options.

```

PBFPubKey - (Required) Public key of the merchant
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

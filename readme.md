# Project Title

 A Cordova extension to add [Rave](https://www.flutterwave.com) Pay Button into your hybrid apps builds.

 ![e.g](https://cloud.githubusercontent.com/assets/5229321/21958475/be1763c2-daaf-11e6-8df0-75f2e4f0168e.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Ensure that you have signed up for a Rave account. If not, go [here](https://www.rave.flutterwave.com) to signup for a ```live``` account or [here](https://www.ravesandbox.flutterwave.com) to signup for a ```test``` account.

Ensure that you have ```nodejs``` and ```npm``` installed. If download Nodejs from [here](https://nodejs.org) and install it.
> Installing ```nodejs``` also install ```npm``` with it.

Once you have ```nodejs``` and ```npm``` installed, proceed install cordova using the command below

```
npm i -g cordova
```
**NOTE:** if you are a MAC or Linux user, you might need to append ```sudo``` before ```npm i -g cordova``` __i.e__
```
sudo npm i -g cordova
```

### Installing

The following steps will get you up and running.

1. Create a sample cordova project in your favorite directory

    **NOTE:** You can skip this step if you already have a cordova project
    ```
    cordova create hello com.example.hello HelloWorld
    ```
    *This command will create the required directory structure for your cordova app. By default, the cordova create script generates a skeletal web-based application whose home page is the project's www/index.html file.*

2. Test your sample project to be sure everything is working fine.

    *We would be testing in the browser environment. To test on other environments check out the cordova documentation on [android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) and [ios](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html).*
    Run the following commands in order
    ```
    cd hello
    cordova platform add browser
    cordova run browser
    ```
    If everything works out. Life is good. **Moving On**

3. Install Rave
    - Navigate into your app directory (if you aren't already there). If you are using the same directory as this documentation, do ```cd hello```
    - Run the following commands in order
    ```
    npm install cordova-rave
    cd node_modules/cordova-rave && npm start 
    ```
    **NB: If you get a warning of outdated npm dependency/DOS issue, please [read this](https://github.com/impactmass/cordova-rave/issues/11#issuecomment-293965034)**

    **NOTE:** Once the second command installs all the necessary dependencies, you will be prompted to enter some information. An example is shown below

    ```
    prompt: PBFPubKey:  FLWPUBK-98765445678900987698765567-X

    prompt: amount:  1

    prompt: customer_email:  user@user.com

    prompt: currency:  NGN

    prompt: country:  Nigeria

    prompt: custom_title:  Cordovey

    prompt: custom_description:  Testing

    prompt: redirect_url:  https://yourredirecturl.com

    prompt: payment_plan_id:  1000

    prompt: payment_options:

    prompt: subaccounts:  []

    prompt: custom_logo: logo.png

    prompt: liveMode:  yes
    ```

    >PBFPubKey: This is your Rave public key and can be gotten from your rave dashboard

    >amount: The amount you want to charge your customers. If omitted, A customer will be able to specify the amount

    >customer_email: this is the merchant's email address

    >currency: The currency you want to charge your customers in. If omitted, it defaults to NGN

    >country: The merchant's country. Defaults to Nigeria

    >custom_title: A title for your payment

    >custom_description: Text describing what your customers are paying for
    
    >redirect_url: This is the url that rave sends the response of your transaction to. It should be configured to handle a get request. If not supplied, no response will be sent from Rave

    >payment_plan_id: If you want to bill your customers recurrently, pass in the payment plan id here. It must be an integer

    >payment_options: This allows you select the payment option you want for your users.

    >subaccounts: This is an array of objects containing the subaccount IDs to split the payment into.

    >custom_logo: Link to the Logo image.

    >liveMode: This determines if you want to use the live apis (yes) or the test apis (no). It is required

4. Generate rave.js.
    While you're still in ```node_modules/cordova-rave``` directory, run:
    ```
    npm run build
    ```
    This ultimately creates a rave.js file into your www directory.

5. Link rave.js file to index.html in www directory

    Add the following script tag just before your closing script tag
    ```
    <script type="text/javascript" src="rave.js"></script>
    ```
    >Voila!!!! With rave.js now linked, you can call the function below (as you please), passing in an object containing the properties listed above. An example is shown below
    ```
    initRavePay({
        'PBFPubKey': 'FLWPUBK-54567898978675645342334567-X',
        'amount': '0',
        'currency': 'NGN',
        'country': 'NG',
        'customer_email': 'user@example.com',
        'customer_firstname': 'Jon',
        'customer_lastname': 'Snow',
        'pay_button_text': 'Pay now',
        'custom_title': '',
        'custom_description': '',
        'redirect_url': 'https://www.google.com',
        'custom_logo': '',
        'txref': 'CD-102297-RV098299'
    });
    ```
    Below is an example of what your index.html may look like

    ```
    <!DOCTYPE html>
    <!--
        Licensed to the Apache Software Foundation (ASF) under one
        or more contributor license agreements.  See the NOTICE file
        distributed with this work for additional information
        regarding copyright ownership.  The ASF licenses this file
        to you under the Apache License, Version 2.0 (the
        "License"); you may not use this file except in compliance
        with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing,
        software distributed under the License is distributed on an
        "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, either express or implied.  See the License for the
        specific language governing permissions and limitations
        under the License.
    -->
    <html>
        <head>
            <!--
            Customize this policy to fit your own app's needs. For more guidance, see:
                https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy
            Some notes:
                * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
                * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
                * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                    * Enable inline JS: add 'unsafe-inline' to default-src
            -->
            <meta http-equiv="Content-Security-Policy" content="font-src 'self' data:; img-src * data:; default-src gap://ready file://* *; script-src 'self' 'unsafe-inline' 'unsafe-eval' * ; style-src 'self' 'unsafe-inline' *">
            <meta name="format-detection" content="telephone=no">
            <meta name="msapplication-tap-highlight" content="no">
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
            <link rel="stylesheet" type="text/css" href="css/index.css">
            <title>Hello World</title>
        </head>
        <body>
            <div class="app">
                <h1>Apache Cordova</h1>
                <div id="deviceready" class="blink">
                    <p class="event listening">Connecting to Device</p>
                    <p class="event received">Device is Ready</p>
                </div>
                <button class="btn btn-primary" type="button" onclick="pay()">Pay Now</button>
                </div>
                <script type="text/javascript" src="cordova.js"></script>
                <script type="text/javascript" src="js/index.js"></script>
                <script type="text/javascript" src="rave.js"></script>
                <script>
                    function pay(){
                        initRavePay({
                            'PBFPubKey': 'FLWPUBK-ba0a57153f497c03bf34a9e296aa9439-X',
                            'amount': '1',
                            'currency': 'NGN',
                            'country': 'NG',
                            'customer_email': 'kwakujosh@gmail.com',
                            'customer_firstname': 'Jon',
                            'customer_lastname': 'Snow',
                            'pay_button_text': '',
                            'custom_title': '',
                            'custom_description': '',
                            'redirect_url': 'https://agile-journey-11424.herokuapp.com',
                            'custom_logo': '',
                            'txref': 'CD-102297-RV098299'
                        });
                    }
                </script>
        </body>
    </html>
    ```

6. Run app

    Before you test the app. Cordova doesn't allow navigation to external urls inside the app by default hence you may need to:
    - Add ```<allow-navigation href="*">``` to your config.xml
    - Replace the meta tag that sets your ```Content-Security-Policy``` with this
    ```
    <meta http-equiv="Content-Security-Policy" content="font-src 'self' data:; img-src * data:; default-src gap://ready file://* *; script-src 'self' 'unsafe-inline' 'unsafe-eval' * ; style-src 'self' 'unsafe-inline' *">
    ```
    Now run:
    ```
    cordova run browser
    ```

## Deployment
Here are a few things to note
1. If you set ```liveMode``` to ```no``` then ensure that you're using your rave sandbox api keys i.e public and secret key
2. If you set ```liveMode``` to ```yes``` then ensure that you're using your rave live api keys i.e public and secret key

### Support :

* For any bugs about this module, please feel free to report here.
* And you are welcome to fork and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



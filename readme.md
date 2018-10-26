# Cordova Rave

 A Cordova extension to add [Rave](https://www.flutterwave.com) Pay Button into your hybrid apps builds.

 ![e.g](https://cloud.githubusercontent.com/assets/5229321/21958475/be1763c2-daaf-11e6-8df0-75f2e4f0168e.gif)


**UPDATE (FOR IOS)**

If you are developing for IOS, ensure that the version of Xcode you are running is **10.0** (the latest version). Using a lower version causes the build to fail.

## Getting Started

These instructions will get you up and running on your local machine for development and testing purposes. See Deployment section for notes on how to deploy the project on a live system.

### Prerequisites
1. Ensure that you have signed up for a Rave account. If not, go [here](https://rave.flutterwave.com) to sign up for a `live` account or [here](https://ravesandbox.flutterwave.com) to sign up for a `test` account.

2. Ensure that you have `node` and `npm` installed. If not, visit [nodejs.org](https://nodejs.org) for instructions on how to install for your specific environment. Installing `node` will also install `npm`.

3. As this package is for Cordova and Cordova-based projects, ensure you all your required dependencies installed. e.g [Cordova](https://cordova.apache.org/#getstarted).

### Installing

The following steps will get you up and running.

1. In the root of your project, run `npm install cordova-rave`

2. Then: `cd node_modules/cordova-rave && npm start`
Once the second command installs all the necessary dependencies, you will be prompted to enter some information. An example is shown below:

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

    > PBFPubKey: This is your Rave public key and can be gotten from your Rave dashboard

    > amount: The amount you want to charge your customers. You can omit this and set an amount when calling the pay button (see below)

    > customer_email: This is the customer's email address. You can omit this and set a value when calling the pay button (see below)

    > currency: The currency you want to charge your customers in. If omitted, it defaults to NGN

    > country: The merchant's country. Defaults to Nigeria

    > custom_title: Text to be displayed as the title of the payment modal

    > custom_description: Text describing what your customers are paying for

    > redirect_url: This is the url that rave sends the response of your transaction to. It should be configured to handle a get request. If not supplied, no response will be sent from Rave

    > payment_plan_id: If you want to bill your customers recurrently, pass in the payment plan id here. It must be an integer

    > payment_options: This allows you select the payment options you want for your users.

    > subaccounts: This is an array of objects containing the subaccount IDs to split the payment into.

    > custom_logo: Link to the Logo image.

    > liveMode: This determines if you want to use the Live APIs (yes) or the Test APIs (no). It is required

3. Generate rave.js. While you're still in the `node_modules/cordova-rave` directory, run:
    ```
    npm run build
    ```
    This ultimately creates a `rave.js` file into your www directory.

4. Link the rave.js file to index.html in www directory

    Add the following script tag just before your closing script tag
    ```
    <script type="text/javascript" src="rave.js"></script>
    ```
    > With rave.js now linked, you can call the function below (as you please), passing in an object containing the properties for that specific transactionn. An example is shown below
    ```
    initRavePay({
        'amount': 5000,
        'customer_email': 'user@example.com',
        'customer_firstname': 'Jon',
        'customer_lastname': 'Snow',
        'pay_button_text': 'Pay now',
        'redirect_url': 'https://www.example.com/payment-successful',
        'txref': 'CD-102297-RV098299'
    });
    ```

## Deployment
Here are a few things to note
1. If you set `liveMode` to `no` then ensure that you're using your Rave Sandbox API key i.e public key
2. If you set `liveMode` to `yes` then ensure that you're using your Rave Live API keys

## Support

* For any bugs (and questions) about this module, please feel free to report here.
* And you are welcome to fork and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



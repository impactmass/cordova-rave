# Project Title

 A Cordova extension to add [Rave](https://www.flutterwave.com) Pay Button into your hybrid apps builds.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Ensure that you have ```nodejs``` and ```npm``` installed. If download Nodejs from [here](https://nodejs.org) and install it.
> Installing ```nodejs``` also install npm with it.

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
## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


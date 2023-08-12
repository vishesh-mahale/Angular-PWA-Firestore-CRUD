# Pizza-Delivery
Progressive Web Application using Angular 16.

This Angular app is a progressive web app that has the below Features:
1. Runs offline
2. Push Notification feature
3. Add to Home Screen (Installs on your mobile as a native app like any other Android app).


## Setup and Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

1. **Clone the repo from GitHub**
   ```sh
   git clone  https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD.git
   cd Angular-PWA-Firestore-CRUD
   npm install
   ```

2.  **Take Production Build**
 ```sh
  npm run build-deploy
  ```
   The above command will build the application and it will also deploy your application to Firebase.


## NOTE:
The Server side code(NodeJS, ExpressJS, Firebase cloud messaging, Firestore) for supporting this Angular App is available at  https://github.com/vishesh-mahale/PWA-Firestore-CRUD-NodeJs-ExpressJS. Please refer to the README.md file of the server-side code to access the Rest APIs.

## Goal

This project is mainly aimed to Showcase the feature of PWA using the powerful framework Angular. 
It has also used Node.JS, ExpressJS, CRUD, Firestore(Firebase), and REST APIs.

## Tech Stack
 	1. Angular 16
	2. Node.JS  
	3. ExpressJS
	4. REST APIs
	5. Firebase: Firestore
    6. Firebase cloud messaging
    7. Chrome Browser
    8. Postman
    9. VS code

## Comments
The Pizza-Delivery App can be reused in any Angular Project as a Template that needs PWA Features.

## Screenshots

**How to use the Application:**
Open the application in your browser https://pwa-app-1234.web.app/

**Add to Home screen Feature:**
Once you open the application in your browser you will get a notification asking for the installation of the web app on your device. 
![Screenshot_2023-08-12-18-28-46-095_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/d6c27047-b2af-4064-99b2-170c86029f99)

Once you click on Install it will again ask you for reconfirmation to Install the PWA app.
![Screenshot_2023-08-12-18-29-29-893_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/7bf6ffed-f42a-4a4e-af4b-021d4c80ec6b)

Once click on Install it will install the app and then check for a security scan and ask you to open an application.
![Screenshot_2023-08-12-18-29-47-327_com miui global packageinstaller](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/2bf7d356-8119-4e2d-9efa-3283ca566a20)

Upon clicking on open the will start like below
![Screenshot_2023-08-12-18-29-56-489_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/6bc4aab7-78b8-499d-aa32-cf98e0a003f2)
![Screenshot_2023-08-12-18-29-36-587_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/4aaf027d-f1e1-407a-b122-8dad5f354207)

Now you can close all the opened applications and then go to the place where all of your Android or IOS app is present, you will find our Pizza-Delivery app also in the list along with other apps. Also, you will find the app Pizza-Delivery on your Home screen.
![InkedScreenshot_2023-08-12-18-31-30-611_com miui home](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/6e695a7c-3bc1-4640-b594-d5618c7f3a25)

We have accomplished the Add to home screen feature.

**Offline Feature:**
Turn off your Mobile and Wifi data and try refreshing the app:
![Screenshot_2023-08-12-18-31-00-829_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/9aefa8ed-473b-42bc-b7a7-57e1e231e109)

You will notice, you can still see the app working and the Pizza list that was coming from API is still available(Freshness Feature).
As we are using the strategy as Freshness, the API data is getting cached in our browser every time whenever we make an API call, and in the next calls, if the server is not responding then we are displaying the data from the cache.
In the ngsw-config.json file, we have specified the strategy.
We have accomplished the Offline support feature of the PWA app.

**Push Notifications Feature:**
Click on the Notification Icon in the top-right corner of the app.
![Screenshot_2023-08-12-18-29-36-587_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/50ad9a80-180b-44ad-aa33-3c1d8e8e2a20)

It will ask you to Enter your name which is an optional step. This is just to remember the user's name so that in the future we can serve the user better.
![Screenshot_2023-08-12-18-32-10-786_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/3dfed9d0-3970-4c69-91d9-a68fa9b0f95e)


It will ask you for final confirmation
![Screenshot_2023-08-12-18-32-17-332_com google android permissioncontroller](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/ceaebe6e-9751-4231-9afb-4240d7999d98)

Upon clicking on Allow it will give you the below message:
![Screenshot_2023-08-12-18-32-24-221_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/71d07664-7261-4b4a-9b6c-bd0082fb0bd7)

Now the app can receive the Pust Notifications like below:
![Screenshot_2023-08-12-18-34-05-071_com miui home](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/2a9b8c4d-65e6-4f42-9699-f15f85f39cd3)

Upon clicking on the notification again the installed native app will open like the below:
![Screenshot_2023-08-12-18-34-11-907_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/fd75ee19-a0bb-4cbd-8c8d-cb58eb997600)
![Screenshot_2023-08-12-18-29-36-587_com android chrome](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/6131d592-57ea-47bf-b120-39f7a2eea587)

**Code Structure:**
![image](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/8cbbcf6d-6f10-44ed-b950-1ed591ede325)
![image](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/11e34cea-40eb-4fdc-aebe-12e10c3d3f17)

**POSTMAN APIs:**
You can get complete details about the APIs here https://github.com/vishesh-mahale/PWA-Firestore-CRUD-NodeJs-ExpressJS 
![image](https://github.com/vishesh-mahale/Angular-PWA-Firestore-CRUD/assets/55619589/c7d56c4d-3bee-4788-b20e-d814ca8f97a3)

## For generating manifest files and icons use:
https://manifest-gen.netlify.app/

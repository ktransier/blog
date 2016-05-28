---
published: true
layout: post
title: "Lessons learned building a prototype iOS donation app with ApplePay"
category: blog
image_url: null
---

<img src="/images/donate-for-iphone-3.png" class="inline-image">

On November 8th, I made the initial commit for Donate for iPhone, my first app for iOS. The idea was to build an app that enabled donors to give to a hand-selected list of non-profits through ApplePay.

I find that when learning a new language or platform, it's best to start with a recommended set of lessons and then jump immediately into a project you're interested in building. A project aiming to solve an interesting problem keeps a developer motivated and immediately thrusts you into real-world development challenges. I started with the series of lessons through Bitfountain's [The Complete iOS 8 Course with Swift](http://bitfountain.io/course/complete-ios8/), an up-to-date series using Swift and Xcode 6.

Behind the scenes, ApplePay requires a third-party payment processor to handle the actual charge and thankfully Stripe was a launch partner. When ApplePay is triggered on the device, the user uses TouchID to confirm the payment and then a token is generated. You take this token and pass it to an external API that you've set up to handle charges. After successfully charging or rejecting the card through Stripe's API, you return a JSON response to the app, close ApplePay and display a relevent success or error message.

In the course of the project I learned:

- IBOutlets and IBActions, using Assistant Editor with Storyboards
- Autolayout, including autolayout within a scrollview
- Static and dynamic tableviews
- cellForRowAtIndexPath, didSelectRowAtIndexPath, numberOfRowsInSection
- Passing data to controllers using seques
- ApplePay + Stripe integration, including PaymentKit integration
- Swift-Objective-C bridging header
- Creating smooth tableview scrolling with SDWebImage for image calling and caching
- Moving views up to enable seeing textfield and keyboard simultaneously with TPKeyboardAvoiding
- In-app notifications with TSMessages
- UIWebView, including passing and loading URL, back, forward, refresh and stop controls
- Building a LaunchScreen.xib
- Interacting with a Rails API using AFNetworking
- Installing and using Cocoapods
- Creating app archive and uploading build to iTunesConnect
- Setting up screenshots, description, app info and submitting to TestFlight Beta Review
- Adding pull-to-refresh with UIRefreshControl
- Changing the UINavigationBar background color, text color, and transparency
Creating round images with clipsToBounds
- Creating field validations for email and dollar amounts
- Using Images.xcassets with 1x,2x,3x assets

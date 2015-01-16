---
published: true
layout: post
title: "Lessons learned building a prototype iOS donation app using ApplePay "
category: blog
image_url: null
---

On November 8th, I made the initial commit for Donate for iPhone, my first app for iOS. The idea was to build an app that enabled donors to give to a hand-selected list of non-profits through ApplePay.

I find that when learning a new language or platform, it's best to start with a recommended set of lessons and then jump immediately into a project you're interested in building. A project aiming to solve an interesting problem keeps a developer motivated and immediately thrusts you into real-world development challenges. I started with the series of lessons through Bitfountain's [The Complete iOS 8 Course with Swift](http://bitfountain.io/course/complete-ios8/), an incredibly up-to-date series using Swift and Xcode 6.

Early on in the project, I switched from Swift to Objective-C. This was due to a bug in Stripe's iOS library that prevented loading the library in a Swift project. This has since been [fixed](http://stackoverflow.com/a/26952273/4233556) and the library updated to 2.2.2, but in the meantime, the bug moved me to start solving probems with the project with Objective-C, which was a huge win in the longterm. As [outlined](http://www.bignerdranch.com/blog/ios-developers-need-to-know-objective-c/) by Big Nerd Ranch, future iOS developers need a strong background in Objective-C moving forward in order to interact with existing codebases, understand underlying API's and so on. Translating between Swift and Obj-C has been extremely useful in stretching my understanding of design patterns in iOS.

Working on developing for ApplePay was a steep and very rewarding learning curve. Behind the scenes, ApplePay requires a third-party payment processor to handle the actual charge and thankfully Stripe was a launch partner. When ApplePay is triggered on the device, the user uses TouchID to confirm the payment and then a token is generated. You take this token and pass it to an external API that you've set up to handle charges. After successfully charging or rejecting the card through Stripe's API, you return a JSON response to the app, close ApplePay and display a relevent success or error message. It's a really clean process that I hope to use in other future projects.

Going into this project, I knew that there could possibly be challenges getting through the App Store approval process, especially since ApplePay only became officially available in October. However, what I didn't realize was that Apple expressly forbids donations to be made in-app and developers are forced to kick users to Safari to donate to any non-profit. After getting the app to a good enough state that I felt comfortable submitting for TestFlight Beta Review, I uploaded a build and hit submit. The next day I received an email from the App Store review team. "Your app has been rejected for distribution through Apple’s TestFlight Program because it does not comply with one or more App Store Review Guidelines: 21.2: The collection of charitable donations must be done via a web site in Safari or an SMS."

While I strongly disagree with this policy, this was entirely a blunder on my part. What I come to learn after further research is that this has been a significant problem for nonprofits over the last four years, with a [New York Times article](http://www.nytimes.com/2010/12/09/technology/09charity.html) and a high-profile rejection of Paypal, [who were forced by Apple](http://gizmodo.com/5703765/why-does-apple-make-being-a-charitable-app-so-hard) to remove their in-app donation feature. There's no official reason for why Apple has chosen to implement this policy and it's such a incredible lost opportunity for non-profits to make their donation flow radically more efficient. I really hope that Apple reverses this in the future, as it would appear vetting of 501c3's would be a simple matter of providing a copy of their EIN's if they're concerned about ensuring donations are to legitimate NGO's.

The most important lesson here is obvious: always read the entire [Apple Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) before starting a project. This isn't the web - you have to work within very specific constraints dictated by a single company. If you're doing something that would push the boundaries of any of the guidelines, do a search to see if anyone else has had difficulty with the review process. Get a prototype up and running fast, then submit to TestFlight Beta Review, to catch any early problems with App Store Guidelines.

This doesn't mean the project was in any way a wasted effort. I learned an incredible amount in the making of the app and I'm still eager to work on other ideas I've been exploring. In the course of the project I learned:
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
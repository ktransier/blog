---
published: false
layout: post
title: The Rise and Fall of Donate for iPhone
category: blog
---

On November 8th, I made the initial git commit for Donate for iPhone, my first app for iOS. The idea was to build an app that enabled donors to give to a hand-selected list of non-profits through ApplePay.

I find that when learning a new language or platform, it's best to start with a simple tutorial and then jump immediately into a project you're interested in building. It keeps you motivated and immediately thrusts you into real-world challenges. I started with the series of lessons through Bitfountain's [The Complete iOS 8 Course with Swift](http://bitfountain.io/course/complete-ios8/) an incredibly up-to-date series using Swift and Xcode 6. When learning iOS, it's essential to start tutorials

Early on in the project, I switched from Swift to Objective-C and started over from scratch. This was due to a bug in Stripe's iOS library preventing loading the library in a Swift project. This has since been fixed, but in the meantime, it got me working on the project with Objective-C, which was a huge win in the longterm. As [outlined](http://www.bignerdranch.com/blog/ios-developers-need-to-know-objective-c/) by Big Nerd Ranch, future iOS developers need a strong background in Objective C.

Going into this project, I knew that there could possibly be challenges getting through the App Store approval process, especially since ApplePay only became officially available in October. However, I failed to consider that the core ability of the app would be against App Store guidelines. After getting the app to a good enough state that I felt comfortable submitting for TestFlight Beta Review, I uploading a build and hit submit. The next day I received a crushing email from the App Store review team. "Your app has been rejected for distribution through Apple’s TestFlight Program because it does not comply with one or more App Store Review Guidelines: 21.2: The collection of charitable donations must be done via a web site in Safari or an SMS."

While I strongly disagree with this policy, this was entirely a blunder on my part. What I come to learn after further research is that this has been a significant problem for nonprofits over the last four years, with a [New York Times article](http://www.nytimes.com/2010/12/09/technology/09charity.html) and a high-profile company, Paypal, [being forced by Apple](http://gizmodo.com/5703765/why-does-apple-make-being-a-charitable-app-so-hard) to remove their in-app donation policy.

Always read the entire [Apple Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) before starting a project. If you're doing something that would push the boundaries of any of the guidelines, do a search to see if anyone else has had difficulty with the review process. Get a prototype up and running fast, then submit to TestFlight Beta Review, to catch any early problems with App Store Guidelines


- [IBOutlets and IBActions](http://nshipster.com/ibaction-iboutlet-iboutletcollection/), using Assistant Editor with Storyboards
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
- Creating field validations for email and dollor amounts
- Using Images.xcassets, with 1x,2x,3x assets



---
published: true
layout: post
title:  Needed improvements in AWS Cognito's iOS SDK
category: blog
image_url: null
---

For an iOS project I've been building recently, I decided to start with [Cognito](https://aws-amplify.github.io/docs/ios/authentication) as the authentication solution. There's a lot going for Cognito, including the free tier up to 50,000 active users, hosted UI libraries and the ability to leverage AWS's security in storing passwords.

However, my experience with Cognito has given me a lot of pause around using it for future projects and the libraries need to evolve before I could recommend it for building iOS authentication flows. Here are the primary challenges that need to be solved in my experience:

__1\. Cognito does not automatically sign in the user after they've signed up__

This results in a frustrating UX where the user has to go through a minimum of 3 screens (sign up, email confirmation and sign in) in order to create an account and is forced to re-enter their credentials. Furthermore this appears to be encouraging the practice of developers storing the user's password client-side to pass through to the confirmation screen and sign in the user in the background. [(Github issue)](https://github.com/aws-amplify/aws-sdk-ios/issues/782)

__2\. The hosted UI requires the display of username and phone number fields on sign up__

The username is harmless, I think the real issue is the phone number. Collecting a phone number, particularly without any explanation of why that phone number is being collected, is going to be very off-putting to potential users and will harm conversion. [(Github issue)](https://github.com/aws-amplify/aws-sdk-ios/issues/1222) 

__3\. There is no way to link to a privacy policy or terms of use on the hosted UI__

This is something a company of almost any size will require within their sign up flow to comply with GDPR/legal requirements. [(Github issue)](https://github.com/aws-amplify/aws-sdk-ios/issues/1407) 

I wanted to post this to save fellow iOS devs the pain of integration if some of these items are not going to fly for their applications. Any feedback on docs I may have missed or additional context would be really helpful, but these all appear to be outstanding issues and it's unclear where they fall on the Cognito roadmap.



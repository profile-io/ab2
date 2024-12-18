# Profile.io: privacy preserving identity, nationality and age verification 

The Profile.io team are building an open platform and network for individuals and organisations to verify themselves and their online presence, to unlock trusted transactions, including privacy preserving stablecoin payments between users and organisations.

Using a profile.io user's indentity verification KYC results to prove user's adult verification and/or nationality, gender, any other user's personal information without revealing personal data by using ~~Aztec Connect~~ Noir circuit ZKP. Scoping service for third parties to verify such information privately, either through profile.io/verify or their own user flows (eg. exploring potentially using Frames.js).


## Challenge Selection

- [ ] ZKEmail Guardian
- [x] Social Cipher

**Note**: You can change which challenges you've selected during the competition if you'd like. You are not bound by your choices or descriptions entered during the one week check-in.

## Team information

[Profile.io](https://www.profile.io/)

## Technical Approach

We'd like to use Aztec ZKP for proving adult verification (or any other user info) on our app.
~~We have already smart contract that mints NFTs on Polygon mainnet~~ 

The plan is to use ZKP and Aztec Note when user inputs his/her identity including age then the user can use it when the age verification is required without revealing details.
By default, all user information is private. When a verifier request proof, the user can select data that want to reveal and send. Only the verifier can open and see the requested data.

Here is the user flow:
1. In FE (frontend), a user inputs his birthdate (ex: 20/04/1995)
1. The FE calls Aztec contract to mint a private NFT with the Note which has his birthdate (at this step, PXE creates ZKP when a private function is called on the Aztec contract if I am understood properly)
1. Now the user owns a private NFT that has a note
1. Another user (verifier) wants to verify if the user is an adult or not. So the verifier sends an age-verification-request with his address.
1. The user doesn't want to reveal his exact age but can prove whether he is adult or not by ~~using ZKP (or Note?)~~ sending a note that is encrypted with verifier's address.
1. There is a "request age-verification" button on the UI and when verifier clicks that button -> Calling Aztec contract to request the user's age verification -> If the user accept the request -> FE displays whether the user is an adult or not on the UI.


## Some technical questions
a. At above step 2, the created Note is an actual ZKP? I am confused the relation between Note and ZKP? 

b. At above step 6, can Aztec contract retrieve age-NFT data without the NFT owner's permission? Do I need the "Witness"?

c. At above step 6, if Aztec contract can retrieve age-NFT data (birthdate), can the Aztec contract process calculation of the Note data? For example, `isUserAdult(note)`, `isUserOver50(note)`, `isUserOver70(note)`.

## Expected Outcomes
* A user should be able to add personal encrypted data and only the user can see the data by default.

* The user should be able to mint NFTs that contains encrypted personal data

* A verifier can request to personal information of users such as age, nationalities, gender, etc (For the first implementation, whether user is over 18 years or not).

* The user can accept the request and send note that only can be opened by the verifier.

Providing a quick age verification feature. 

## Lessons Learned (For Submission)

- What are the most important takeaways from your project?

As a newbie in Aztec world, understanding its concept and implementation were such a challenge. 
I'd say understanding how the "privacy" is protected is the key. Many logics are executed in PXE which is in user's device and the proof (ZKP) will be posted 
to the on-chain via sequencer.

The note is another important thing I have learnt. I believe it has lots of potentials since it can be open and close (private/public) by owner.

I am still discovering Aztec wallet/account. Not sure how to manage wallet/account is the best way. Hopefully I will figure it out soon.

- Are there any patterns or best practices that you've learned that would be useful for other projects?

It's not any patterns or best practices but the 'aztec-packages' is very useful source to learn about real Aztec implementations.

- Highlight reusable code patterns, key code snippets, and best practices - what are some of the ‘lego bricks’ you’ve built, and how could someone else best use them?

This repo is aming for specific situation. Like minting a NFT with a note that contains user's personal information.
However, this can be useful source for interactions between the frontend and Aztec contract.

## Project Links (For Submission)

* The code is in this repo
* We are looking for an opportunity to integrate Aztec contract with [Profile.io](https://www.profile.io)

## Video Demo (For Submission)

[Demo link](https://www.youtube.com/watch?v=BBuhFJGYk50)

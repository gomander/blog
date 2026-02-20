---
title: 'Wheel of Names leaving Discord'
description: 'Gunnar goes over the reasoning for the decision, and the efforts made to help users of the bot transition to the website and API.'
---

# Wheel of Names is leaving Discord

Last edited 2026.02.20

[Back home](/)

---

Wheel of Names will be leaving Discord in 2026. This includes shutting down our server where we gathered feedback and offered support, as well as the Wheel of Names Discord bot, since we can't develop for a platform we're no longer on.

First, I will go over what is happening, what options bot users have, and the short reason why. Continue reading to learn way more than you ever wanted to know about the development of the bot.

## The timeline

At the end of March, the bot will go private. That means that it will no longer be possible to add the bot to servers. It will continue to function like normal in servers that it's already in.

At the end of June, both the Wheel of Names Discord server and bot will be shutting down permanently.

## Options available users of the bot

For most people, we recommend using [our website](https://wheelofnames.com) to spin your wheels from July onward. If you want to show your spin to others, we recommend using a lightweight screen-recording app or Discord's built-in screenshare in voice chats.

For communities that need the Discord-specific features of the bot, like spinning wheels with members of your server or users who reacted to a message, we recommend checking our [this sample Discord.js bot](https://github.com/gomander/discordjs-sample-wheel-bot) that uses [our API](https://wheelofnames.com/api-doc) to mimic the functionality of our bot. I've also open-sourced a large portion of [our bot's code](https://github.com/gomander/wheel-of-names-discord-bot), though I would not recommend using it for anything other than inspiration due to the many particularities of its stack and structure.

We'll be keeping our server open until the end of June, so if you have a use-case that isn't being adequately satisfied by our website and/or API, please tell us about it! We can't make any promises, but we would like to make this transition as easy as possible.

## Why this is being done

Wheel of Names is leaving Discord because of concerns about the direction of the platform with the upcoming IPO in March and the policy changes that have been made to support it. We have made the judgement that we cannot rely upon the platform anymore.

---

## The bit where I overshare

I originally created the Wheel of Names Discord bot almost four years ago due to overwhelming requests from our community. I've poured several hundreds of hours of my life into developing it. I'm really proud of my work and all the advanced technical issues I had to overcome to make it possible, including learning a new language to write custom rendering libraries that are faster than anything else that exists in the ecosystem. So why is it being shut down?

We've been running the bot for free, with no monetization whatsoever, since its inception. Every second that the bot takes to respond to your commands is a second that our servers are running at 100% CPU usage, rendering the spinning animations as quickly as they possibly can. Hosting this bot isn't exactly free. Additionally, for every hour I've spent working on the bot, that's an hour I could (and should) have been working on the website, where we actually do earn anything at all.

With that said, money isn't the real reason that we're shutting the bot down. At best, it's a justification. The real reason is the continued enshittification of Discord as a platform. With their upcoming IPO in March, they will have fully transitioned from being a platform that exists for the sake of people, to being entirely beholden to shareholders, legally obligated to increase profits at all costs.

Discord has been intending to go public or to sell to a larger company for years, and it's been obvious from their business decisions for a long time that they want to make their company as attractive as possible for investors. However, the recent policy shift to roll out "age verification" systems globally is the biggest anti-consumer move they've made yet, and clearly signals their intent to extract as much value as they can from every single individual that uses their platform. They claim that this increased data collection doesn't mean that they'll start selling your information, but as soon as investors demand it or new leadership takes over, that promise will mean nothing. All they see is a big vault of user data that is worth a lot of money.

That's not to mention the privacy and security implications of gathering all this personally-identifiable information. Discord has already leaked sensitive documents of somewhere between 70 000 and 2 100 000 users in 2025, when the system was only active in the UK and Australia. Once this rolls out globally, the number of users at risk will increase dramatically.

All of this is completely antithetical to our values at Wheel of Names. We've always put our users first. We unfortunately do have to run ads to keep the lights on, as much as I hate it on a personal level. However, we've always kept a firm stance that our users should be able to close the ads, and are even allowed to use ad-blockers without those annoying "please turn off your ad-blocker" boxes. Every time one of our advertising partners has tried to push for more monetization, we respond with a strong no. We've changed advertising partners multiple times over them not respecting our commitment to our users.

## Conclusion

It's truly sad to see yet another beloved platform sell out its users in the pursuit of infinite growth. Cancel your Nitro. If you can, convince your friends to move to another platform and delete your Discord account. It's the only way to teach them that their greed has consequences.

---

[Back home](/)

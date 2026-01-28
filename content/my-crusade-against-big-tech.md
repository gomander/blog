---
title: 'A crusade against big tech'
description: 'Gunnar goes over all the big tech products he has swapped out for more appealing alternatives.'
---

# My crusade against big tech

Last edited 2026.01.28

[Back home](/)

---

It was a great couple decades, growing up in Silicon Valley and seeing all the big tech companies around me flourishing and striving for greatness. Unfortunately, as I've grown and matured, I've been forced to confront the fact that these companies pursue profit over all else. They will drive humanity to the brink of extinction if it makes next quarter's profits go up by even the smallest amount. They fuel fascism (particularly in the USA) and destroy the environment because it's what makes them the most money. This has finally driven _me_ mad, and I've decided to finally do something about it by using alternatives to as many of these services as possible.

This does mean that most of the services I'm going to mention are either free and open source but require self-hosting, or paid services replacing previously free ones. These trade-offs won't be worth it for everyone, but they certainly are for me. I'll mention for each service the monetization model and where it's based. Also, for the record, I'm not sponsored by anyone to say anthing.

## Desktop operating system

The first and biggest change I made was ditching Microsoft Windows for Linux. With the continued enshittification of Windows and increasing frequency of anti-consumer decisions about the direction of the operating system, I decided it was time for a change. My PC's operating system had changed from being a piece of software that improved my experience to being an advertising platform selling my attention and my data, despite still being a paid product. I found this completely irreconcilable.

In 2024, I first started experimenting with Linux on a home server for self-hosting some services, as well as in WSL for Rust development. However, as Microsoft continued to do things that pissed me off, I finally installed Linux on my main PC in early 2025, and was using it as my daily-driver operating system by the middle of the year. I've tried multiple different Linux distributions, including Linux Mint, Pop!_OS, NixOS, and CachyOS, but I won't go into too much more detail about that here. That deserves its own post. At the time of writing, I have been using CachyOS for about six months, and I'm very happy with it and not planning to switch any time soon. All mentioned Linux distros are free and open-source, with contributors around the globe.

## Email, calendar, and cloud storage

More recently, I've decided to begin migrating my entire life off the Google suite. That includes the Gmail address I've been using for most of my life. The replacement I've chosen is Proton, a Swiss company, and it has seriously impressed me thus far. It uses a subscription model. The thing with creating a paid service in a market that's dominated by a competitor who offers their service for free* is that you actually need to make your serice worth paying for. If you've ever heard the quote by Gabe Newell about having to make a service that was so convenient that people were willing to pay instead of pirate, it's the same idea.

Proton walked me through setting up my own custom domain email address, and pointed out all potential issues and gave very good instructions on how to fix them. This was something that I was completely unable to figure out in Gmail. SPF, DKIM, and DMARC were just never quite right, but Proton got me up and running perfectly within minutes. The client, both on web and mobile, just feels more polished than Gmail. It has a first-class dark mode, which Gmail has never had.

Since it's also included with my Proton subscription, I've also been using their calendar and drive services, and they're fine. You get pretty much exactly what you'd expect from them. They don't have killer features, but I've also not found them lacking anything important.

## Web search engine

Searching the web back in 2015 was great. Google was awesome (as long as you had an ad-blocker and were wary of potential scam sites). However, in more recent years, it has become increasingly enshittified with more advertisements, more scam sites, advertised scams, AI slop results, AI slop summaries, and now a full-on "AI mode". Gross.

Enter Kagi. It's a small-ish US-based company whose product does pretty much exactly what Google used to, but better in every way. It has the high-quality search results. It has the quality-of-life features like regional search, scholar search, advanced image filters, great additional site links, and many more things that I found lacking in other search engines I tried after Google. They also filter out AI slop and SEO spam, and even provide a "small web" search, where you might find sites like this one! It even has a bunch of Google's newer features like AI summaries, should you want them. Crucially, though, they are opt-in, rather than forced upon you.

Perhaps most importantly, you are the _customer_, not the _product_. There are no ads, there are no sponsored results. They don't sell your browsing habits. They understand that they are providing a service, and that if their users don't like it, it's trivially easy to go back to Google. They know that their product needs to genuinely be better than the alternatives, and that's what they've accomplished. All they ask is a few dollars a month, and that is something I will gladly pay.

## Web browser

I have so many thoughts on this topic that I will have to write an entire separate post about it, but I'll include the gist here.

When I was in my early teens, I switched from Chrome to Firefox, and I've been using it for about a decade now. I refuse to use a Chromium fork, as good as many of them are (looking at you, Vivaldi), because if we lose Firefox, Google and Apple suddenly have a duopoly on how we access and browse the internet, which would be bad for a multitude of reasons. If you're here, I probably don't need to explain it to you, but I will eventually write about it in the aforementioned post anyway.

I'm a donor to the Mozilla Foundation, so know that the following criticism comes from a place of love. Firefox's development is painfully slow when compared to Chromium, and even Safari -- and that's saying something. It has been perpetually mismanaged by the bone-headed executives at Mozilla. The new Mozilla CEO wants to turn it into an AI-first browser. The vast majority of the project's funding comes from Google, because of a search deal that was very nearly killed as part of an anti-trust lawsuit in 2025, putting the future development of the browser in jeopardy. And yet, it's the only major independent browser engine, and that's why I support the project.

That doesn't mean that Firefox is the only browser worth using. There are a bunch of Firefox forks out there that are good. The two I've tried are the Zen browser and Waterfox, which are both good in their own ways. Both are obviously free and open source.

## Music platform

Spotify has the music industry in a bit of a chokehold. It's no secret that they pay their artists pitifully little, allow AI slop, and platform fascists. Even so, it's still the default platform. Users use it because it's convenient and has all their favourite artists. Artists are forced to use it because it has all the users. Yes, it's technically a Swedish company, but it's just as much a blight on the world as many of the American companies on this list.

I'm not going to pretend that there's an alternative that is just straight up better, but I'm pretty sure I've found the best one: Qobuz. It's a French platform that does both streaming and purchasing of music. They pay higher artist royalties, allow DRM-free downloads of purchased music, have a fairly extensive selection, and don't run fascist ads or platform right-wing extremist podcasts. All this, for one measly dollar more. For me, that's absolutely worth it.

## CDN and DNS platform

With all the recent Cloudflare outages, I figured it was time for a change. Having a single point of failure for such a massive portion of the web is just not sustainable, especially when it seems to be failing more and more frequently.

Next time Cloudflare goes down, many of the biggest platforms on the web will be unreachable, but not this site. That's because I'm using Bunny CDN (based in Slovenia) to host it and manage DNS. It has many of the same features as Cloudflare, and just like Cloudflare, their CDN replicates to edge servers all over the world. Bunny has been easier for me to wrap my head around, though, with a much neater dashboard and web UI. It's also fast and well-documented, with new exciting features almost every week.

## Note-taking app

For as long as I can remember, Google's Notes app has been awful with formatting. Non-standard formats that don't paste cleanly in or out of the app. Notion is online-only. You don't own your notes, the company does. You know what doesn't have these issues? Plain text in markdown format. It's super standard and supported pretty much everywhere. This blog is written in markdown!

That's why my current choice for note-taking is Obsidian. They're big on open formats and offline-first functionality. I've been very impressed by how seamless their platform is, with tons of official plugins and community extensions for more advanced functionality, should you need it.

## Audiobook platform

Audible is convenient, but since it's owned by Amazon, uses proprietary formats, and pays authors poorly, I've been trying to get away from it. For a while now, I've run an Audiobookshelf instance on my home server, and that's been great! The web and mobile apps work better than Audible's apps ever did. That doesn't directly solve the book acquisition problem, but that's where Libro.FM (based in the USA) comes in. Libro.fm works pretty much just like Audible, but allows DRM-free downloads, supports independent book store, and your credits never expire. It's also cheaper.

## Password manager and two-factor authentication

Alright I know this is bad, but yeah, I'm one of those people who just always used my browser's built-in password manager. Every time I tried another one, it was clunky or borderline broken. As for 2FA apps, I first used Google's authenticator app, and more recently, Authy. Google's just didn't work for me. Authy was... fine, but Twilio is one of these American companies that I want to get away from due to a hundred different micro-scandals.

Proton has an excellent password manager and 2FA app. Since I was already using Proton for email, I figured I might as well try their solutions, and I was blown away by how well they worked out-of-the-box. The apps and browser extensions just do what they need to and get out of your way.

## To be continued...

I will be adding to this page as my journey of freeing myself from big tech continues.

---

[Back home](/)

# Noogle

This is a Google search cloned app as a part of my personal projects built with using third party API's([Google Search](https://rapidapi.com/apigeek/api/google-search3/) and [YouTube Search Results](https://rapidapi.com/marindelija/api/youtube-search-results/) from Rapid API) and it allows users to search websites, news, images and videos by simply typing in search term. The main reason why I built this app is that I wanted to try out **SSR(Server Side Rendering)** with Next JS. 

## Demo

[![Go to Live](https://firebasestorage.googleapis.com/v0/b/instagrid-beafb.appspot.com/o/btn-link.svg?alt=media&token=2b3c5b08-9f84-4975-a3cc-150ce45c7f26)](https://noogle-taesoo.vercel.app/)
[![Go to Docker](https://firebasestorage.googleapis.com/v0/b/instagrid-beafb.appspot.com/o/btn-docker.svg?alt=media&token=9a53458c-c843-49f5-b990-e63bf271da0f)](https://hub.docker.com/repository/docker/taesoo/noogle)

![alt text](demo.gif)

## Stacks
- Next JS
- Tailwind CSS + SCSS
- Rapid API
- Figma (for logo design)

## What I learned from this project
Since this is my first project with Next JS, I've learned so much by scouring the official documentation and lots of googling.

- Best practice to allocate third party API with Next JS.
- How and when to use built-in API's such as Link, Image, and Router.
- Understanding route system more deeply and how Next JS makes it easier to access by **dynamic routing**.
- A vulnerable point of Next JS where it loses state context when route changes and renders a new page, and how to deal with it by using local storage.
- How **SSR** works and when to use: it's quite slower than static generation but better user interfaces.
- How to dockerize Next JS app.


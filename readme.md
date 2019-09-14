# Clover
## [Preview](https://esappear.github.io/clover/)
![preview](https://media.githubusercontent.com/avatars/8626321?orig=1&token=ANM6mziZ-bdE9fPaDWu1LVN0JQ-Vz-k_ks5b0I9FwA%3D%3D)

## Prerequisite
You got a blog project built by [Hexo](https://hexo.io). Your project directory should like this:
```
_config.yml  node_modules  package.json  public  scaffolds  source  themes
```
## Installation
- Clone the repository.
```
git clone https://github.com/esappear/hexo-theme-clover themes/clover
```
- Set theme in `_config.yml` file of the project root:
```
theme: clover
```
- Add `hexo-renderer-sass`
```
npm install hexo-renderer-sass --save
```
## Features
### Free home page.
You can set posts of specific categories or tags in home page.
```
home:
  # set card style of home page
  # card: project-card
  category: Projects
  tag:
    - js
    - css
  except_category: Something
  except_tag: 'someTag'
```
Post which belongs to `category` or `tag` and don't belongs to `except_category` or `except_tag` will be filtered.

### Page excerpt and photos
You can set an excerpt or photos in `Front-matter`.
```
---
layout: post
title: my_post_title
excerpt: my_post_excerpt
photos: [my_photo_url]
---
```
### Tags page.
- Create a page named tags
  ```
  hexo new page "tags"
  ```
- Edit tags page, set page layout to `tag`.
  ```
  ---
  layout: tag
  title: tags
  date: 2018-10-05 12:12:53
  ---
  ```
### Categories page.
- Create a page named categories
  ```
  hexo new page "categories"
  ```
- Edit categories page, set page layout to `category`.
  ```
  ---
  layout: category
  title: categories
  date: 2018-10-05 12:12:53
  ---
  ```
### About page.
- Create a page named about
  ```
  hexo new page "about"
  ```
- Edit categories page, set page layout to `about`.
  ```
  ---
  layout: about
  title: about
  date: 2018-10-05 12:12:53
  ---
  ```

### Social Media
```
social:
  GitHub: your-url
  Dribbble: your-url
  Behance: your-url
  Lofter: your-url
  Instagram: your-url
```

### Custom Menu
```
menu:
  Project: /
  Stuffs: /tags/Stuffs
  Archive: /archives
  About: /about
```

### Card Style
Two kinds of card style: `project-card` and `article-card`. (Never mind the name.)
```
card_style:
  home: project-card
  archive: article-card
  tag: article-card
  category: article-card
```

### Code Highlight
- You should disable the default highlight setting in `.config.yml` and then get gihub-style code highlight powered by `hight.js`.
```
highlight:
  enable: false
```
- declare language of code
```md
```js
console.log('hello world);
```

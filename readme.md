# Clover
## Prerequisite
You got a blog project built by ![Hexo](https://hexo.io). Your project directory should like this:
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

### Filter layout
With filter layout, you can also set posts of specific categories or tags in some custom page, just like home page.
- Create a custom page
```
hexo new page "css"
```
- Set page layout to `filter`, and declare the filter configs.
```
---
layout: filter
title: css_summary
date: 2018-10-06 17:41:57
filter:
  category: summary
  tag: css
  except_category: Something
  except_tag: 'someTag'
---
```
- Preview

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
You can specify the path or the card style (only useful for category page).
Two kinds of card style: `project-card` and `article-card`. (Never mind the name.)
```
menu:
  Project:
    path: /categories/Projects
    card: project-card
  Stuffs:
    path: /tags/Stuffs
    card: article-card
  Archive: /archives
  About: /about
```
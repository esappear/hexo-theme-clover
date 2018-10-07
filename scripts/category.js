'use strict';

var assign = require('object-assign');
var pagination = require('hexo-pagination');
var _ = require('lodash');

hexo.config.category_generator = assign({
  per_page: typeof hexo.config.per_page === "undefined" ? 10 : hexo.config.per_page
}, hexo.config.category_generator);

hexo.extend.generator.register('category', function(locals){
  var config = this.config;
  var perPage = config.category_generator.per_page;
  var paginationDir = config.pagination_dir || 'page';
 
  // var totalPosts = locals.posts.sort(config.category_generator.order_by || '-date');
  // var totalPosts = _.sortBy(locals.posts.data, config.category_generator.order_by || function (post) {
  //   return post.categories.data[0] ? post.categories.data[0].name : '-1';
  // });
  var rootPath = config.category_generator.path || 'categories';

  return locals.categories.reduce(function(result, category){
    if (!category.length) return result;

    var posts = category.posts.sort('-date');
    var data = pagination(category.path, posts, {
      perPage: perPage,
      layout: ['category', 'archive', 'index'],
      format: paginationDir + '/%d/',
      data: {
        category: category.name
      }
    });

    return result.concat(data);
  }, []).concat(pagination(rootPath, locals.posts.sort(config.category_generator.order_by || '-date'), {
    perPage: perPage,
    layout: ['category', 'archive', 'index'],
    format: paginationDir + '/%d/',
    data: {
      category: null,
    }
  }));
});
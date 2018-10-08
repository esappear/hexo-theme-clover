'use strict';
var pagination = require('hexo-pagination');
var assign = require('object-assign');
var _ = require('lodash');

hexo.config.index_generator = assign({
  per_page: typeof hexo.config.per_page === "undefined" ? 10 : hexo.config.per_page
}, hexo.config.index_generator);

hexo.extend.generator.register('index', function(locals){
  var config = this.config;
  var posts = (this.theme.config.home ? locals.posts.filter(getPostFilter(this.theme.config.home)): locals.posts).sort('-date');
  var paginationDir = config.pagination_dir || 'page';

  return pagination('', posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
});

function getPostFilter(config) {
  var filter_categories = _.isString(config.category) ? [config.category] : config.category;
  var filter_tags = _.isString(config.tag) ? [config.tag] : config.tag;
  var except_categories = _.isString(config.except_category) ? [config.except_category] : config.except_category;
  var except_tags = _.isString(config.except_tag) ? [config.except_tag] : config.except_tag;
  return function (post) {
    // 没有category或tag的时候 只看 except_category 和 except_tag
    if (!filter_categories && !filter_tags) {
      return !(_.find(post.categories.data, function (category) {
        return _.includes(except_categories, category.name);
      }) || _.find(post.tags.data, function (tag) {
        return _.includes(except_tags, tag.name);
      }));
    }
    // 在category或tag中 且不在except_category或except_tag 中
    return (_.find(post.categories.data, function (category) {
      return _.includes(filter_categories, category.name);
    }) || _.find(post.tags.data, function (tag) {
      return _.includes(filter_tags, tag.name);
    })) && !(_.find(post.categories.data, function (category) {
      return _.includes(except_categories, category.name);
    }) || _.find(post.tags.data, function (tag) {
      return _.includes(except_tags, tag.name);
    }));
  }
}

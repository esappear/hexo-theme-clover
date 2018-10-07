hexo.extend.helper.register('path_url', function(path){
  return path.replace(/\/|\'|\s/g, '-');
});
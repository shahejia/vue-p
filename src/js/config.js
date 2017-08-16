
const domain = 'http://139.199.192.48:8888';
export default {
  domain: domain,
  imgDomain: 'http://ofv795nmp.bkt.clouddn.com/',
  navList: domain + '/api/getlunbo',
  // 新闻
  newsList: domain + '/api/getnewslist',
  newsDetails: domain + '/api/getnew/',
  // 评论
  commentPut: domain + '/api/postcomment/',
  commentList: domain + '/api/getcomments/',
  //图片分享
  photoList: domain + '/api/getimages/',//图片列表
  photoCategory: domain + '/api/getimgcategory/',//图片分类
  photoInfo: domain + '/api/getimageInfo/',//图片详情
  photoThum: domain + '/api/getthumimages/',//图片缩略图
  //购买商品
  goodsList: domain + '/api/getgoods/',//商品列表
  goodsInfo: domain + '/api/goods/getinfo/', //商品参数
  goodsDesc: domain + '/api/goods/getdesc/',//商品图文介绍
}
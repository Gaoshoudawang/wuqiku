// ============================================================
// 王者武器库 - 统一道具映射配置文件
// ============================================================

// ITEM_SMALL_IMAGES
window.ITEM_SMALL_IMAGES = {
  '王者武器库自选卡': 'images/items_box/王者武器库自选卡/small.png',
  '王者武器库冰霜奇迹皮肤自选卡': 'images/items_box/王者武器库冰霜奇迹皮肤自选卡/small.png',
  '最终消灭-冰霜': 'images/items_box/最终消灭-冰霜/small.png',
  '81式-机械纪元': 'images/items_box/81式-机械纪元/small.png',
  'G36-机械纪元': 'images/items_box/G36-机械纪元/small.png',
  'MK47-机械纪元': 'images/items_box/MK47-机械纪元/small.png',
  'MK23-机械纪元': 'images/items_box/MK23-机械纪元/small.png',
  'M4A1-游骑兵': 'images/items_box/M4A1-游骑兵/small.png',
  'AK47-游骑兵': 'images/items_box/AK47-游骑兵/small.png',
  'AWM-游骑兵': 'images/items_box/AWM-游骑兵/small.png',
  '沙鹰-游骑兵': 'images/items_box/沙鹰-游骑兵/small.png',
  '铁锹-游骑兵': 'images/items_box/铁锹-游骑兵/small.png',
  'AK47-游骑兵-紫魇': 'images/items_box/AK47-游骑兵-紫魇/small.png',
  'AWM-游骑兵-紫魇': 'images/items_box/AWM-游骑兵-紫魇/small.png',
  'M4A1-游骑兵-紫魇': 'images/items_box/M4A1-游骑兵-紫魇/small.png',
  '沙鹰-游骑兵-紫魇': 'images/items_box/沙鹰-游骑兵-紫魇/small.png',
  '铁锹-游骑兵-紫魇': 'images/items_box/铁锹-游骑兵-紫魇/small.png',
  'M4A1-游骑兵-寒霜': 'images/items_box/M4A1-游骑兵-寒霜/small.png',
  'AK47-游骑兵-寒霜': 'images/items_box/AK47-游骑兵-寒霜/small.png',
  'AWM-游骑兵-寒霜': 'images/items_box/AWM-游骑兵-寒霜/small.png',
  '沙鹰-游骑兵-寒霜': 'images/items_box/沙鹰-游骑兵-寒霜/small.png',
  '铁锹-游骑兵-寒霜': 'images/items_box/铁锹-游骑兵-寒霜/small.png',
  'COP357-堕天神': 'images/items_box/COP357-堕天神/small.png',
  '王者星神-现代战场': 'images/items_box/王者星神-现代战场/small.png',
  '王者白虎-现代战场': 'images/items_box/王者白虎-现代战场/small.png',
  '消灭音效-罐头笑声': 'images/items_box/消灭音效-罐头笑声/small.png',
  '狙击枪线-星云': 'images/items_box/狙击枪线-星云/small.png',
  '乔月玩偶': 'images/items_box/乔月玩偶/small.png',
  '钻石x888': 'images/items_box/钻石/small.png',
  '钻石x488': 'images/items_box/钻石/small.png',
  '钻石x288': 'images/items_box/钻石/small.png',
  '钻石x100': 'images/items_box/钻石/small.png',
  '武器库积分x12': 'images/items_box/武器库积分/small.png',
  '武器库积分x10': 'images/items_box/武器库积分/small.png',
  '武器库积分x8': 'images/items_box/武器库积分/small.png',
  '武器库积分x6': 'images/items_box/武器库积分/small.png',
  '武器库积分x5': 'images/items_box/武器库积分/small.png',
};


// SLOT_IMAGES
window.SLOT_IMAGES = {
  white: '../images/common/slot/white.png',
  purple: '../images/common/slot/purple.png',
  gold: '../images/common/slot/gold.png',
  red: '../images/common/slot/red.png'
};

// SHOWCASE_IMAGES (出货动画大图)
window.SHOWCASE_IMAGES = {};
(function(){
  for(var key in window.ITEM_SMALL_IMAGES){
    // 有showcase.png的用大图，没有的用small.png
    var smallPath = window.ITEM_SMALL_IMAGES[key];
    var showcasePath = smallPath.replace('/small.png', '/showcase.png');
    window.SHOWCASE_IMAGES[key] = '../' + showcasePath;
  }
})();

// SHOWCASE_BG_IMAGES
window.SHOWCASE_BG_IMAGES = {};
(function(){
  var goldItems = [
    '王者武器库自选卡','王者武器库冰霜奇迹皮肤自选卡','最终消灭-冰霜',
    '81式-机械纪元','G36-机械纪元','MK47-机械纪元','MK23-机械纪元',
    'M4A1-游骑兵','AK47-游骑兵','AWM-游骑兵','沙鹰-游骑兵','铁锹-游骑兵',
    'AK47-游骑兵-紫魇','AWM-游骑兵-紫魇','M4A1-游骑兵-紫魇','沙鹰-游骑兵-紫魇','铁锹-游骑兵-紫魇',
    'M4A1-游骑兵-寒霜','AK47-游骑兵-寒霜','AWM-游骑兵-寒霜','沙鹰-游骑兵-寒霜','铁锹-游骑兵-寒霜',
    'COP357-堕天神','王者星神-现代战场','王者白虎-现代战场',
    '消灭音效-罐头笑声','狙击枪线-星云','乔月玩偶'
  ];
  goldItems.forEach(function(name){
    window.SHOWCASE_BG_IMAGES[name] = {
      bgStart: '../images/common/animation_bg/bg_start.webp',
      bgButton: '../images/common/animation_bg/bg_button_noname.webp'
    };
  });
})();

// EXCHANGE_ITEMS_MAP
window.EXCHANGE_ITEMS_MAP = {};
(function(){
  for(var key in window.ITEM_SMALL_IMAGES){
    var quality = (key.indexOf('钻石') === 0 || key.indexOf('武器库积分') === 0) ? 'purple' : 'gold';
    window.EXCHANGE_ITEMS_MAP[key] = {
      image: '../' + window.ITEM_SMALL_IMAGES[key],
      quality: quality
    };
  }
})();

// 根据道具名称或ID查找道具信息
window.findExchangeItem = function(product) {
  if (window.EXCHANGE_ITEMS_MAP[product]) {
    return window.EXCHANGE_ITEMS_MAP[product];
  }
  for (var key in window.EXCHANGE_ITEMS_MAP) {
    if (window.EXCHANGE_ITEMS_MAP[key].name === product) {
      return window.EXCHANGE_ITEMS_MAP[key];
    }
  }
  return {image: '', quality: 'gold', name: product};
};


// 构建按名称索引的ITEM_MAPPING
window.ITEM_MAPPING = {};
(function(){
  if(!window.EXCHANGE_ITEMS_MAP) return;
  for (var key in window.EXCHANGE_ITEMS_MAP) {
    if (window.EXCHANGE_ITEMS_MAP.hasOwnProperty(key)) {
      var item = window.EXCHANGE_ITEMS_MAP[key];
      if (item && item.name) {
        window.ITEM_MAPPING[item.name] = {
          image: item.image,
          quality: item.quality,
          showcase: item.showcase
        };
      }
    }
  }
})();

// ITEM_BEHAVIOR
var ITEM_BEHAVIOR = {};
(function(){
  var goldItems = [
    '王者武器库自选卡','王者武器库冰霜奇迹皮肤自选卡','最终消灭-冰霜',
    '81式-机械纪元','G36-机械纪元','MK47-机械纪元','MK23-机械纪元',
    'M4A1-游骑兵','AK47-游骑兵','AWM-游骑兵','沙鹰-游骑兵','铁锹-游骑兵',
    'AK47-游骑兵-紫魇','AWM-游骑兵-紫魇','M4A1-游骑兵-紫魇','沙鹰-游骑兵-紫魇','铁锹-游骑兵-紫魇',
    'M4A1-游骑兵-寒霜','AK47-游骑兵-寒霜','AWM-游骑兵-寒霜','沙鹰-游骑兵-寒霜','铁锹-游骑兵-寒霜',
    'COP357-堕天神','王者星神-现代战场','王者白虎-现代战场',
    '消灭音效-罐头笑声','狙击枪线-星云','乔月玩偶'
  ];
  goldItems.forEach(function(name){
    ITEM_BEHAVIOR[name] = {
      quality: 'gold',
      has_showcase: true,
      gacha_behavior: 'storage',
      bonus_behavior: 'warehouse',
    };
  });
  
  // 钻石 - 直接获得
  var diamondItems = ['钻石x888','钻石x488','钻石x288','钻石x100'];
  diamondItems.forEach(function(name){
    var amount = parseInt(name.replace('钻石x',''));
    ITEM_BEHAVIOR[name] = {
      quality: 'purple',
      has_showcase: false,
      gacha_behavior: 'points',
      bonus_behavior: 'points',
      points_type: 'diamond',
      points_amount: amount,
    };
  });
  
  // 武器库积分 - 直接获得
  var pointItems = ['武器库积分x12','武器库积分x10','武器库积分x8','武器库积分x6','武器库积分x5'];
  pointItems.forEach(function(name){
    var amount = parseInt(name.replace('武器库积分x',''));
    ITEM_BEHAVIOR[name] = {
      quality: 'purple',
      has_showcase: false,
      gacha_behavior: 'points',
      bonus_behavior: 'points',
      points_type: 'exchange',
      points_amount: amount,
    };
  });
})();

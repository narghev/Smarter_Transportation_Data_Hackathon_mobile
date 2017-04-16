import uuid from 'uuid/v4';

const Trucks = [
  {
    "orderId": 330568,
    "userId": 55549,
    "partnerId": 54980,
    "originLng": 44.56507110595703,
    "oroginLat": 40.231910705566406,
    "destLng": 44.565032958984375,
    "destLat": 40.187339782714844,
    "distance": 7089.884,
    "fare": 1200
  },
  {
    "orderId": 330577,
    "userId": 26026,
    "partnerId": 57302,
    "originLng": 44.482421875,
    "oroginLat": 40.15483093261719,
    "destLng": 44.48880386352539,
    "destLat": 40.150630950927734,
    "distance": 7146.065,
    "fare": 1500
  },
  {
    "orderId": 330590,
    "userId": 813,
    "partnerId": 60361,
    "originLng": 44.56315994262695,
    "oroginLat": 40.199981689453125,
    "destLng": 44.50591278076172,
    "destLat": 40.205848693847656,
    "distance": 6902.846,
    "fare": 900
  },
  {
    "orderId": 330634,
    "userId": 56682,
    "partnerId": 432,
    "originLng": 44.50530242919922,
    "oroginLat": 40.20198440551758,
    "destLng": 44.51134490966797,
    "destLat": 40.20526885986328,
    "distance": 3473.73,
    "fare": 600
  },
  {
    "orderId": 330638,
    "userId": 55989,
    "partnerId": 106676,
    "originLng": 44.512718200683594,
    "oroginLat": 40.18954086303711,
    "destLng": 44.5133171081543,
    "destLat": 40.18927001953125,
    "distance": 10344.223,
    "fare": 1500
  },
  {
    "orderId": 330651,
    "userId": 60813,
    "partnerId": 45757,
    "originLng": 43.8326416015625,
    "oroginLat": 40.82743835449219,
    "destLng": 43.84226989746094,
    "destLat": 40.785797119140625,
    "distance": 4086.2427,
    "fare": 600
  },
  {
    "orderId": 330662,
    "userId": 8344,
    "partnerId": 43011,
    "originLng": 44.52598190307617,
    "oroginLat": 40.130950927734375,
    "destLng": 44.51438522338867,
    "destLat": 40.16975784301758,
    "distance": 11431.331,
    "fare": 1400
  },
  {
    "orderId": 330681,
    "userId": 46068,
    "partnerId": 57689,
    "originLng": 44.5820426940918,
    "oroginLat": 40.213531494140625,
    "destLng": 44.56080627441406,
    "destLat": 40.206356048583984,
    "distance": 3323.0503,
    "fare": 600
  },
  {
    "orderId": 330685,
    "userId": 35261,
    "partnerId": 47250,
    "originLng": 44.55451583862305,
    "oroginLat": 40.2181510925293,
    "destLng": 44.502418518066406,
    "destLat": 40.19906997680664,
    "distance": 7447.592,
    "fare": 1000
  },
  {
    "orderId": 330689,
    "userId": 9220,
    "partnerId": 43021,
    "originLng": 44.51103973388672,
    "oroginLat": 40.18541717529297,
    "destLng": 44.505130767822266,
    "destLat": 40.173946380615234,
    "distance": 1908.1432,
    "fare": 600
  },
  {
    "orderId": 330704,
    "userId": 33207,
    "partnerId": 41469,
    "originLng": 44.5006103515625,
    "oroginLat": 40.197181701660156,
    "destLng": 44.48820877075195,
    "destLat": 40.20197677612305,
    "distance": 411.534,
    "fare": 700
  },
  {
    "orderId": 330744,
    "userId": 15231,
    "partnerId": 44943,
    "originLng": 44.50625991821289,
    "oroginLat": 40.198551177978516,
    "destLng": 44.52214050292969,
    "destLat": 40.18439483642578,
    "distance": 3815.072,
    "fare": 700
  },
  {
    "orderId": 330763,
    "userId": 53733,
    "partnerId": 40582,
    "originLng": 44.47761154174805,
    "oroginLat": 40.8120231628418,
    "destLng": 44.522865295410156,
    "destLat": 40.800071716308594,
    "distance": 5793.9736,
    "fare": 800
  },
  {
    "orderId": 330778,
    "userId": 63917,
    "partnerId": 649,
    "originLng": 44.51374816894531,
    "oroginLat": 40.16279983520508,
    "destLng": 44.51335906982422,
    "destLat": 40.1883430480957,
    "distance": 4542.5244,
    "fare": 700
  },
  {
    "orderId": 330790,
    "userId": 3587,
    "partnerId": 22807,
    "originLng": 44.551979064941406,
    "oroginLat": 40.23149490356445,
    "destLng": 44.56151580810547,
    "destLat": 40.2358512878418,
    "distance": 11880.796,
    "fare": 1400
  },
  {
    "orderId": 330816,
    "userId": 28913,
    "partnerId": 37151,
    "originLng": 44.44793701171875,
    "oroginLat": 40.162559509277344,
    "destLng": 44.50631332397461,
    "destLat": 40.206031799316406,
    "distance": 17911.654,
    "fare": 2000
  },
  {
    "orderId": 330817,
    "userId": 33227,
    "partnerId": 2,
    "originLng": 44.44486999511719,
    "oroginLat": 40.16672897338867,
    "destLng": 44.48908233642578,
    "destLat": 40.17369842529297,
    "distance": 17433.105,
    "fare": 2000
  },
  {
    "orderId": 330821,
    "userId": 63271,
    "partnerId": 46724,
    "originLng": 44.50162887573242,
    "oroginLat": 40.20109939575195,
    "destLng": 44.46232223510742,
    "destLat": 40.21438980102539,
    "distance": 0,
    "fare": 600
  },
  {
    "orderId": 330838,
    "userId": 42828,
    "partnerId": 55771,
    "originLng": 44.49365997314453,
    "oroginLat": 40.225250244140625,
    "destLng": 44.554481506347656,
    "destLat": 40.23432540893555,
    "distance": 0,
    "fare": 0
  },
  {
    "orderId": 330851,
    "userId": 61080,
    "partnerId": 43177,
    "originLng": 44.492008209228516,
    "oroginLat": 40.14561080932617,
    "destLng": 44.52915573120117,
    "destLat": 40.1904296875,
    "distance": 8167.989,
    "fare": 1100
  }
];

export {Trucks};

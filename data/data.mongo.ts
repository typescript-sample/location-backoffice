export const events = [
  {
    '_id': '5d2c4239bf30281dd4d44c4a',
    'name': 'Firework',
    'description': 'Firework',
    'imageURL': 'https://thethaiger.com/wp-content/uploads/2020/11/People-fireworks.jpg',
    'startTime': new Date('2021-10-15T12:00:00.000Z'),
    'endTime': new Date('2021-10-15T17:00:00.000Z'),
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.630176,
        10.856011
      ]
    },
    'locationId': '5d146cbffbdf2b1d30742262'
  },
  {
    '_id': '5d2c4388f0630e1dd4dfbd94',
    'name': 'Dance',
    'description': 'Dance',
    'imageURL': 'https://i.guim.co.uk/img/media/1bb31654c7ada0b32268489b347bbe9067c72fdc/164_256_3724_2234/master/3724.jpg',
    'startTime': new Date('2021-10-15T17:00:00.000Z'),
    'endTime': new Date('2021-10-15T18:00:00.000Z'),
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.630176,
        10.856011
      ]
    },
    'locationId': '5d146cbffbdf2b1d30742262'
  },
  {
    '_id': '5d2c43b0f0630e1dd4dfbd95',
    'name': 'Buffet',
    'description': 'Buffet',
    'imageURL': 'https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/sqao4maiqmyotln7fxxo.webp',
    'startTime': new Date('2021-10-15T12:00:00.000Z'),
    'endTime': new Date('2021-10-15T17:00:00.000Z'),
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.631039,
        10.855858
      ]
    },
    'locationId': '5d1d7a18c5e4f320a86ca6b1'
  },
  {
    '_id': '5d2c43edf0630e1dd4dfbd96',
    'name': 'Cafe Shop',
    'description': 'Cafe Shop',
    'imageURL': 'https://media-cdn.tripadvisor.com/media/photo-s/1a/05/9f/f7/fruit-tree-coffee-shop.jpg',
    'startTime': new Date('2021-10-16T08:00:00.000Z'),
    'endTime': new Date('2021-10-16T10:00:00.000Z'),
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.630691,
        10.855842
      ]
    },
    'locationId': '5d1d7a66c5e4f320a86ca6b2'
  },
  {
    '_id': '5d2c5a11f0630e1dd4dfbd98',
    'name': 'Big Firework',
    'imageURL': 'https://www.themayor.eu/web/files/articles/6394/main_image/thumb_1024x663_new-years-eve-3882231_1920.jpg',
    'startTime': new Date('2021-10-15T00:00:00.000Z'),
    'endTime': new Date('2021-10-15T02:00:00.000Z'),
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.630176,
        10.856011
      ]
    },
    'locationId': '5d146cbffbdf2b1d30742262'
  }
];
export const bookables = [
  {
    '_id': '5d1f1514955067127041fb61',
    'name': 'Projector 1',
    'description': 'Projector 1',
    'type': 'P',
    'capacity': 30,
    'imageURL': 'https://dlcdnwebimgs.asus.com/gain/4714c984-9e1d-4231-8ca6-eb9f5b4724ea/',
    'locationId': '5d146cbffbdf2b1d30742262'
  },
  {
    '_id': '5d1f15a096988a127077547f',
    'name': 'Projector 2',
    'description': 'Projector 2',
    'type': 'P',
    'capacity': 20,
    'imageURL': 'https://www.projectorcentral.com/images/projectors2/img11218.jpg',
    'locationId': '5d1d7b79c5e4f320a86ca6b4'
  },
  {
    '_id': '5d1f15ac96988a1270775480',
    'name': 'Meeting room 3',
    'description': 'Meeting room 3',
    'type': 'R',
    'capacity': 15,
    'imageURL': 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Moseley_Hall_lounge.jpg',
    'locationId': '5d1d7a66c5e4f320a86ca6b2'
  },
  {
    '_id': '5d3822528838bb200cd6aaa0',
    'name': 'Meeting room 4',
    'description': 'Meeting room 4',
    'type': 'R',
    'capacity': 20,
    'imageURL': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Sitzungszimmer_SVP.jpg',
    'locationId': '5d146cbffbdf2b1d30742262'
  },
  {
    '_id': '5d38277e8838bb200cd6aaa1',
    'name': 'Meeting room 5',
    'description': 'Meeting room 5',
    'type': 'R',
    'capacity': 20,
    'imageURL': 'https://upload.wikimedia.org/wikipedia/commons/1/15/A_meeting_between_a_man_and_a_woman.jpg',
    'locationId': '5d146cbffbdf2b1d30742262'
  }
];
export const bookings = [
  {
    '_id': '5d1f1d22955067127041fb62',
    'userId': '00001',
    'id': '5d1f1514955067127041fb61',
    'subject': 'yuu',
    'description': 'test des123',
    'startTime': new Date('2021-10-05T17:00:00.000Z'),
    'endTime': new Date('2021-10-06T17:00:00.000Z'),
    'status': 'A'
  },
  {
    '_id': '5d1f1de996988a1270775481',
    'userId': '00002',
    'id': '5d1f15a096988a127077547f',
    'subject': 'asd',
    'description': 'des',
    'startTime': new Date('2021-10-01T17:00:00.000Z'),
    'endTime': new Date('2021-10-11T17:00:00.000Z'),
    'status': 'N'
  },
  {
    '_id': '5d1f1e2896988a1270775482',
    'userId': '00003',
    'id': '5d1f15ac96988a1270775480',
    'subject': 'test subject',
    'description': 'test des',
    'startTime': new Date('2021-10-01T15:00:00.000Z'),
    'endTime': new Date('2021-10-29T17:00:00.000Z'),
    'status': 'N'
  },
  {
    '_id': '5d22efbec78fa20590fb3fce',
    'userId': '00004',
    'id': '5d1f1514955067127041fb61',
    'subject': 'subject1',
    'description': 'test des',
    'startTime': new Date('2021-10-05T11:00:00.000Z'),
    'endTime': new Date('2021-10-05T12:00:00.000Z'),
    'status': 'A'
  },
  {
    '_id': '5d231717377dfd18d8f6c2d5',
    'userId': '00005',
    'id': '5d1f1514955067127041fb61',
    'subject': 'test',
    'description': 'test des',
    'startTime': new Date('2021-10-05T14:00:00.000Z'),
    'endTime': new Date('2021-10-05T15:00:00.000Z'),
    'status': 'A'
  },
  {
    '_id': '5d303442f0ecc91be087452d',
    'userId': '00005',
    'id': '5d1f1514955067127041fb61',
    'subject': 'test',
    'description': 'test des1',
    'startTime': new Date('2021-10-05T07:00:00.000Z'),
    'endTime': new Date('2021-10-05T09:00:00.000Z'),
    'status': 'A'
  },
  {
    '_id': '5d3ac3ce2bcb1b26688f9968',
    'id': '5d1f1514955067127041fb61',
    'description': 'asdd',
    'endTime': new Date('2021-10-11T17:00:00.000Z'),
    'startTime': new Date('2021-10-01T17:00:00.000Z'),
    'status': 'N',
    'subject': 's23',
    'userId': '00006'
  },
  {
    '_id': '5d3acdf60677681544311e6f',
    'id': '5d1f15a096988a127077547f',
    'description': 'test desad',
    'endTime': new Date('2021-10-10T17:00:00.000Z'),
    'startTime': new Date('2021-10-02T17:00:00.000Z'),
    'status': 'N',
    'subject': 'sss124',
    'userId': '00008'
  },
  {
    '_id': '5d3ace520677681544311e70',
    'id': '5d1f1514955067127041fb61',
    'description': 'test das34',
    'endTime': new Date('2021-10-19T17:00:00.000Z'),
    'startTime': new Date('2021-10-18T17:00:00.000Z'),
    'status': 'A',
    'subject': 'test subject123',
    'userId': '00007'
  },
  {
    '_id': '5d4aa0a894e1bd63b849b733',
    'id': '5d1f1514955067127041fb61',
    'description': 'test bookingr 1',
    'endTime': new Date('2021-11-07T02:00:00.000Z'),
    'startTime': new Date('2021-11-07T01:30:00.000Z'),
    'status': 'A',
    'subject': 'test bookingr 1',
    'userId': '00007'
  },
  {
    '_id': '5d4be96a20c12a0d0094a311',
    'id': '5d38277e8838bb200cd6aaa1',
    'description': 'test bookingr 2',
    'endTime': new Date('2021-11-07T08:00:00.000Z'),
    'startTime': new Date('2021-11-07T07:00:00.000Z'),
    'status': 'A',
    'subject': 'test bookingr 2',
    'userId': '00007'
  },
  {
    '_id': '5d5263e336b44006d4da9a87',
    'id': '5d38277e8838bb200cd6aaa1',
    'description': 'ass',
    'endTime': new Date('2021-11-13T01:00:00.000Z'),
    'startTime': new Date('2021-11-13T00:30:00.000Z'),
    'status': 'A',
    'subject': 'ass',
    'userId': '00008'
  },
  {
    '_id': '5d5263fb36b44006d4da9a88',
    'id': '5d38277e8838bb200cd6aaa1',
    'description': 'vc',
    'endTime': new Date('2021-11-13T01:30:00.000Z'),
    'startTime': new Date('2021-11-13T01:00:00.000Z'),
    'status': 'A',
    'subject': 'vc',
    'userId': '00009'
  },
  {
    '_id': '5d5271ad83fb8026d032533a',
    'id': '5d3822528838bb200cd6aaa0',
    'description': 'sdfdsf',
    'endTime': new Date('2021-11-13T03:30:00.000Z'),
    'startTime': new Date('2021-11-13T01:30:00.000Z'),
    'status': 'A',
    'subject': 'sdfsdf',
    'userId': '00010'
  }
];
export const locations = [
  {
    '_id': '5d146cbffbdf2b1d30742262',
    'name': 'Highland Coffee',
    'description': 'Highland Coffee',
    'type': 'coffee',
    'imageURL': 'https://thumbs.dreamstime.com/z/highlands-coffee-shop-vung-tau-vietnam-jan-facade-vietnamese-chain-producer-distributor-86167986.jpg',
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.62435293197633,
        10.852848365357607
      ]
    }
  },
  {
    '_id': '5d1d7a18c5e4f320a86ca6b1',
    'name': 'Trung Nguyen Coffee',
    'description': 'Trung Nguyen Coffee',
    'type': 'coffee',
    'imageURL': 'https://cdn2.shopify.com/s/files/1/0065/6759/1999/files/dia-chi-trung-nguyen-legend-cafe-tai-vincom-ha-nam_grande.jpg',
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.631039,
        10.855858
      ]
    }
  },
  {
    '_id': '5d1d7a66c5e4f320a86ca6b2',
    'name': 'The Coffee House',
    'description': 'The Coffee House',
    'type': 'coffee',
    'imageURL': 'https://vietnaminsider.vn/wp-content/uploads/2019/06/bai-hoc-khoi-nghiep-the-coffee-house.jpg',
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.630691,
        10.855842
      ]
    }
  },
  {
    '_id': '5d1d7a85c5e4f320a86ca6b3',
    'name': 'Starbucks Coffee',
    'description': 'Starbucks Coffee',
    'type': 'coffee',
    'imageURL': 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17185/production/_118879549_gettyimages-1308703596.jpg',
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.631495,
        10.854809
      ]
    }
  },
  {
    '_id': '5d1d7b79c5e4f320a86ca6b4',
    'name': 'King Coffee',
    'description': 'farthest',
    'type': 'coffee',
    'imageURL': 'https://www.asia-bars.com/wp-content/uploads/2015/11/cong-caphe-1.jpg',
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.624183,
        10.855761
      ]
    }
  },
  {
    '_id': '5d1efb3796988a127077547c',
    'name': 'Sumo BBQ Restaurant',
    'description': 'farthest',
    'type': 'restaurant',
    'imageURL': 'https://135525-391882-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/04/Summo-BBQ-1280x960.jpeg',
    'geo': {
      'type': 'Point',
      'coordinates': [
        106.624169,
        10.855769
      ]
    }
  }
];
export const locationInfo = [
  {
    '_id': '5d146cbffbdf2b1d30742262',
    'viewCount': 108,
    'rate': 3.1944444444444446,
    'rate1': 21,
    'rate2': 30,
    'rate3': 5,
    'rate4': 11,
    'rate5': 41
  },
  {
    '_id': '5d1d7a18c5e4f320a86ca6b1',
    'viewCount': 2,
    'rate': 3,
    'rate1': 0,
    'rate2': 1,
    'rate3': 0,
    'rate4': 1,
    'rate5': 0
  },
  {
    '_id': '5d1d7a66c5e4f320a86ca6b2',
    'viewCount': 0,
    'rate': 0,
    'rate1': 0,
    'rate2': 0,
    'rate3': 0,
    'rate4': 0,
    'rate5': 0
  },
  {
    '_id': '5d1d7a85c5e4f320a86ca6b3',
    'viewCount': 0,
    'rate': 0,
    'rate1': 0,
    'rate2': 0,
    'rate3': 0,
    'rate4': 0,
    'rate5': 0
  },
  {
    '_id': '5d1d7b79c5e4f320a86ca6b4',
    'viewCount': 0,
    'rate': 0,
    'rate1': 0,
    'rate2': 0,
    'rate3': 0,
    'rate4': 0,
    'rate5': 0
  },
  {
    '_id': '5d1efb3796988a127077547c',
    'viewCount': 0,
    'rate': 0,
    'rate1': 0,
    'rate2': 0,
    'rate3': 0,
    'rate4': 0,
    'rate5': 0
  },
  {
    '_id': '5d562ad357568217d0d9a2d5',
    'viewCount': 0,
    'rate': 0,
    'rate1': 0,
    'rate2': 0,
    'rate3': 0,
    'rate4': 0,
    'rate5': 0
  }
];
export const rates = [
  {
    '_id': '5d1482fbfbdf2b1d30742265',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00008',
    'rate': 1,
    'rateTime': new Date('2021-10-01T17:45:00.000Z'),
    'review': 'Bad'
  },
  {
    '_id': '5d1484610301a21d30408428',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00001',
    'rate': 3,
    'rateTime': new Date('2021-10-01T17:45:00.000Z'),
    'review': 'Poor'
  },
  {
    '_id': '5d14846b0301a21d30408429',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00002',
    'rate': 5,
    'rateTime': new Date('2021-10-01T17:45:00.000Z'),
    'review': 'Excellent'
  },
  {
    '_id': '5d1afde1d7d47b00b812a988',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00003',
    'rate': 1,
    'rateTime': new Date('2021-10-02T06:46:57.762Z'),
    'review': 'Poor'
  },
  {
    '_id': '5d1afe06d7d47b00b812a989',
    'locationId': '5d1dbf98ecd2f2259848e691',
    'userId': '00003',
    'rate': 4,
    'rateTime': new Date('2021-10-02T06:49:14.260Z'),
    'review': 'Good'
  },
  {
    '_id': '5d1efe7ac051441a98bb1c40',
    'locationId': '5d1efb3796988a127077547c',
    'userId': '00005',
    'rate': 1,
    'rateTime': new Date('2021-10-05T07:38:34.127Z'),
    'review': '1 star'
  },
  {
    '_id': '5d245ae34c0c7120b0afb0b8',
    'locationId': '5d1efb3796988a127077547c',
    'userId': '00004',
    'rate': 5,
    'rateTime': new Date('2021-10-09T09:13:57.733Z'),
    'review': '5 star'
  },
  {
    '_id': '5d2863c30827362104157287',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00005',
    'rate': 1,
    'rateTime': new Date('2021-10-12T10:41:06.276Z'),
    'review': 'Poor'
  },
  {
    '_id': '5d2863f10827362104157288',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00005',
    'rate': 5,
    'rateTime': new Date('2021-10-12T10:41:52.953Z'),
    'review': 'Good'
  },
  {
    '_id': '5d495e41086c5243e8543957',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00007',
    'rate': 3,
    'rateTime': new Date('2021-11-06T11:02:25.547Z'),
    'review': 'Bad'
  },
  {
    '_id': '5d4d1c4671feb314fc6701fa',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00007',
    'rate': 3,
    'rateTime': new Date('2021-11-09T07:09:58.446Z'),
    'review': 'Great'
  },
  {
    '_id': '5d4d1cb971feb314fc6701fb',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00007',
    'rate': 5,
    'rateTime': new Date('2021-11-09T07:11:53.186Z'),
    'review': 'All the following are required, so the text must be in a single straight line that overflows a box where that overflow is hidden.'
  },
  {
    '_id': '5d5283eb52bbe31cc82ea66c',
    'locationId': '5d1d7a18c5e4f320a86ca6b1',
    'userId': '00007',
    'rate': 4,
    'rateTime': new Date('2021-11-13T09:33:31.881Z'),
    'review': 'Good'
  },
  {
    '_id': '5d52844252bbe31cc82ea66d',
    'locationId': '5d1d7a18c5e4f320a86ca6b1',
    'userId': '00007',
    'rate': 2,
    'rateTime': new Date('2021-11-13T09:34:58.383Z'),
    'review': 'Bad'
  },
  {
    '_id': '5d64d53e6feb5135b0fb9719',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00007',
    'rate': 3,
    'rateTime': new Date('2021-11-27T07:01:15.349Z'),
    'review': 'Bad'
  },
  {
    '_id': '5d65f0a466b1440c0818b5d6',
    'locationId': '5d146cbffbdf2b1d30742262',
    'userId': '00007',
    'rate': 1,
    'rateTime': new Date('2021-11-28T03:10:28.568Z'),
    'review': 'Bad'
  }
];
export const savedLocations = [
  {
    '_id': '5d1b05a7d07abf0554be482b',
    'userId': '00007',
    'locationId': '5d146cbffbdf2b1d30742262'
  },
  {
    '_id': '5d1b0d05746a310554f34eb7',
    'userId': '00007',
    'locationId': '5d146eac0301a21d30408424'
  },
  {
    '_id': '5d1b1c57c6609320a0a90bb8',
    'userId': '00005',
    'locationId': '5d146cbffbdf2b1d30742262'
  },
  {
    '_id': '5d245dd935827b0e28dc5cad',
    'userId': '00005',
    'locationId': '5d1efb3796988a127077547c'
  },
  {
    '_id': '5d285c11e34425067cbb2791',
    'userId': '00007',
    'locationId': '5d1efb3796988a127077547c'
  }
];
export const tours = [
  {
    '_id': '5d1b1cbed07abf0554be482d',
    'startTime': '2019-07-01T17:00:00.000Z',
    'endTime': '2019-07-04T17:00:00.000Z',
    'locations': [
      '5d146cbffbdf2b1d30742262',
      '5d146eac0301a21d30408424'
    ]
  },
  {
    '_id': '5d1b1ee0746a310554f34eb9',
    'startTime': '2019-07-01T17:00:00.000Z',
    'endTime': '2019-07-04T17:00:00.000Z',
    'locations': [
      '5d146efa0301a21d30408426',
      '5d14780b0301a21d30408427'
    ]
  },
  {
    '_id': '5d1c1913ca104d2c205f3e11',
    'startTime': '2019-07-03T17:00:00.000Z',
    'endTime': '2019-07-09T17:00:00.000Z',
    'locations': [
      '5d146cbffbdf2b1d30742262',
      '5d146eac0301a21d30408424'
    ]
  },
  {
    '_id': '5d1f12b596988a127077547e',
    'startTime': '2019-07-05T17:00:00.000Z',
    'endTime': '2019-07-09T17:00:00.000Z',
    'locations': [
      '5d146cbffbdf2b1d30742262',
      '5d146eac0301a21d30408424'
    ]
  },
  {
    '_id': '5d2ed42add55222044c431fa',
    'startTime': '2019-07-01T17:00:00.000Z',
    'endTime': '2019-07-04T17:00:00.000Z',
    'locations': [
      '5d146cbffbdf2b1d30742269',
      '5d146eac0301a21d30408424'
    ]
  }
];
export const trips = [
  {
    '_id': '5d1c1e29979a231ba03c9195',
    'startTime': '2019-07-02T17:00:00.000Z',
    'endTime': '2019-07-05T17:00:00.000Z',
    'locations': [
      {
        'id': '5d146cbffbdf2b1d30742262',
        'visited': true
      },
      {
        'id': '5d146eac0301a21d30408424',
        'visited': false
      }
    ]
  },
  {
    '_id': '5d1c29f8d254e21ba02402ad',
    'startTime': '2019-07-03T17:00:00.000Z',
    'endTime': '2019-07-10T17:00:00.000Z',
    'locations': [
      {
        'id': '5d146eeb0301a21d30408425',
        'visited': true
      },
      {
        'id': '5d146efa0301a21d30408426',
        'visited': true
      }
    ]
  },
  {
    '_id': '5d1c4e0dae9d5f0b145a07b8',
    'startTime': '2019-07-08T17:00:00.000Z',
    'endTime': '2019-07-10T17:00:00.000Z',
    'locations': [
      {
        'id': '5d146cbffbdf2b1d30742262',
        'visited': true
      },
      {
        'id': '5d146eac0301a21d30408424',
        'visited': false
      }
    ]
  },
  {
    '_id': '5d2da8e360af8f21608bcbaf',
    'startTime': '2019-07-02T17:00:00.000Z',
    'endTime': '1970-01-01T00:00:00.000Z',
    'locations': [
      {
        'id': '5d146cbffbdf2b1d30742262',
        'visited': true
      },
      {
        'id': '5d146eac0301a21d30408424',
        'visited': false
      }
    ]
  }
];

